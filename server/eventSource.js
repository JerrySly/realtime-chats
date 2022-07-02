const express = require('express')
const cors = require('cors')
const events = require('events')

const emitter = new events.EventEmitter();
const app = express();
app.use(express.json())
app.use(cors())

app.get("/connect", (req, res) => {
    res.writeHead(200, {
        'Connection': 'keep-alive',
        'Content-Type': 'text/event-stream',
        'Cache-Control': 'no-cache'
    })
    console.log('Connect is available');
    emitter.on('newMessage', (message) => {
        res.write(`data:${JSON.stringify(message)} \n\n`);
    })
})


app.post("/new-message", (req, res) => {
    const message = req.body.message;
    emitter.emit('newMessage', message);
    res.status(200);
    res.end();
})

app.listen(5000, () => {
    console.log('Start server');
})