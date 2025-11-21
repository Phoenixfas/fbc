'use client'
import { useState } from 'react'
// import Image from 'next/image'
import { useAppSelector, useAppDispatch } from '../../../redux/hooks'
import { toggleBlogAddModal } from '../../../redux/slices/blogAddModalToggleSlice'
import { GrClose } from 'react-icons/gr'
import { FaPlus } from 'react-icons/fa'
import { motion, AnimatePresence } from 'framer-motion'
import Link from 'next/link'
import postReq from '../../../hooks/postReq'
// import { useMutation } from '@apollo/client'
// import { GET_ARTICLES } from '../../graphql/queries/articleQueries'
// import { ADD_ARTICLE } from '../../graphql/mutations/articleMutations'

interface BlogType {
    title: string;
    image: string;
    snippet: string;
    markdown: string;
    keywords: string[];
    author: string;
}

const variants = {
    open: { opacity: 1 },
    closed: { opacity: 0 },
}


export default function EditBlogModal() {
    const dispatch = useAppDispatch()
    const blogAddModalToggle = useAppSelector(state => state.blogAddModalToggle.value)

    const [err, setErr] = useState<string>("")

    const [title, setTitle] = useState("")
    const [desc, setDesc] = useState("")
    const [markdown, setMarkdown] = useState("")
    const [keywords, setKeywords] = useState<string[]>([])
    const [keyword, setKeyword] = useState("")
    const [author, setAuthor] = useState("")
    // const [component, setComponent] = useState("Square")

    const token = useAppSelector(state => state.login.admin)
    const addArticle = async (body: BlogType) => {
        await postReq('news', body, token)
        window.location.reload()
    }

    const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (title === "" || desc === "" || markdown === "") {
            setErr("Please fill in all fields")
            return
        }

        const imageInput = document.getElementById("image") as HTMLInputElement | null;
        if (!imageInput || !imageInput.files || imageInput.files.length === 0) {
            setErr("Please upload an image");
            return;
        }
        const img: File = imageInput.files[0];
        const imgData = new FormData()
        imgData.append('file', img)
        imgData.append('upload_preset', 'impact')

        const res = await fetch('https://api.cloudinary.com/v1_1/drp73bqti/image/upload', {
            method: 'POST',
            body: imgData
        })
        if (!res.ok) {
            setErr("Please upload an image")
            return
        }
        const json = await res.json()

        if (json.secure_url === "") {
            setErr("Please upload an image")
            return
        }
        if (json.secure_url !== "") {
            setErr("")
            const image = json.secure_url
            await addArticle({
                title,
                image,
                snippet: desc,
                markdown,
                keywords,
                author
            })
            setTitle("")
            setDesc("")
            setMarkdown("")
            setKeywords([])
            setAuthor("")
            dispatch(toggleBlogAddModal())
        }
    }

    // if(loading) console.log("loading")
    // if(error) console.log(error)
    // if(data) console.log(data)

    return (
        <>
            <AnimatePresence>
                {blogAddModalToggle && (
                    <motion.div variants={variants} initial={"closed"} animate={"open"} exit={"closed"} className={`fixed z-10 top-0 blog-modal left-0 w-full h-screen bg-[#00000077] flex py-32 justify-center overflow-y-auto`}>
                        <motion.div initial={{ y: "-100%" }} animate={{ y: 0 }} transition={{ duration: .3 }} className='relative edit-modal w-[600px] h-fit flex flex-col bg-white rounded-2xl p-20'>
                            <div className="p-3 rounded-full absolute right-0 top-0 translate-x-1/2 -translate-y-1/2 bg-red-400 text-white text-xl cursor-pointer" onClick={() => dispatch(toggleBlogAddModal())}>
                                <GrClose />
                            </div>
                            <div className=' w-full'>
                                <h1 className='text-3xl font-bold text-center mb-10'>Add New Blog</h1>
                                {err && <p className="text-red-500 text-center mb-5">{err}</p>}
                                <form onSubmit={onSubmit} className="flex flex-col">
                                    <div className="w-full flex flex-col mb-5">
                                        <label>Title</label>
                                        <input placeholder="Enter Article Title" required type="text" className="p-3 pl-0 text-md border-b-2 border-gray-300 focus:border-[#45B1BE] duration-300 outline-none" id="title" value={title} onChange={(e) => setTitle(e.target.value)} />
                                    </div>
                                    <div className="w-full flex flex-col mb-5">
                                        <label>Author</label>
                                        <input placeholder="Enter Article Author" required type="text" className="p-3 pl-0 text-md border-b-2 border-gray-300 focus:border-[#45B1BE] duration-300 outline-none" id="author" value={author} onChange={(e) => setAuthor(e.target.value)} />
                                    </div>
                                    <div className="w-full flex flex-col mb-5">
                                        <label>Image Link</label>
                                        <input placeholder="Enter Article Cover Image Link" required type="file" accept="image/*" className="p-3 pl-0 text-md border-b-2 border-gray-300 focus:border-[#45B1BE] duration-300 outline-none" id="image" />
                                    </div>
                                    <div className="w-full flex flex-col mb-5">
                                        <label>Snippet</label>
                                        <textarea placeholder="Enter Article Description" required className="p-3 pl-0 text-md border-b-2 border-gray-300 focus:border-[#45B1BE] duration-300 outline-none" id="desc" value={desc} onChange={(e) => setDesc(e.target.value)} ></textarea>
                                    </div>
                                    <div className="w-full flex flex-col mb-5">
                                        <label>Details (write in markdown)</label>
                                        <textarea placeholder="Enter Article Details using markdown language" required className="p-3 pl-0 text-md border-b-2 border-gray-300 focus:border-[#45B1BE] duration-300 outline-none" id="markdown" value={markdown} onChange={(e) => setMarkdown(e.target.value)} ></textarea>
                                    </div>
                                    <div className="w-full flex flex-col mb-5">
                                        <label>Keywords</label>
                                        <div className="w-full flex flex-wrap gap-3 mt-3">
                                            {keywords.map((k, i) => (
                                                <div key={i} className="px-3 py-1 bg-gray-200 rounded-full text-sm flex items-center gap-3">
                                                    <span>{k}</span>
                                                    <span className="text-red-500 font-bold cursor-pointer" onClick={() => {
                                                        setKeywords(keywords.filter(kk => kk !== k))
                                                    }}>x</span>
                                                </div>
                                            ))}
                                        </div>
                                        <div className="w-full flex gap-3">
                                            <input placeholder="Enter Article Keywords" type="text" className="p-3 pl-0 text-md border-b-2 border-gray-300 focus:border-[#45B1BE] duration-300 outline-none" id="keywords" value={keyword} onChange={(e) => setKeyword(e.target.value)} />
                                            <button type='button' onClick={() => {
                                                if (keyword === "") return
                                                setKeywords([...keywords, keyword])
                                                setKeyword("")
                                            }} className="px-5 py-2 bg-green-500 text-lg font-light w-fit self-end mt-10 cursor-pointer text-white rounded-md flex items-center gap-3"><FaPlus /> ADD</button>
                                        </div>
                                    </div>
                                    <button type='submit' className="px-5 py-2 bg-green-500 text-lg font-light w-fit self-end mt-10 cursor-pointer text-white rounded-md flex items-center gap-3"><FaPlus /> ADD BLOG</button>
                                    <Link target="_blank" className="self-end text-green-500 mt-8" href="https://www.markdownguide.org/cheat-sheet/">Markdown Guide</Link>
                                </form>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    )
}
