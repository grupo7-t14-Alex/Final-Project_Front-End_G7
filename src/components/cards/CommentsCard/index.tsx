'use client'
import { AuthContext } from "@/context/Auth.Context";
import { carsContext } from "@/context/Cars.Context";
import { Api } from "@/services/Api";
import { CommentsData } from "@/types";
import { parseCookies } from "nookies";
import { useContext, useEffect, useState } from "react";
import {BsTrash} from "react-icons/bs"
interface CommentCardProps {
  comment: CommentsData;
}

export const CommentCard = ({ comment }: CommentCardProps) => {
  const [open , setOpen] = useState(false)
  const {deleteComment} = useContext(carsContext)
  const cookies = parseCookies()
  const token = cookies["@token"]
  return (
    <>
      <li className="w-full max-w-[663px] h-52 gap-5 mt-4">
        <div className="flex justify-between items-center">
          <div className="flex gap-3 items-center">
            <span className="w-8 h-8 bg-random-1 text-center text-white text-sm rounded-full flex justify-center items-center">
              {comment.user.name.slice(0, 2).toUpperCase()}
            </span>
            <h4 className="text-gray-100 text-sm font-medium">
              {comment.user.name}
            </h4>
            <span className="text-gray-300 text-xs">{comment.createdAt}</span>
          </div>
          <div className="relative">
           {token &&
            <button onClick={()=> setOpen(prev => !prev)}>...</button>
           }
            
             {
              open &&
              <span className="flex flex-col absolute w-20 h-20 bg-white top-[31px] left-[-66px] items-end">
                <button><BsTrash className=" hover:text-red-600" color="text-red-600" onClick={()=> deleteComment(comment.id)}/></button>
              </span>
             }
            </div>
        </div>
        <p className="text-gray-200 text-sm mt-3">{comment.description}</p>
      </li>
    </>
  );
};