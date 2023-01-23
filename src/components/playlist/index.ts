import { Router } from "express";
import { getPlaylists, postPlaylist } from "./controller";

const rutaPlaylists: Router = Router();

rutaPlaylists.get("/", getPlaylists);
rutaPlaylists.post("/", postPlaylist);
export default rutaPlaylists;