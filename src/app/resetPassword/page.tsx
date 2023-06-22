"use client";

import { Button } from "@/components/button";
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { Input } from "@/components/inputs/input";
import { AuthContext } from "@/context/Auth.Context";
import { SendEmailData, sendEmailSchema } from "@/schema/sendEmail.schema";
import { zodResolver } from "@hookform/resolvers/zod";
import Link from "next/link";
import { useContext } from "react";
import { useForm } from "react-hook-form";

const ResetPasswordPage = () => {
  const { sendEmail } = useContext(AuthContext);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SendEmailData>({
    mode: "onBlur",
    resolver: zodResolver(sendEmailSchema),
  });

  const submit = (data: SendEmailData) => {
    const newData = { ...data };
    sendEmail(newData);
  };

  return (
    <>
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
              E-mail
            </label>
            <Input
              id="email"
              type="text"
              {...register("email")}
              placeholder="Digite seu e-mail aqui"
            />
            {errors.email?.message && (
              <p className="text-[14px] text-red-500">{errors.email.message}</p>
            )}
            <Button
              size="big"
              color="brand1"
              type="submit"
              className="w-full mt-6"
            >
              Enviar email
            </Button>
          </form>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default ResetPasswordPage;
