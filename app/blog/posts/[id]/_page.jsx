
// import Post from '@/components/blog/Post';
// import PostBreadCrumps from '@/components/blog/PostBreadCrumps';
// import PostHeading from '@/components/blog/PostHeading';
// import PostMetaData from '@/components/blog/PostMetaData';

// import { Breadcrumb, BreadcrumbList } from '@/components/ui/breadcrumb';
// import { Separator } from '@/components/ui/separator';
// import { getBlogPosts } from '@/lib/contentful';



// export async function generateStaticParams() {
//   const posts= await getBlogPosts()
//   return posts.map((service, idx) => ({
//       id: String(idx + 1),
//   }));
// }


// async function page({params}) {
//   const posts = await getBlogPosts();
//     const post = posts[params.id - 1];
//   return (
//     <div className='max-w-6xl w-full mx-auto mt-24 md:mt-24 px-4 md:px-0'>
//       <div>
//       <PostBreadCrumps/>
//       <PostHeading text={post.titlefull}/>
//       <PostMetaData date={post.date.toLocaleString()}/>
//       <Separator/>
//       <Post obj={post.body}/>
//     </div>
//     </div>
    
//   )
// }

// export default page
