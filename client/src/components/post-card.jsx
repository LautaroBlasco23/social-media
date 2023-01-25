import React from "react";
import {AiFillLike} from "react-icons/ai";

const PostCard = ({postInfo}) => {
    return (
        <div className="flex justify-center flex-col border border-black shadow-lg m-auto px-12 py-8 md:w-2/3 border-black/0 hover:border-black hover:shadow-2xl duration-500 hover:cursor-pointer">
            {/* USER DATA */}
            <div className="flex items-end">
                <h1 className="text-2xl font-bold">{postInfo.username}</h1>
                <span className="pl-4 text-gray-600">{postInfo.Date.toString().split(' ').slice(1,4).join("/")}</span>
            </div>
            {/* POST DATA */}
            <p className="p-4 my-4 bg-gray-100 rounded-md shadow-md">{postInfo.text}</p>
            <span className="flex items-center">Likes: {postInfo.likes}<AiFillLike className="ml-2 text-blue-500 hover:cursor-pointer" size={20}/></span>
        </div>
    )
}

export default PostCard;