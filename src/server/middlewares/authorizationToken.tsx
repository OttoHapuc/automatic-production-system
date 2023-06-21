import GenericError, { ErrorResponse } from "../error";
import jwt from 'jsonwebtoken'
//import { prisma } from "../config/dataBase";
type JWTPayload = {
  email: string;
};

export default async function authorizationToken(token?: string) {
  if (!token) throw GenericError("Token invalid", 401);
  try {
    const { email } = jwt.verify(token, process.env.JWT_SECRET);
    //    const session = await prisma.session.findFirst({
    //      where: {
    //        token,
    //      },
    //    });
    //    if(!session) throw GenercError("Token Invalid",401);
    return email;
  } catch (error: ErrorResponse | any) {
    console.log(error);
    throw GenericError(error.message, 401);
  }
}
