import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import PostCard from "./PostCard";


const Post = () => {
    const [post, setPost ] = useState();
    const { id } = useParams();
    const posts = useLoaderData();

    useEffect(() => {
        const findPost= posts.find(post => post.id === id);

        setPost(findPost)
    
    }, [id, posts]);
    
    return (
        <div>
            <PostCard post={post}></PostCard>
        </div>
    );
};

export default Post;