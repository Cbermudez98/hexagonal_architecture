// Todo list

import express from "express";
import { routerTask } from "./infrastructure/adapter/request.adapter";

const app = express();

app.use(express.json());

app.use("/task", routerTask);

app.listen(3000, () => {
    console.log("server running at port 3000");
});