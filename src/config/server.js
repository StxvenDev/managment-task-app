import express from 'express'
import cors from 'cors'
import { initDatabase } from './database.js';
import userRouter from '../routers/user.routes.js';

export class Server {
  constructor() {
    this.app = express();
    this.port = process.env.PORT;
    this.paths = {
      user : '/api/user'
    }
    this.database();
    this.middleware();
    this.routers();
  }

  database(){
    initDatabase()
      .then(console.log)
      .catch(console.error);
  }

  middleware(){
    this.app.use(cors());
    this.app.use(express.urlencoded());
    this.app.use(express.json());
  }

  routers(){
    this.app.use(this.paths.user, userRouter);
  }

  listen() {
    this.app.listen(this.port, () => {
      console.log(`Server is running in port ${this.port}`);
    })
  }
}