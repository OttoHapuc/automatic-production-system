import GenericError from "@/server/error";

type Body = {
  email: string;
  password: string;
};

function Login(body: Body) {
  const { email, password } = body;
  if (!body) throw GenericError("Body is Nessesary",400)
  else if (email === "" || password === "") throw GenericError("incorrectly filled fields" ,400)
  else{return "Você conseguiu logar"}
}

export default {
    Login
}