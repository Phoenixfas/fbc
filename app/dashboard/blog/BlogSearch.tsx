'use client'

import React, { useState } from 'react'
// import Link from 'next/link';
import { useAppDispatch } from '../../../redux/hooks';
import { toggleBlogModal } from '../../../redux/slices/cliBlogModalToggleSlice';
import { changeActiveBlog } from '../../../redux/slices/activeBlogSlice';
import { IoSearchOutline } from 'react-icons/io5'
import useFetch from '../../../hooks/useFetch';
// import { useQuery } from "@apollo/client";
// import { GET_ARTICLES } from '../../graphql/queries/articleQueries';

interface BlogType {
    _id: string;
    title: string;
    image: string;
    snippet: string;
    markdown: string;
    sanitizedHtml: string;
    keywords: string[];
    author: string;
    date: string;
    component: string;
    createdAt: number;
    updatedAt: number;
}

export default function BlogSearch() {
    const dispatch = useAppDispatch();

    const [filteredData, setFilteredData] = useState<BlogType[]>([]);
    const [word, setWord] = useState("");
    const { data } = useFetch('news');



    const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
        const keyword = e.target.value;
        // const newFilter = data.articles.filter((article: any) => {
        //   return article.title.toLowerCase().includes(keyword.toLowerCase())
        // })
        if (keyword === "") {
            setFilteredData([])
            setWord("")
        }

        setFilteredData(data.filter((article: BlogType) => article.title.toLowerCase().includes(keyword.toLowerCase())))
        setWord(keyword)

    }
    const clearSearch = () => {
        setFilteredData([])
        setWord("")
    }


    const checkEmpty = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.currentTarget.value === "") {
            setFilteredData([])
            setWord("")
        }
    }



    return (
        <div className='relative' >
            <div className='p-4 h-[40px] bg-[#ccc] flex items-center gap-3 rounded-full'>
                <input id='blog-search' className='bg-transparent border-none outline-none text-sm placeholder:text-gray-500 w-[250px] top-section-search' type="text" placeholder='Search here' value={word} onChange={handleSearch} onKeyDown={checkEmpty} />
                <IoSearchOutline id='blog-search' className='text-2xl text-gray-500 ' />
            </div>
            {filteredData.length != 0 && (
                <div className="absolute bottom-0 w-full translate-y-[110%] bg-white rounded-xl p-3" >
                    {data && filteredData.slice(0, 10).map((blog: BlogType, index: number) => (
                        <div className='px-5 py-3 duration-300 hover:bg-gray-100 hover:shadow-md hover:rounded-xl cursor-pointer' key={index}>
                            <p id='blog-search' onClick={() => {
                                dispatch(toggleBlogModal())
                                dispatch(changeActiveBlog(blog))
                                clearSearch()
                            }}
                            >
                                {blog.title.slice(0, 50)}
                            </p>
                        </div>
                    ))}
                </div>
            )}
        </div>
    )
}
