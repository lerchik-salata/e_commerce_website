import CommentsListItem from "./CommentsListItem/CommentsListItem";
import { useEffect, useState } from "react";
import { postsAPI } from "../../../api/api";
import { Comment } from "../../../types/comment.inerface";

interface CommentsListProps {
    postId: number;
}

const CommentsList = ({postId} : CommentsListProps) => {
    const [comments, setComments] = useState<Comment[]>([]);

    useEffect(() => {
        if(postId) {
            postsAPI.getPostComments(postId).then((data) => {
                setComments(data);
            });
        }
    }, [postId]);

    return (
         <ul>
         {comments.map(comment => (
            <CommentsListItem key={comment.id} comment={comment}/>
         ))}
     </ul>
    )
}

export default CommentsList;