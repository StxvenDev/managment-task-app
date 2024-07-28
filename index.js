import  {Server}  from "./src/config/server.js";
import 'dotenv/config'

const server = new Server();

server.listen();
