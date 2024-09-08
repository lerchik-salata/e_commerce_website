import UserList from "./UsersList/UserList";

const HomePage = () => {
    return (
        <div>
        <h1 className='text-3xl text-center my-8'>Home Page</h1>
            <UserList/>
        </div>
    );
};

export default HomePage;