import React from "react";
import PostCard from "../components/post-card";
import posts from "../data";

const Home = () => {
    return (
        // Post container
        <div className="h-screen w-full grid grid-cols-1 gap-4 mt-8">
            {
                posts.map((post) => (
                    <PostCard key={post.id} postInfo={post}/>
                ))
            }
        </div>
    )
}

export default Home;