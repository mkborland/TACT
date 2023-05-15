import express, { json } from "express";
import cors from "cors";
import corsSetting from "./middleware/corsSetting.js";
const server = express();

//Middleware
server.use(json);
server.use(cors(corsSetting));
//Routes Path

export default server;
