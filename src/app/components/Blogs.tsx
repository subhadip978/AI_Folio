import React from 'react'
import Link from 'next/link'
import blogData from '../data/blogs.json'

interface Blog{
	id:number,
	title:string,
	description:string,
	isFeatured:boolean
}


	
function Blogs() {
	const featuredBlogs= blogData.blogs.filter((blog: Blog)=>blog.isFeatured)


  return (
	<div className='py-12 bg-gray-900'>
		<div>

		<div className='text-center'>
			<h2 className= 'text-teal-600 font-bold'>My blogs</h2>
			<p className='mt-2 text-3xl font-extrabold '>Explore the blogs</p>
		</div>
		</div>
		
		<div className='mt-20 text-center'>
		<Link href={"/blogs"} className='px-4 py-2 bg-white rounded border-neutral-600 text-neutral-600 hover:bg-gray-300'>
			  view all blogs
		</Link>
		
		</div>
		<div className='mt-10'>
			<div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 place-items-center'>
				{featuredBlogs.map((blog:Blog)=>(
					<p key={blog.id}>test</p>

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