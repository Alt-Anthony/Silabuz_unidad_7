import { Router } from "express";
// funciones
import { postUsuario,postToken } from "./controller";

const rutaUsuario: Router = Router()


rutaUsuario.post("/", postUsuario)
rutaUsuario.post("/token", postToken)


export default rutaUsuario


