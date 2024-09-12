import PostsListItem from "./PostsListItem/PostsListItem";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { postsAPI } from "../../../api/api";
import { Post } from "../../../types/post.interface";

interface PostsListProps {
    selectPost: (id: number) => void;
    selectedPost: number | null;
}

const PostsList = ({ selectPost, selectedPost }: PostsListProps) => {
    const { id } = useParams(); 
    const [posts, setPosts] = useState<Post[]>([]);

    useEffect(() => {
        postsAPI.getPosts().then((data) => {
            const userId = Number(id);
            const filteredPosts = data.filter((post: Post) => post.userId === userId);
            setPosts(filteredPosts);
        });
    }, [id]);

    return (
        <ul className={'col-span-2'}>
            {posts.map(post => (
               <PostsListItem key={post.id} post={post} selectPost={selectPost}
               selected={post.id === selectedPost}/>
            ))}
        </ul>
    );
}

export default PostsList;
