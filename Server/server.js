import express, { json } from "express";
import cors from "cors";
import corsSetting from "./middleware/corsSetting.js";
import route from "./routes/index.js";
const server = express();

//Middleware
server.use(json());
server.use(cors(corsSetting));
//Routes Path
server.use(route);

export default server;
