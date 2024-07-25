import express from 'express'
import { initDatabase } from './database.js';

class Server {
  constructor() {
    this.app = express();
    this.port = process.env.PORT;
    this.database();
  }

  database(){
    initDatabase()
      .then(console.log)
      .catch(console.error);
  }

  middleware() {

  }

  routers(){

  }

  listen() {
    this.app.listen(() => {
      console.log(`Server is running in port ${this.port}`);
    })
  }

}


export default Server;