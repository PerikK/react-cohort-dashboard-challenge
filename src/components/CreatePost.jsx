import { useState } from "react";
import usePosts from "../hooks/usePosts";
import Avatar from "./Avatar"
import useUsers from "../hooks/useUsers";


export default function CreatePost() {
    const [post, setPost] = useState('')
    const { posts } = usePosts()
      if (!posts) {
    return <p>Loading</p>;
    }
    const userId = 1

    function addPost(e) {
        e.preventDefault()
        setPost([
            firstName
        ])
    }

    return (
        <div className="flex justify-between border-2 rounded-md my-2 py-2 size-full px-6 items-center  ">

                <Avatar userId={userId} />

            <input type="text" className="border-2 bg-[#e6ebf5] w-4/5 h-fit" placeholder="What's on your mind?"/>
            <button>Post</button>
        </div>
    )
}