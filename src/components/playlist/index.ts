import { Router } from "express";
import { getPlaylists } from "./controller";

const rutaPlaylists: Router = Router();

rutaPlaylists.get("/", getPlaylists);

export default rutaPlaylists;