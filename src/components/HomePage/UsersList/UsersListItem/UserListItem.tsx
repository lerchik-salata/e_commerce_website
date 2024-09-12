import UserAdress from "./UserAddress/UserAddress";
import UserCompany from "./UserCompany/UserCompany";
import userIcon from "../../../../assets/img/user.svg";
import { User } from '../../../../types/user.interface';
import { NavLink } from "react-router-dom";

interface UserListItemProps {
    user: User;
}

function UserListItem({ user }: UserListItemProps) {
    return (
        <li className="bg-blue-50 p-4 rounded-lg shadow-lg mb-4">
            <img src={userIcon} alt="User icon" className="w-10 h-10 mb-4" />
            <h2 className="text-xl font-bold mb-2">{user.name}</h2>      
            <UserAdress address={user.address} />
            <UserCompany company={user.company} />
            <NavLink
                to={`/profile/${user.id}`}
                className="bg-indigo-500 inline-block mt-6 text-white px-4 py-2 rounded-lg hover:bg-indigo-600"
                >
                Watch profile
            </NavLink>
        </li>
    );
}

export default UserListItem;
