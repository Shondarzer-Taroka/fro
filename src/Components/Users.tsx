import { User } from '@/models/Users';
import React from 'react';

async function getUser() {
    const res = await fetch('https://jsonplaceholder.typicode.com/users', { cache: 'no-cache' })
    const data = await res.json()
    return data
}

const Users = async () => {
    const users: User[] = await getUser()
    console.log(users);


    return (
        <div>
            {users.length === 0 && <h1>data is coming, please wait.......!</h1>}
            {
                users.map((user) => <div key={user.id}>
                    <p>{user.name}</p>
                </div>)
            }
        </div>
    );
};

export default Users;