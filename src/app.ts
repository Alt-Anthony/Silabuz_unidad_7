import express, { type Application } from "express";
import { rutaCancion,rutaUsuario } from "./components";

import { rutaPlaylists } from "./components/index";

const app: Application = express();


app.use(express.json());

app.use("/api/v1/songs", rutaCancion);
app.use("/api/v1/playlist",rutaPlaylists);
app.use("/api/v1/users", rutaUsuario);


export default app;