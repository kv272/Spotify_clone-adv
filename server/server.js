const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const { MongoClient } = require('mongodb');


const app = express();
app.use(bodyParser.json());
app.use(cors());

const uri = `mongodb+srv://vermakunal2777:iSsk66AjPX4FP8fL@usercredentials.hq2b8cu.mongodb.net/?retryWrites=true&w=majority&appName=UserCredentials`;
const connection = new MongoClient(uri);



app.get('/login', async (req, res) => {

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
        if(password === null) {
            console.log("password not found");
            res.send(400);
        }
        const doc = { userId : curr + 1, password : req.body.password};
        await mycoll.insertOne(doc);
        res.send(200);
    } catch (e) {
        console.error(e);
        res.status(500).json({ error: e.message });
    }
})

app.listen(2000, () => {
    console.log("listening on port 2000");
})