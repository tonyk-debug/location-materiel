import express from "express";
import cors from "cors";

import routes from "./routes/api.js";
import errorHandler from "./middlewares/errorHandler.js";


const app = express();

app.use(cors());
app.use(express.json());

app.use("/api", routes);

app.use((req, res, next) =>{
    const err = new Error("Route introuvable");
    err.status = 404;
    next(err);
});

app.use(errorHandler);

export default app;