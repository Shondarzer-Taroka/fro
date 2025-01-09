import React from 'react';

async function getUser() {
    const res=await fetch('https://jsonplaceholder.typicode.com/users',{cache:'no-cache'})
    const data=await res.json()
    return data
}

const Users = () => {
    return (
        <div>
            
        </div>
    );
};

export default Users;