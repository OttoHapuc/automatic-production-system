import { ErrorResponse } from "@/server/error";
import authorizationToken from "@/server/middlewares/authorizationToken";
import { NextApiRequest, NextApiResponse } from "next";

export default async function MachineStop(req:NextApiRequest,res:NextApiResponse){
    const { headers, body } = req;
  try {
    const user_id = await authorizationToken(headers);
    res.status(201).json(`A maquina ${body.name} parou`);
  } catch (error: ErrorResponse | any) {
    return res.status(error.status).json({ message: error.message });
  }
}