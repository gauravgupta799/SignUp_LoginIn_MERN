require('dotenv').config();
const express = require('express');
const cors = require('cors');
const app = express();
const port = process.env.PORT || 8080;
const connectionDB  = require('./db');
const userRoutes = require('./routes/users');
const authRoutes = require('./routes/auth');

// databse connection 
connectionDB();

// middleware
app.use(express.json());
app.use(cors());

app.use("/api/users", userRoutes);
app.use("/api/auth", authRoutes);


app.get("/", (req, res) => {
    res.status(200).send("Hello Server!");
});

app.listen(port, ()=>{
    console.log(`listening on port ${port}`)
});