import { Comment } from "../../../../types/comment.inerface";
import commentIcon from "../../../../assets/img/comment.svg";

interface CommentsListItemProps {
    comment: Comment;
}

const CommentsListItem = ({ comment }: CommentsListItemProps) => {
    return (
        <li className="bg-indigo-50 p-4 rounded-lg shadow-md mb-4">
            <img src={commentIcon} alt="User icon" className="w-10 h-10 mb-4" />
            <h3 className="text-lg font-semibold text-indigo-800 mb-2">{comment.name}</h3>
            <p className="text-sm text-indigo-500 mb-2">{comment.email}</p>
            <p className="text-gray-700">{comment.body}</p>
        </li>
    );
}

export default CommentsListItem;
