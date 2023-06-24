import Method from "@/server/utils/method";
import { NextApiRequest, NextApiResponse } from "next";
import { ErrorResponse } from "../../../server/error/index";
import LoginService from "@/server/service/login";
import validate from "@/server/middlewares/validateSchema";
import { signInSchema } from "@/server/schemas/login-Schema";

export default function LoginSession(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { method, body } = req;

  try {
    Method("POST", method);
    validate(signInSchema, body)
    const message = LoginService.Login(body);
    res.status(201).json({ message: message });
  } catch (error: ErrorResponse | any) {
    return res.status(error.status).json({ message: error.message });
  }
}
