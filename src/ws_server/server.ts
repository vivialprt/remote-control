import { createWebSocketStream, WebSocketServer } from 'ws';
import { controller } from './controller';


export const wsServer = new WebSocketServer({ port: 8282 });
console.log('Websockets server started on port 8282');

wsServer.on('connection', (ws, req) => {
    console.log(`New connection: ${req.socket.remoteAddress}`);

    const wsStream = createWebSocketStream(ws, { decodeStrings: false });

    wsStream.on('data', async (chunk) => {
        let cmd = await controller(chunk.toString())

        console.log(chunk.toString());

    });

    ws.on('close', () => {
        console.log(`Disconnect: ${req.socket.remoteAddress}`);
    });

});
