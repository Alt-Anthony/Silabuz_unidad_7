import { Router } from "express";
import { getPlaylists, postPlaylist, addSong } from "./controller";

const rutaPlaylists: Router = Router();

rutaPlaylists.get("/", getPlaylists);
rutaPlaylists.post("/", postPlaylist);
rutaPlaylists.put("/add-song", addSong);

export default rutaPlaylists;