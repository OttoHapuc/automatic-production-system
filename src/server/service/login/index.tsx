import GenericError from "@/server/error";

type Body = {
  email: string;
  password: string;
};

function Login(body: Body) {
  const { email, password } = body;
  if (!body) throw GenericError("Body is Nessesary", 400);
  else if (email === "" || password === "")
    throw GenericError("incorrectly filled fields", 400);

  //  const token = jwt.sign(user_id, process.env.JWT_SECRET)
  //create session in db
  //  return token
}

export default {
  Login,
};
