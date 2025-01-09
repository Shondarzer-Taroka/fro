import { User } from '@/models/Users';
import Link from 'next/link';
import React from 'react';

async function getUser() {
    const res = await fetch('https://jsonplaceholder.typicode.com/users', { cache: 'no-cache' })
    const data = await res.json()
    return data
}

const Users = async () => {
    const users: User[] = await getUser()
    return (
        <div>
            {users.length === 0 && <h1>data is coming, please wait.......!</h1>}
            <div className='grid grid-cols-[300px_300px_300px]'>
                {
                    users.map((user) => <div key={user.id} className=''>
                        <div className='p-6 border border-2-red flex flex-col items-center'>
                            <p>{user.name}</p>
                            <p>{user.phone}</p>
                            <p>{user.email}</p>
                            <p>{user.website}</p>
                            <Link href={`/users/user/${user.id}`} className='bg-green-300 text-white rounded-md px-4 py-3'><button>Details</button></Link>
                        </div>
                    </div>)
                }
            </div>
        </div>
    );
};

export default Users;