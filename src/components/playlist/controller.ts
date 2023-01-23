import type { Request, Response } from "express";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const getPlaylists = async (req:Request, res:Response): Promise<void> => {
    try{
        const playlist = await prisma.playlist.findMany();
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
            include:{
                songs:true
            },
            data:{
                name:data.name,
                author:data.author,
            }
        })
        res.status(201).json({
            ok:true,
            result:playlist,
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
             id: data.id.playlist,
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