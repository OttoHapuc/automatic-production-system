"use client";
import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";

export default function SignIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    if (email === "" || password === "") {
      return toast.error("Preencha os campos devidamente");
    }
    setEmail("");
    setPassword("");
  };
  return (
    <div className="image-login h-full w-full flex items-center justify-center shadow-inner shadow-amber-800">
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
      />
      <div className="max-w-xs p-2 bg-white rounded-xl shadow-amber-800 shadow-md">
        <h1 className="-mb-10 text-3xl">Login</h1>
        <img
          className="rounded-ss-full"
          src="https://www.liebherr.com/shared/media/corporate/news/news-2016/09/23/liebherr-r944c-abareias-2_img_710.jpg"
          alt=""
        />
        <form
          className="mt-4 space-y-4 pb-4 flex flex-col items-center"
          onSubmit={handleSubmit}
        >
          <input
            type="text"
            placeholder="@abareias.com.br"
            className="h-7 w-full border-solid border-2 border-amber-500 rounded-md outline-none px-2"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder="Senha"
            className="h-7 w-full border-solid border-2 border-amber-500 rounded-md outline-none px-2"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button
            type="submit"
            className="bg-amber-500 buttons button-click w-32 h-10 rounded-full font-bold text-white"
          >
            ENTRAR
          </button>
        </form>
      </div>
    </div>
  );
}
