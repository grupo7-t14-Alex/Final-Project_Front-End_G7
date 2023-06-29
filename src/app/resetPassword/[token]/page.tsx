"use client";

import { Button } from "@/components/button";
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { Input } from "@/components/inputs/input";
import { AuthContext } from "@/context/Auth.Context";
import {
  ResetPasswordData, 
  resetPasswordSchema,
} from "@/schema/sendEmail.schema";
import { zodResolver } from "@hookform/resolvers/zod";
import Link from "next/link";
import { useContext } from "react";
import { useForm } from "react-hook-form";

import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";

const ResetPasswordPageToken = ({ params }: { params: { token: string } }) => {
  const token = params.token;

  const { resetPassword } = useContext(AuthContext);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ResetPasswordData>({
    mode: "onBlur",
    resolver: zodResolver(resetPasswordSchema),
  });

  const submit = (data: ResetPasswordData) => {
    const newData = { ...data };
    resetPassword(newData, token);
  };

  return (
    <>
     <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
      <Header>
        <Link
          href={"/login"}
          className="text-[#4529E6] text-center font-bold hover:text-[#5126EA] hover:scale-105 mr-12"
        >
          Fazer Login
        </Link>
        <Link
          href={"/register"}
          className="bg-transparent hover:scale-105 font-bold border border-[#ADB5BD] inline-block px-4 py-2 rounded hover:bg-[#ADB5BD] hover:text-white hover:border-transparent"
        >
          Cadastrar
        </Link>
      </Header>
      <section className="container mx-auto p-3">
        <div className="w-full bg-gray-1000 p-10 max-w-[450px] mx-auto rounded mt-[100px] mb-[100px]">
          <form
            className=" mb-8 w-full flex flex-col items-start"
            onSubmit={handleSubmit(submit)}
          >
            <h1 className="mb-8 text-black font-bold text-[24px] leading-[30px]">
              Informe um email para recuperação de senha
            </h1>
            <label
              htmlFor="email"
              className="mb-2 text-black font-medium text-[14px] leading-[17px]"
            >
              Nova Senha
            </label>
            <Input
              id="password"
              type="password"
              {...register("password")}
              placeholder="Digite sua nova senha aqui"
            />
            {errors.password?.message && (
              <p className="text-[14px] text-red-500">
                {errors.password.message}
              </p>
            )}
            <label
              htmlFor="email"
              className="mb-2 text-black font-medium text-[14px] leading-[17px]"
            >
              Confirme a nova senha
            </label>
            <Input
              id="confirmPassword"
              type="password"
              {...register("confirmPass")}
              placeholder="Confirmar senha "
            />
            {errors.confirmPass?.message && (
              <p className="text-[14px] text-red-500">
                {errors.confirmPass.message}
              </p>
            )}
            <Button
              size="big"
              color="brand1"
              type="submit"
              className="w-full mt-6"
            >
              Concluído
            </Button>
          </form>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default ResetPasswordPageToken;
