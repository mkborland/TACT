import express, { json } from "express";
import cors from "cors";
import corsSetting from "./middleware/corsSetting.js";
import route from "./routes/index.js";
import aircraftroutes from "./routes/aircraftRoutes.js";
const server = express();

//Middleware
server.use(json());
server.use(cors(corsSetting));
//Routes Path
server.use(route);
server.use("/api/", aircraftroutes);

export default server;
