'use client'
import { AuthContext } from "@/context/Auth.Context";
import { Api } from "@/services/Api";
import { CommentsData } from "@/types";
import { useContext, useEffect, useState } from "react";

interface CommentCardProps {
  comment: CommentsData;
}

export const CommentCard = ({ comment }: CommentCardProps) => {

  return (
    <>
      <li className="w-full max-w-[663px] h-52 gap-5 mt-4">
        <div className="flex gap-3 items-center">
          <span className="w-8 h-8 bg-random-1 text-center text-white text-sm rounded-full flex justify-center items-center">
            {comment.user.name.slice(0, 2).toUpperCase()}
          </span>
          <h4 className="text-gray-100 text-sm font-medium">
            {comment.user.name}
          </h4>
          <span className="text-gray-300 text-xs">{comment.createdAt}</span>
        </div>
        <p className="text-gray-200 text-sm mt-3">{comment.description}</p>
      </li>
    </>
  );
};