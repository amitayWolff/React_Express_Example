const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = process.env.PORT || 5000;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// This displays message that the server running and listening to specified port
app.listen(port, () => console.log(`Listening on port ${port}`));

app.get('/express_backend', (req, res) => {
    res.send({ express: 'YOUR EXPRESS BACKEND IS CONNECTED TO REACT' });
});

app.get('/users', (req, res) => {
    res.send([
        { firstname: "user1", age: 33 },
        { firstname: "user2", age: 44 },
        { firstname: "user3", age: 55 }
    ]);
});

app.post("/start", (req, res) => {
    console.log(req.body);
    res.send(req.body);
})