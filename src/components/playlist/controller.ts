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


//aqui van los ocntroladores