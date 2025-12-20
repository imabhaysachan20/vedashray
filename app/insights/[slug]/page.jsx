import React from 'react'
import Link from 'next/link'
import { calistoga, montserrat } from '@/app/fonts/fonts'
// Make sure this path points to where you saved your data file
import blogData from '@/components/blog/blogData' 

// --- REQUIRED FUNCTION START ---
// This function tells Next.js exactly which blog pages to build HTML for.
// It is MANDATORY when using "output: export".
export async function generateStaticParams() {
  const paths = Object.keys(blogData).map((slug) => ({
    slug: slug,
  }))
  
  return paths
}
// --- REQUIRED FUNCTION END ---

// Note: NO "use client" at the top. This must be a Server Component.
export default async function BlogPost({ params }) {
  // In Next.js 15, we must await params
  const { slug } = await params
  const post = blogData[slug]

  if (!post) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 text-[#320b54]">
        <h2 className={`text-3xl mb-4 ${calistoga.className}`}>Post Not Found</h2>
        <Link href="/#insights" className="bg-[#320b54] text-white px-6 py-2 rounded font-bold">
          Back to Insights
        </Link>
      </div>
    )
  }

  return (
    <article className="min-h-screen bg-white pt-24 pb-16">
      <div className="container mx-auto px-4 sm:px-8 lg:px-12">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">
          
          {/* Left Column: Big Title */}
          <div className="lg:col-span-5">
            <h1 className={`text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-[#320b54] leading-tight sticky top-28 ${calistoga.className}`}>
              {post.title}
                           <div className="pt-8 absolute left-5 border-t border-gray-200 text-sm text-[#320b54]/60">
                © 2025 Vedashray Corpsec LLP. All rights reserved
             </div>
            </h1>
          </div>

          {/* Right Column: Content Body */}
          <div className={`lg:col-span-7 text-[#320b54]/80 text-lg leading-relaxed ${montserrat.className}`}>
             {post.content}
             
             {/* Back Link */}
             <div className="mt-12 mb-8">
                <Link href="/#insights" className="text-[#320b54] font-bold hover:underline">
                  ← Back to all Insights
                </Link>
             </div>

             {/* Footer */}
          </div>

        </div>
      </div>
    </article>
  )
}