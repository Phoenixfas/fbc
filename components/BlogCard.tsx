import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

interface Blog {
    id: string;
    title: string;
    content: string;
    snippet: string;
    keywords: string[];
    author: string;
    image: string;
    date: string;
    fileAttached: string;
}

export default function BlogCard({ blog }: { blog: Blog }) {
    return (
        <div className='w-96 rounded-2xl overflow-hidden bg-background shadow-[0px_0px_10px_var(--foreground)] flex flex-col'>
            <Image src={blog.image} alt={blog.title} width={320} height={180} className="w-full h-[250px] object-cover" />
            <div className='px-5 py-8 flex flex-col gap-5'>
                <span className="w-fit px-3 py-1 rounded-full bg-tertiary bg-opacity-20 text-sm text-primary font-bold">{blog.author}</span>
                <h3 className='text-lg font-semibold'>{blog.title}</h3>
                <div className="flex flex-wrap items-center gap-2">
                    {blog?.keywords.map((keyword: string, index: number) => (
                        <span key={index} className="w-fit px-3 py-1 rounded-full bg-gray-300 bg-opacity-20 text-sm text-gray-500 font-bold">{keyword}</span>
                    ))}
                </div>
                <div className="w-full flex mt-3">
                    <Link href={`/blogs/${blog.id}`} className='px-10 py-2 rounded-full text-white font-bold bg-[linear-gradient(45deg,_var(--primary),_var(--secondary),_var(--tertiary))] hover:shadow-[0px_0px_5px_var(--foreground)] hover:scale-105 duration-300'>Read more</Link>
                </div>
            </div>
        </div>
    )
}
