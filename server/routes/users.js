const router = require('express').Router();
const {User, validate} = require('../models/user');
const bcrypt = require('bcrypt');
const Token = require('../models/token');
const sendEmail = require('../utlis/sendEmail');
const crypto = require('crypto');

router.post('/', async (req, res)=>{
    // console.log("error")
    try{
        const { error } = validate(req.body);
        if(error) 
            return res.status(400).send({message:error.details[0].message});

        let user = await User.findOne({email:req.body.email});
        if(user){
            return res.status(409).send({message:"User with given email already exists."})
        }

        const salt = await bcrypt.genSalt(Number(process.env.SALT));
        const hashpassword = await bcrypt.hash(req.body.password, salt);
        
        user = await new User({...req.body, password:hashpassword}).save();
            res.status(200).send({message:"User created successfully."});

        const token = await new Token({
            userId:user._id,
            token:crypto.randomBytes(32).toString("hex"),
        }).save();

        const url = `${process.env.BASE_URL}users/${user._id}/verify/${token.token}`;
        await sendEmail(user.email, "Verify Email", url);
        
        res.status(200).send({message:"An Email sent to your account please verify!"});
    }catch(err){
        res.status(500).send({message:"Internal server error."});
        console.error(err);
    }
});

router.get("/:id/verify/:token", async(req, res) =>{
    try{
      const user = await User.findById({_id:req.params.id});
      if(!user){
        return res.status(400).send({message:"Invalid Link"});
      }
      const token = await Token.findOne({
        userId:user._id, token:req.params.token
      });

      if(!token){
        return res.status(400).send({message:"Invalid Link"});
      }
      await User.updateOne({_id:user._id, verified:true});
      await token.remove();
      res.status(200).send({message:"Email verified successfully!"});
  
    }catch(err){
      res.status(500).send({message:"Internal server error"});
      console.log(err);
    }
  })

module.exports = router;