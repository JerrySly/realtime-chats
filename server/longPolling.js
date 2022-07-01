const express = require('express')
const cors = require('cors')
const events = require('events');
const PORT = 5000;

const app = express();

app.use(cors())

const emiter = new events.EventEmitter();
app.use(express.json())

app.get("/get-messages", (req, res) => {
    emiter.once('update', (message)=>{
        res.json(message)
    })
})

app.post("/new-message", ((req, res) => {
    const message = req.body.message;
    emiter.emit('update',message);
    res.status(200);
    res.end();
}));

app.listen(PORT, () => {
    console.log('Start server');
})



