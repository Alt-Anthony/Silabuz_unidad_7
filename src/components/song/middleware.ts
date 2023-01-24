import type { Request, Response } from "express";
import { verify } from "jsonwebtoken";

require("dotenv").config;

export function validateToken(req:Request,res:Response) {
  const { authorization } = req.headers;

  if (!authorization) return false;
  if (!authorization.startsWith("Bearer ")) return false;

  const token = authorization.replace("Bearer ", "");

  return verify(token, process.env.SECRET_KEY ?? "", (err, decoded) => {
    if (err) return false;
    return true;
  });
}


