import type { Request, Response } from "express";
import { PrismaClient } from "@prisma/client";

import jwt from "jsonwebtoken";
import dotenv from "dotenv";

const prisma = new PrismaClient();

dotenv.config();

export const postUser =async (req:Request, res:Response):Promise<void> => {
  try {
    const data = req.body
    const element = await prisma.user.create({
      data: {
        name: data.name,
        email: data.email,
        password: data.password,
      }
    })

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
}


export const postToken =async (req:Request, res:Response): Promise<void> => {
  try {
    const data = req.body

    const element = await prisma.user.findUnique({
      where: {email:data.email}
    })

    if (element && element.password === data.password) {
      const token = jwt.sign({element}, process.env.SECRET_KEY??"", {
        expiresIn:"12h"
      })
      res.status(200).json({
        element,
        token,
      });
    }
    
  } catch (error) {
    res.status(500).json({
      ok: false,
      message: error,
    });
    console.log(error);
  }
}