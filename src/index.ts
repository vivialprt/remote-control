import { wsServer } from "./ws_server/index";
import { httpServer } from "./http_server/index";

const HTTP_PORT = 8181;

console.log(`Start static http server on the ${HTTP_PORT} port!`);
httpServer.listen(HTTP_PORT);

process.on('exit', () => {
    wsServer.clients.forEach(ws => ws.close());
    wsServer.close();
    process.exit();
});