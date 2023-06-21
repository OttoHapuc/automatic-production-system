import { ErrorResponse } from "@/server/error";
import authorizationToken from "@/server/middlewares/authorizationToken";
import { NextApiRequest, NextApiResponse } from "next";

export default async function Machines(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { headers, body } = req;
  const { authorization } = headers;
  const token = authorization?.split(" ")[1];
  try {
    const message = await authorizationToken(token);
    res.status(201).json({ message });
  } catch (error: ErrorResponse | any) {
    return res.status(error.status).json({ message: error.message });
  }
}
