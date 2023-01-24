import type { Request, Response } from "express";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const getPlaylists = async (req:Request, res:Response): Promise<void> => {
    try{
        const playlist = await prisma.playlist.findMany({
            include:{songs:true},
        });
        res.status(200).json({
            ok:true,
            results: playlist,
        });
    }catch (error){
       res.status(500).json({
            ok:false,
            message: error,
        });
        console.log(error);       
    }
};
export const postPlaylist = async(req:Request,res:Response):Promise<void>=>{
    try{
        const data = req.body;

        const playlist = await prisma.playlist.create({
            data:{
                name:data.name,
                author:{connect: {id: data.author}},
                songs:{connect: data.songs.map((song:any)=>({id:song.id})),},
            },
        });
        res.status(201).json({
            ok:true,
            element:playlist,
        });
    }
    catch(error){
        res.status(500).json({
            ok:false,
            message:error,
        });
        console.log(error); 
    }
};

export const addSong =async (req:Request,res:Response):Promise<void> => {
    try{
     const data = req.body;
 
     const playlist = await prisma.playlist.update({
         where: {
             id: data.id_playlist,
         },
         include:{
             songs: true,
         },
         data:{
             songs: { connect:{id: data.id_song}},
         },
     });
     res.json({
         message:"ADDED",
         info: playlist,
     });
    }
    catch(error){
     res.status(500).json({
         message:error
     });
     console.log(error); 
    }
 }
 


//aqui van los ocntroladores