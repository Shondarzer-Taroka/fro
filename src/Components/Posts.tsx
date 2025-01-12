import { Post } from "@/models/Post";

async function getPosts(): Promise<Post[]> {
    const res = await fetch('https://jsonplaceholder.typicode.com/posts',{cache:'no-cache'});
    if (!res.ok) throw new Error('Failed to fetch posts');
    return res.json();
  }
  
  export default async function Page() {
    const posts = await getPosts();
  
    return (
      <div>
        <h1>Posts</h1>
        <div>
          {posts.map((post) => (
            <div key={post.id}>
              <h3>{post.title}</h3>
              <p>{post.body}</p>
            </div>
          ))}
        </div>
      </div>
    );
  }
  












// import { Post } from '@/models/Post';
// import { Suspense } from 'react';

// async function getPosts() {
//     const res = await fetch('https://jsonplaceholder.typicode.com/posts')
//     const data = await res.json()
//     return data
// }

// export default function PassPosts() {
//     const posts = getPosts()

//     return <>
//         <Suspense fallback={<div>loading...</div>}>
//             <Posts posts={posts}></Posts>
//         </Suspense>
//     </>
// }



// export const Posts = async ({ posts }: { posts: Promise<Post[]> }) => {
//     const posteds = await posts


//     return (
//         <div>
//             {posteds.map((value) => <div key={value.id}> {value.title}</div>)}
//         </div>
//     );
// };



















// import { Post } from '@/models/Post';
// import { Suspense } from 'react';

// async function getPosts() {
//   const res = await fetch('https://jsonplaceholder.typicode.com/posts');
//   const data = await res.json();
//   return data;
// }

// export default function Page() {
//   const postsPromise = getPosts();

//   return (
//     <Suspense fallback={<div>Loading...</div>}>
//       <Posts posts={postsPromise} />
//     </Suspense>
//   );
// }

// async function Posts({ posts }: { posts: Promise<Post[]> }) {
//   const resolvedPosts = await posts;

//   return (
//     <div>
//       {resolvedPosts.map((post) => (
//         <div key={post.id}>
//           <h3>{post.title}</h3>
//           <p>{post.body}</p>
//         </div>
//       ))}
//     </div>
//   );
// }
