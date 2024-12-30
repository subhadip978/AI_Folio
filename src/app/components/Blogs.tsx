import React from 'react'
import Link from 'next/link'
import blogData from '../data/blogs.json'
import { Button } from './ui/movingBorder'
import { div } from 'framer-motion/client'



interface Blog{
	id:number,
	title:string,
	description:string,
	isFeatured:boolean
}


	
function Blogs() {
	const featuredBlogs= blogData.blogs.filter((blog: Blog)=>blog.isFeatured)


  return (
	<div className='py-12 '>
		<div>

		<div className='text-center'>
			
			<p className='mt-2 text-3xl font-extrabold  text-purple'>Explore the blogs</p>
			
		</div>
		</div>
		
		<div className='mt-20 text-center'>
		<Link href={"/blogs"} className='px-4 py-2 bg-white rounded border-neutral-600 text-neutral-600 hover:bg-gray-300'>
			  view all blogs
		</Link>
		
		</div>


		<div className='mt-10'>
			<div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 '>
				{featuredBlogs.map((blog:Blog)=>(
					// <Button key={blog.id} className='p-6 '>
					// 	{/* <div> */}
					// 	image
					// 	{/* </div> */}
					// 	</Button>
							<div className='p-8 flex items-center justify-center' key={blog.id}>
								<Button className='w-full p-12'>
									<div className='flex flex-col gap-2'>

								<h2>{blog.title} </h2>
								<button>

							<Link href="/"  className='px-4 py-2 bg-white rounded border-neutral-600 text-neutral-600 hover:bg-gray-300'>View</Link>
								</button>
									</div>

						</Button>
					</div>


				))}
			</div>
		</div>

		<div className='mt-20 text-center'></div>

		<div>4</div>
blogs
	</div>
  )

}
export default Blogs