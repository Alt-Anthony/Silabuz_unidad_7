import express, { type Application } from "express";
import { rutaCanciones } from "./components";

const app: Application = express();

app.use(express.json());

app.use("/api/v1/songs", rutaCanciones);

export default app;
