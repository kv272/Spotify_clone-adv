require('dotenv').config();

const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const { MongoClient } = require('mongodb');
const jwt = require('jsonwebtoken');

const app = express();
app.use(bodyParser.json());
app.use(cors());
app.use(express.json());

const uri = `mongodb+srv://vermakunal2777:${process.env.password}@usercredentials.hq2b8cu.mongodb.net/?retryWrites=true&w=majority&appName=UserCredentials?directConnection=true`;
const connection = new MongoClient(uri);
console.log(uri);

let ver = "";
function authenticateToken(req, res, next) {
    const authHeader = req.headers['authorization'];
    const token = authHeader && authHeader.split(' ')[1];
    if(token == null) return res.sendStatus(401);
    console.log(token);
    jwt.verify(token, process.env.ACCESS_TOKEN_SCERET, (err, user) => {
        if(err) return res.sendStatus(403);
        req.user = user;
        console.log(req.user);
    })
    next();
}


app.post('/login', async (req, res) => {
    await connection.connect();
    console.log("successfully connected");
    const UserCredentials = connection.db("Credentials");
    const mycoll = UserCredentials.collection("UserCredentials");
    const findResult = mycoll.find({
        userId : req.body.userId,
        password : req.body.password
    })
    const result = await findResult.toArray();
    if(result.length > 0) {
        const username = req.body.userId;
        const user = {
            name : username, 
        }
        const accessToken = jwt.sign(user, process.env.ACCESS_TOKEN_SCERET);
        res.json({accessToken : accessToken});
    } else {
        res.json({
            message : "you are not registered perhaps you'd like to sign up",
            status : 404,
        })
    }
})

app.post('/signup', async (req, res) => {
    try {
        await connection.connect();
        console.log("successfully connected");
        const UserCredentials = connection.db("Credentials");
        const mycoll = UserCredentials.collection("UserCredentials");
        const curr = await mycoll.countDocuments();
        console.log(curr);
        const password = req.body.password;
        const doc = { userId : curr + 1, password : req.body.password};
        await mycoll.insertOne(doc);
        res.send(200);
    } catch (e) {
        console.error(e);
        res.status(500).json({ error: e.message });
    }
})

app.post('/verify', authenticateToken, (req, res) => {
    res.sendStatus(200);
});

app.listen(2000, () => {
    console.log("listening on port 2000");
})