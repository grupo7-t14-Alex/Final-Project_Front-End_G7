"use client";

import React, { createContext, useState } from "react";
import { toast } from "react-toastify";
import { Api } from "../services/Api";
import { NextRouter } from "next/router";
import { registerSchemaType } from "@/schema/register.schema";
import { useRouter } from "next/navigation";
import { setCookie } from "nookies";

export const AuthContext = createContext({} as iProviderValue);

interface iAuthProviderChildren {
  children: React.ReactNode;
}
interface iInfoUser {
  token: string;
  userId: string;
}
export interface iInfoLogin {
  email: string;
  password: string;
}
interface iProviderValue {
  loginFunction(infoLogin: iInfoLogin): Promise<void>;
  userLogin: iInfoUser | null;
  registerFunction: (infoRegister: registerSchemaType) => Promise<void>;
}

export const AuthProvider = ({
  children,
}: iAuthProviderChildren & { router: NextRouter }) => {
  const router = useRouter();

  const [userLogin, setUserLogin] = useState<iInfoUser | null>(null);

  const loginFunction = async (infoLogin: iInfoLogin) => {
    try {
      const res = await Api.post<iInfoUser>("/login", infoLogin).then((res) => {
        setCookie(null, "@token", res.data.token, {
          maxAge: 60 * 30,
          patch: "/",
        });
        setCookie(null, "@id", res.data.userId, {
          maxAge: 60 * 30,
          patch: "/",
        });

        const token = res.data.token;
        Api.defaults.headers.common.Authorization = `Bearer ${token} `;
      });

      toast.success("Login realizado com Sucesso!");
      setTimeout(() => {
        router.push("/");
      }, 2000);
    } catch (error) {
      toast.error("E-mail ou senha incorreto!");
    }
  };

  const registerFunction = async (infoRegister: registerSchemaType) => {
    try {
      const transformedData = {
        name: infoRegister.name,
        email: infoRegister.email,
        password: infoRegister.password,
        confirmPass: infoRegister.confirmPass,
        cpf: infoRegister.cpf,
        phone: infoRegister.phone,
        birthdate: infoRegister.birthDate,
        seller: infoRegister.seller,
        description: infoRegister.description,
        address: {
          cep: infoRegister.cep,
          city: infoRegister.city,
          complement: infoRegister.complement,
          number: infoRegister.number,
          state: infoRegister.state,
          street: infoRegister.street,
        },
      };

      const res = await Api.post("/users", transformedData);

      toast.success("Usuario cadastrado com Sucesso!");
      setTimeout(() => {
        router.push("/login");
      }, 2000);
    } catch (error) {
      toast.error("Algo deu errado cadastro!");
    }
  };

  return (
    <AuthContext.Provider
      value={{
        loginFunction,
        userLogin,
        registerFunction,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
