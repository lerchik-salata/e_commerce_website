import { Post } from "../../../../types/post.interface";
import postIcon from "../../../../assets/img/post.svg";

interface PostlistItemProps {
    post: Post;
    selectPost: (id: number) => void;
    selected: boolean;
}

const PostsListItem = ({ post, selectPost, selected }: PostlistItemProps) => {
    return (
        <li
            className={`p-4 rounded-lg shadow-lg mb-4 bg-indigo-50 ${
                selected ? 'border-4 border-indigo-500' : ''
            }`}
        >
            <img src={postIcon} alt="Post icon" className="w-10 h-10 mb-4" />
            <h1 className="text-xl font-bold mb-2">{post.title}</h1>
            <p className="text-gray-700 mb-4">{post.body}</p>
            <button
                onClick={() => selectPost(post.id)}
                className="bg-indigo-500 text-white px-4 py-2 rounded-lg hover:bg-indigo-600"
            >
                Watch comments
            </button>
        </li>
    );
};

export default PostsListItem;
