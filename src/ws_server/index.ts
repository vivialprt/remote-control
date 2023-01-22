import { WebSocket } from 'ws';


export const wsServer = new WebSocket.Server({ port: 8282 });
console.log('Websockets server started on port 8282');

wsServer.on('connection', (ws, req) => {
    console.log(`New connection: ${req.socket.remoteAddress}`);

    const wsStream = WebSocket.createWebSocketStream(ws, { decodeStrings: false });

    wsStream.on('data', async (chunk) => {
        console.log(chunk.toString());
    });

    ws.on('close', () => {
        console.log(`Disconnect: ${req.socket.remoteAddress}`);
    });

});
