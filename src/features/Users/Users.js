import React from 'react'
import UserCard from './UserCard';
import { useSelector, useDispatch } from 'react-redux';
import { fetchAsyncUsers } from './userSlice';

const Users = () => {
    const users = useSelector(state => state.users.users);
    const dispatch = useDispatch();

    React.useEffect(() => {
        dispatch(fetchAsyncUsers());
    }, [dispatch]);


    return (
        <div>
            {
                users.map(user => <UserCard user={user} key={user.id} />)
            }
        </div>
    )
}

export default Users