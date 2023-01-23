import type { Request, Response } from "express";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const getCanciones = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const element = await prisma.song.findMany();
    res.status(200).json({
      ok: true,
      results: element,
    });
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

    if (data.year <= 0) {
      throw new Error("Use correct dates");
    }

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

export const getIDCancion = async (req: Request, res: Response) => {
  try {
    const urlID = req.params.id;

    // Prisma CLI => CRUD => GET, POST; DELETe
    const element = await prisma.song.findUnique({
      where: {
        id: Number(urlID),
      },
    });

    res.status(200).json({
      ok: true,
      results: element,
    });
  } catch (error) {
    res.status(500).json({
      ok: false,
      message: error,
    });
    console.log(error);
  }
};
