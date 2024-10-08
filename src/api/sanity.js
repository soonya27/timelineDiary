import { createClient } from '@sanity/client';


export const client = createClient({
    projectId: process.env.REACT_APP_SANITY_PROJECT_ID,
    dataset: process.env.REACT_APP_SANITY_DATASET,
    useCdn: false, // set to `false` to bypass the edge cache
    apiVersion: '2024-07-30', // use current date (YYYY-MM-DD) to target the latest API version
    token: process.env.REACT_APP_SANITY_SECRET_TOKEN // Only if you want to update content with the client
});

export async function addUser({ uid, displayName, photoURL }) {
    return client.createIfNotExists({
        _id: uid,
        _type: 'user',
        username: displayName,
        image: photoURL,
    });
}


export async function getPosts(uid) {
    console.log(uid)
    const posts = await client.fetch(`*[_type == "post" && author._id == ${uid}]`)
    return posts
}


export async function getPostsByBookmark(uid) {
    const posts = await client.fetch(`*[_type == "post" && author._id == ${uid} && bookmark == true ]`)
    return posts
}



// export async function createPost(post: Post) {
//     const result = client.create(post)
//     return result
//   }
  
//   export async function updateDocumentTitle(_id, title) {
//     const result = client.patch(_id).set({title})
//     return result
//   }
  
  