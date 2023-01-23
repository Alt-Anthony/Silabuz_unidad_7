import { Router } from "express";
import { getCanciones, postCanciones, getIDCancion } from "./controller";

const rutaCanciones: Router = Router();

rutaCanciones.get("/", getCanciones);
rutaCanciones.get("/:id", getIDCancion);
rutaCanciones.post("/", postCanciones);

export default rutaCanciones;
