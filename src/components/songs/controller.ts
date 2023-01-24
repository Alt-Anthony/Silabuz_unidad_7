import type { Request, Response } from "express";
import { PrismaClient } from "@prisma/client";
import { validarToken } from "./middleware";

const prisma = new PrismaClient();

export const getCanciones = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const valorToken = validarToken(req, res);

    if (valorToken) {
      const element = await prisma.song.findMany();
      res.status(200).json({
        ok: true,
        message:"todas las canciones",
        results: element,
      });
    } else {
      const element = await prisma.song.findMany({ where: { public: true } });
      res.status(200).json({
        ok: true,
        message:"canciones publicas",
        results: element,
      });
    }
  } catch (error) {
    res.status(500).json({
      ok: false,
      message: error,
    });
    console.log(error);
  }
};

export const postCanciones = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const data = req.body;

    const element = await prisma.song.create({
      data: {
        name: data.name,
        artist: data.artist,
        album: data.album,
        year: data.year,
        genre: data.genre,
        duration: data.duration,
        public: data.public,
      },
    });

    res.status(201).json({
      ok: true,
      result: element,
    });
  } catch (error) {
    res.status(500).json({
      ok: false,
      message: error,
    });
    console.log(error);
  }
};
