"use client";

import React, { createContext, useEffect, useState } from "react";
import { toast } from "react-toastify";
import { Api } from "../services/Api";
import { NextRouter } from "next/router";
import { registerSchemaType } from "@/schema/register.schema";
import { useRouter } from "next/navigation";
import { parseCookies, setCookie } from "nookies";
import { Seller } from "@/app/seller/[id]/page";
import { ResetPasswordData, SendEmailData } from "@/schema/sendEmail.schema";

export const AuthContext = createContext({} as iProviderValue);

interface iAuthProviderChildren {
  children: React.ReactNode;
}
interface iInfoUser {
  token: string;
  id: string;
}
export interface iInfoLogin {
  email: string;
  password: string;
}
interface iProviderValue {
  token: string;
  loginFunction(infoLogin: iInfoLogin): Promise<void>;
  userLogin: iInfoUser | null;
  registerFunction: (infoRegister: registerSchemaType) => Promise<void>;
  user: any;
  findSeller: (id: string) => Promise<any>;
  protectRoutes: () => void;
  sendEmail: (email: SendEmailData) => void;
  resetPassword: (password: ResetPasswordData, token: string) => void;
}

export const AuthProvider = ({
  children,
}: iAuthProviderChildren & { router: NextRouter }) => {
  const router = useRouter();

  const [user, setUser] = useState<Seller>({} as Seller);

  const [userLogin, setUserLogin] = useState<iInfoUser | null>(null);

  const cookies = parseCookies();
  const userId = cookies["@id"];
  const token = cookies["@token"];

  const loginFunction = async (infoLogin: iInfoLogin) => {
    try {
      const res = await Api.post<iInfoUser>("/login", infoLogin).then((res) => {
        setCookie(null, "@token", res.data.token, {
          maxAge: 60 * 5000,
          patch: "/",
        });
        setCookie(null, "@id", res.data.id, {
          maxAge: 60 * 5000,
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

  const protectRoutes = () => {
    if (!token) {
      router.push("/login");
    }
  };

  useEffect(() => {
    const findUser = async (id: string) => {

      try {
        const response = await Api.get(`/users/${id}`, {
          headers: {
            Authorization: `Bearer ${token}`
          }
        });
        
        setUser(response.data);
      } catch (error) {
        console.log(error)
      }
    };
  
    if (userId) {
      findUser(userId);
    }
  }, [userId]);

  const findSeller = async (id: string) => {
    const response = await Api.get(`/users/${id}`, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    });
    const seller = response.data;
    return seller;
  };

  const sendEmail = (email: SendEmailData) => {
    Api.post("users/resetpass", email)
      .then(() => {
        toast.success("Login realizado com Sucesso!");
        router.push("/");
      })
      .catch((err) => {
        console.log(err);
        toast.error("Verifique se o email esta correto!");
      });
  };

  const resetPassword = (password: ResetPasswordData, token: string) => {
    Api.patch(`users/resetpass/${token}`, { password: password.password })
      .then(() => {
        toast.success("Senha atualizada com sucesso");
        router.push("/login");
      })
      .catch((err) => {
        console.log(err);
        toast.error("Erro ao atualizar a senha");
      });
  };

  return (
    <AuthContext.Provider
      value={{
        token,
        resetPassword,
        sendEmail,
        protectRoutes,
        findSeller,
        user,
        loginFunction,
        userLogin,
        registerFunction,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
