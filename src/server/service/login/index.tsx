import GenericError from "@/server/error";
import jwt from 'jsonwebtoken'

type Body = {
  email: string;
  password: string;
};

function Login(body: Body) {
  const { email, password } = body;
  if (!body) throw GenericError("Body is Nessesary", 400);
  else if (email === "" || password === "")
    throw GenericError("incorrectly filled fields", 400);
  // create get in db, email exist?
  const token = jwt.sign({user_id:"id do user que vem do banco quando email válido e senha válida"}, process.env.JWT_SECRET!)
  //create session in db
  return token
}

export default {
  Login,
};
