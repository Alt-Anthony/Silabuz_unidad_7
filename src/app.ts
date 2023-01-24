import express, { type Application } from "express";
import { rutaCanciones, userRouter } from "./components";
import { rutaPlaylists } from "./components/index";
const app: Application = express();

app.use(express.json());

app.use("/api/v1/songs", rutaCanciones);
app.use("/api/v1/playlist",rutaPlaylists);
app.use("/api/v1/users", userRouter);

export default app;
