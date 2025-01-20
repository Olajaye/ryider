import React from 'react'
// import Cards from '../core/Cards'
// import { items } from '../constant/listDB'
// import CardHeader from '../core/CardHeader'
import BlogPostCard from '../core/BlogCard';

import { ArrowUpRight } from 'lucide-react';
import Navbar from '../core/Layout/Navbar';

const post =  {
  id: 1,
  title: "Unlocking the Power of Online Earning: Your Guide to Success",
  description: "Unlock the potential of your spare time and start earning today.",
  author: "Femi Fatunla",
  date: "20 Jan 2022",
  image: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80",
  tags: ["Earning Strategies", "Financial Tips & Tricks", "Success Stories & Community"]
}
// const recentPosts= [
//   {
//     id: 1,
//     title: "Unlocking the Power of Online Earning: Your Guide to Success",
//     description: "Unlock the potential of your spare time and start earning today.",
//     author: "Femi Fatunla",
//     date: "20 Jan 2022",
//     image: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80",
//     tags: ["Earning Strategies", "Financial Tips & Tricks", "Success Stories & Community"]
//   },
//   {
//     id: 2,
//     title: "E-commerce and You",
//     description: "Explore the exciting world of e-commerce and earn while you shop.",
//     author: "Turvie Ednet",
//     date: "19 Jan 2022",
//     image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80",
//     tags: ["Financial Tips & Tricks", "Research"]
//   },
//   {
//     id: 3,
//     title: "Beyond Bill Payments",
//     description: "Find innovative ways to earn rewards and boost your savings.",
//     author: "Ebunoluwa James",
//     date: "18 Jan 2022",
//     image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&q=80",
//     tags: ["Financial Tips & Tricks", "Research"]
//   }
// ];

const allPosts = [
  {
    id: 1,
    title: "Unlocking the Power of Online Earning: Your Guide to Success",
    description: "Unlock the potential of your spare time and start earning today.",
    author: "Femi Fatunla",
    date: "20 Jan 2022",
    image: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80",
    tags: ["Earning Strategies", "Financial Tips & Tricks", "Success Stories & Community"]
  },
  {
    id: 2,
    title: "E-commerce and You",
    description: "Explore the exciting world of e-commerce and earn while you shop.",
    author: "Turvie Ednet",
    date: "19 Jan 2022",
    image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80",
    tags: ["Financial Tips & Tricks", "Research"]
  },
  {
    id: 3,
    title: "Beyond Bill Payments",
    description: "Find innovative ways to earn rewards and boost your savings.",
    author: "Ebunoluwa James",
    date: "18 Jan 2022",
    image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&q=80",
    tags: ["Financial Tips & Tricks", "Research"]
  },
  {
    id: 4,
    title: "E-commerce and You",
    description: "Explore the exciting world of e-commerce and earn while you shop.",
    author: "Ebunoluwa James",
    date: "18 Jan 2022",
    image: "https://images.unsplash.com/photo-1491466424936-e304919aada7?auto=format&fit=crop&q=80",
    tags: ["Earning Strategies", "Financial Tips & Tricks"]
  },
  {
    id: 5,
    title: "E-commerce and You",
    description: "Explore the exciting world of e-commerce and earn while you shop.",
    author: "Ebunoluwa James",
    date: "18 Jan 2022",
    image: "https://images.unsplash.com/photo-1491466424936-e304919aada7?auto=format&fit=crop&q=80",
    tags: ["Earning Strategies", "Financial Tips & Tricks"]
  },
  {
    id: 6,
    title: "E-commerce and You",
    description: "Explore the exciting world of e-commerce and earn while you shop.",
    author: "Ebunoluwa James",
    date: "18 Jan 2022",
    image: "https://images.unsplash.com/photo-1491466424936-e304919aada7?auto=format&fit=crop&q=80",
    tags: ["Earning Strategies", "Financial Tips & Tricks"]
  }
];


