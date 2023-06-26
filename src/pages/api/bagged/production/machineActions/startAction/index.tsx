import { ErrorResponse } from "@/server/error";
import authorizationToken from "@/server/middlewares/authorizationToken";
import validate from "@/server/middlewares/validateSchema";
import { MachineSchema } from "@/server/schemas/machine-Schema";
import { NextApiRequest, NextApiResponse } from "next";

export default async function MachineStart(req:NextApiRequest,res:NextApiResponse){
    const { headers, body } = req;
  try {
    validate(MachineSchema,body)
    const user_id = await authorizationToken(headers);
    res.status(201).json(`A maquina ${body.name} iniciou`);
  } catch (error: ErrorResponse | any) {
    return res.status(error.status).json({ message: error.message });
  }
}