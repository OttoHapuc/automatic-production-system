import { IncomingHttpHeaders } from "http";
import GenericError, { ErrorResponse } from "../error";
import jwt from "jsonwebtoken";
//import { prisma } from "../config/dataBase";
type JWTPayload = {
  user_id: number;
};

export default async function authorizationToken(headers:IncomingHttpHeaders) {
  const { authorization } = headers;
  const token = authorization?.split(" ")[1];
  if (!token) throw GenericError("Token invalid", 401);
  try {
    const decodedToken = jwt.verify(
      token,
      process.env.JWT_SECRET!
    ) as JWTPayload;
    const { user_id } = decodedToken;
    //    const session = await prisma.session.findFirst({
    //      where: {
    //        token,
    //      },
    //    });
    //    if(!session) throw GenercError("Token Invalid",401);
    return user_id;
  } catch (error: ErrorResponse | any) {
    console.log(error);
    throw GenericError(error.message, 401);
  }
}