const Blogs = () => {
  return (
    <>
      <Navbar/>
      <section className='container mx-auto px-4 font-poppins py-7'>
        <div className='flex justify-center items-center'>
          <div className='text-center'>
            <div className='flex justify-center items-center flex-col'>
              <p className='font-poppins font-semibold text-base text-green'>Our blog</p>
              <h2 className='font-semibold text-5xl font-poppins my-5'>Stories and interviews</h2>
              <p className='text-[#667085] text-xl font-poppins font-normal max-w-[70%] '>Subscribe to learn about new product features, the latest in technology, solutions, and updates.</p>
            </div>
            <div className='space-x-4 mt-5'>
              <input 
                type='email'
                placeholder='Enter your email'
                className='border-[1px] border-[#667085] p-3 rounded-lg'
              />
               <button className='text-white p-3 font-poppins bg-green rounded-lg'>Subscribe</button>
            </div>
            <p className='text-[#667085] text-sm'>We care about your data in our <span className='underline'>privacy policy</span></p>
          </div>
          
        </div>

        <section className="mb-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-8">Recent blog posts</h2>
          <div className="flex space-x-6">
            <div className='flex-1'>
              <div className=''>
                <div className="relative h-80 w-full overflow-hidden rounded-lg bg-white">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="h-full w-full object-cover object-center transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
                <div className="mt-4">
                  <div className="flex items-center text-sm text-gray-500">
                    <span>{post.author}</span>
                    <span className="mx-1">•</span>
                    <span>{post.date}</span>
                  </div>
                  <div className="mt-2 flex items-start justify-between">
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900">
                        {post.title}
                      </h3>
                      <p className="mt-2 text-gray-500">{post.description}</p>
                    </div>
                    <ArrowUpRight className="h-5 w-5 flex-shrink-0 text-gray-400 group-hover:text-gray-600" />
                  </div>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {post.tags.map((tag, index) => (
                      <span
                        key={index}
                        className="inline-flex items-center rounded-full bg-blue-50 px-3 py-1 text-xs font-medium text-blue-700"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <div className='w-[45%]'>
              <div className='flex'>
                <div className="relative h-full w-full overflow-hidden rounded-lg bg-white">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="h-full w-full object-cover object-center transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
                <div className="">
                  <div className="flex items-center text-sm text-gray-500">
                    <span>{post.author}</span>
                    <span className="mx-1">•</span>
                    <span>{post.date}</span>
                  </div>
                  <div className="mt-2 flex items-start justify-between">
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900">
                        {post.title}
                      </h3>
                      <p className="mt-2 text-gray-500">{post.description}</p>
                    </div>
                    {/* <ArrowUpRight className="h-5 w-5 flex-shrink-0 text-gray-400 group-hover:text-gray-600" /> */}
                  </div>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {post.tags.map((tag, index) => (
                      <span
                        key={index}
                        className="inline-flex items-center rounded-full bg-blue-50 px-3 py-1 text-xs font-medium text-blue-700"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <div className='flex'>
                <div className="relative h-40 w-full overflow-hidden rounded-lg bg-white">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="h-full w-full object-cover object-center transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
                <div className="mt-4">
                  <div className="flex items-center text-sm text-gray-500">
                    <span>{post.author}</span>
                    <span className="mx-1">•</span>
                    <span>{post.date}</span>
                  </div>
                  <div className="mt-2 flex items-start justify-between">
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900">
                        {post.title}
                      </h3>
                      <p className="mt-2 text-gray-500">{post.description}</p>
                    </div>
                    <ArrowUpRight className="h-5 w-5 flex-shrink-0 text-gray-400 group-hover:text-gray-600" />
                  </div>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {post.tags.map((tag, index) => (
                      <span
                        key={index}
                        className="inline-flex items-center rounded-full bg-blue-50 px-3 py-1 text-xs font-medium text-blue-700"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>


        <section>
          <h2 className="text-2xl font-bold text-[#101828] font-poppins mb-8">All blog posts</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {allPosts.map((post) => (
              <BlogPostCard key={post.id} post={post} />
            ))}
          </div>
          <div className='flex justify-between items-center mt-5'>
            <button>Previous</button>
            <div className='flex space-x-5'>
              <p>1</p>
              <p>2</p>
              <p>3</p>
              <p>. . .</p>
              <p>8</p>
              <p>9</p>
              <p>10</p>

            </div>
            <button>Next</button>
          </div>
        </section>
      </section>
    </>
  )
}

export default Blogs
