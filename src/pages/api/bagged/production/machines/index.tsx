import { ErrorResponse } from "@/server/error";
import authorizationToken from "@/server/middlewares/authorizationToken";
import { NextApiRequest, NextApiResponse } from "next";

export default async function Machines(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { headers } = req;
  try {
    const user_id = await authorizationToken(headers);
    res.status(201).json({ user_id });
  } catch (error: ErrorResponse | any) {
    return res.status(error.status).json({ message: error.message });
  }
}
