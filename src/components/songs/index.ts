import { Router } from "express";
//! funciones
import { getCanciones,postCanciones } from "./controller";

const rutaCancion = Router();

rutaCancion.get("/", getCanciones);
rutaCancion.post("/", postCanciones);

export default rutaCancion