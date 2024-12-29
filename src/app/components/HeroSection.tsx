import React from 'react'
import Link from 'next/link'
import { Spotlight } from './ui/Spotlight'
import { Button } from "./ui/moving-border";

function HeroSection() {
  return (
	 <div  
	 className='h-auto md:h-[40rem] w-full rounded-md flex flex-col items-center justify-center relative overflow-hidden py-10 md:py-0 mx-auto'>
	{/* <div> */}
	
		 <Spotlight
        className="-top-40 left-0 md:left-60 md:-top-20"
        fill="white"
      />
		 <div className='p-4 relative z-10 w-full text-center'> 

		<h1
		className='mt-20 md:mt-0 text-4xl md:text-7xl font-bold bg-clip-text  bg-gradient-to-b form-neutral-50 to-neutral-400  ' 
		
		>Master The Art OF Music</h1>
		<p>Dive into comprehensive music courses an dtransfomr your musical career journey today, whether yoy are  begginer or lookingto refine</p>
		<div className='mt-4'>

		<Link href="/projects">
			<Button borderRadius='1.75rem'>

			projects
			</Button>
		
		</Link>
		</div>
	
		</div>
		</div>
  )
}

export default HeroSection