import { useEffect, useState } from 'react';
import { userAPI } from '../../../api/api'; 
import { User } from '../../../types/user.interface';
import UserListItem from './UsersListItem/UserListItem';
import loader from '../../../assets/img/loader.gif';

const UserList = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    setIsLoading(true);
    userAPI.getUsers().then(data => {
      setUsers(data); 
      setIsLoading(false);
    });
  }, []);

  if (isLoading) return <img className="my-8 mx-auto" src={loader} alt="loading" />;
  return (
    <ul>
      {users.map(user => (
         <UserListItem key={user.id} user={user}/>
      ))}
    </ul>
  );
};

export default UserList;
