import { User } from '@/models/Users';
import React from 'react';

interface Params {
    id: string;
}

async function getData(id: string): Promise<User> {
    const res = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
    const data = await res.json()
    return data
}

export async function generateStaticParams() {
    const res = await fetch('https://jsonplaceholder.typicode.com/users')
    if (!res.ok) {
        throw Error('Failed to fetch data from database')
    }
    const users: User[] = await res.json()


   return users.map((user) => ({
        id: user.id.toString()
    }))

}



const Page: React.FC<{ params:Promise<Params>}> = async ({ params }) => {
    const { id } = await params
    const user: User = await getData(id)
    console.log(user);
    

    return (
        <div>

            {user.phone}
        </div>
    );
};

export default Page;















// // Import your User model
// import { User } from '@/models/Users';
// import React from 'react';

// interface Params {
//   id: string;
// }

// // Function to fetch user data
// async function getData(id: string): Promise<User> {
//   const res = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
//   if (!res.ok) {
//     throw new Error('Failed to fetch user data');
//   }
//   const data = await res.json();
//   return data;
// }

// // Generate static params for SSG
// export async function generateStaticParams(): Promise<{ id: string }[]> {
//   const res = await fetch('https://jsonplaceholder.typicode.com/users');
//   if (!res.ok) {
//     throw new Error('Failed to fetch data from database');
//   }
//   const users: User[] = await res.json();

//   return users.map((user) => ({
//     id: user.id.toString(),
//   }));
// }

// // Page Component
// const Page = async ({ params }: { params: Promise<Params> }) => {
//  const {id} = await params
//  console.log(id);
 
//   const user = await getData((await params).id); // Fetch user data

//   return (
//     <div>
//       <h1>User Details</h1>
//       <p>Phone: {user.phone}</p>
//     </div>
//   );
// };

// export default Page;
