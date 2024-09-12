import PostsList from "./PostsList/PostsList";
import CommentsList from "./CommentsList/CommentsList";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { User } from "../../types/user.interface";
import { userAPI } from "../../api/api";

const Profile = () => {
    const [selectedPost, setSelectedPost] = useState<number | null>(null);
    
    const setPostId = (id: number) => {
        setSelectedPost(id);
    }

    const { id } = useParams(); 
    const userId = Number(id);
    const [user, setUser] = useState<User | null>(null);

    useEffect(() => {
        userAPI.getUser(userId).then((data) => {
            setUser(data);
            console.log(data);
        });
    }, [id]);

    return (
        <>
        <h1 className={'text-3xl font-bold text-center mb-4'}>{user?.name}</h1>
        <div className={'grid grid-cols-3 gap-4'}>
            <PostsList selectPost={setPostId} selectedPost={selectedPost} />
            {selectedPost && <CommentsList postId={selectedPost} />}
        </div>
        </>
    )
}

export default Profile;