// lib/contentful.js

import { createClient } from 'contentful';

const client = createClient({
    accessToken: 'Gq_fadkWI29Jl8guqnM67yQgszJEz3UK8XYkOasDBUs',
  space: 'vdlg2vglpxf3'
});


export const getBlogPosts = async()=>{
    const res = await client.getEntries({
        content_type:"blogPosts"
    })
    const posts = res.items.map((post)=>{
        console.log(post.fields);
        
        const titleshort = post.fields.title;
        const titlefull = post.fields.titleFull;
        const body = post.fields.body;
        const date = new Date(post.fields.date)
        const image = "https://"+post.fields.featuredImage.fields.file.url.slice(2)
        return {titleshort, titlefull,body,date,image}
    })
    return posts;
}

export default client;