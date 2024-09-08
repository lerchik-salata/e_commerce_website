import UserAdress from "./UserAddress/UserAddress";
import UserCompany from "./UserCompany/UserCompany";
import userIcon from "../../../../assets/img/user.svg";
import { User } from '../../../../types/user.interface';

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
        </li>
    );
}

export default UserListItem;
