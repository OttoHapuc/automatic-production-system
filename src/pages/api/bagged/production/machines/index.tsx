import { ErrorResponse } from "@/server/error";
import authorizationToken from "@/server/middlewares/authorizationToken";
import { NextApiRequest, NextApiResponse } from "next";

const machines = [
  {
    id: 1,
    name: "Maquina I",
  },
  {
    id: 2,
    name: "Maquina II",
  },
  {
    id: 3,
    name: "Maquina III",
  },
  {
    id: 4,
    name: "Maquina IV",
  },
];

export default async function Machines(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { headers } = req;
  try {
    const user_id = await authorizationToken(headers);
    res.status(201).json({ machines });
  } catch (error: ErrorResponse | any) {
    return res.status(error.status).json({ message: error.message });
  }
}
