const ws = require('ws')


const server =  new ws.Server({port:5000}, ()=>{
    console.log("Start server");
});


server.on("connection",(ws)=>{
    ws.on('message',(message)=>{
        message = JSON.parse(message);
        mailingForClients(message);
    })
})

function mailingForClients(message){
    server.clients.forEach( client => {
        client.send(message);
    })
}