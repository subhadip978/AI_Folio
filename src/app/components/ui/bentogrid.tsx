
import { cn } from "../../utils/cn";
import React from "react";
import { BentoGrid, BentoGridItem } from "../Grid";
import {
  IconClipboardCopy,
  IconFileBroken,
  IconSignature,
  IconTableColumn,
} from "@tabler/icons-react";
import Buttongr from "./buttongr";


export function BentoGridSecondDemo() {
  return (
    <BentoGrid className="max-w-4xl mx-auto md:auto-rows-[20rem] p-2">
      {items.map((item, i) => (
        <BentoGridItem
          key={i}
          title={item.title}
          description={item.description}
           header={item.header}
          className={item.className}
          image={item.image}
          imgClassName={item.imgClassName}
  
        />
      ))}
    </BentoGrid>
  );
}
 const Skeleton = () => (
   <div className="rounded-3xl border-2 border-slate-700 p-3 flex justify-center items-center">

<span className="flex justify-center items-center space-x-6 space-y-6 flex-wrap">
{
  elements.map((element,index)=>{
    return(

<Buttongr ele= {element.name} key={index}/>
    )
  })
}
  
</span>

   </div>
 );

 const CodeImg=() => { 
  return(
    <div>
      <img
      className="h-60 w-full"
      
     
       src="./codebase.svg" 
       alt="" srcSet="" />
    </div>

  )
}
const items = [
  {
    title: "SKILLS",
    description: "",
     header: <Skeleton/>,
    className: "md:col-span-2",
    icon: <IconClipboardCopy className="h-4 w-4 text-neutral-500" />,
    image:"./lap.svg",
    imgClassName:""
  },
  {
    title: "The Digital Revolution",
    description: "Dive into the transformative power of technology.",
     header:"",
    className: "md:col-span-1",
    icon: <IconFileBroken className="h-4 w-4 text-neutral-500" />,
    image:"",
    imgClassName:""
  },
  {
    title: "The Art of Design",
    description: "Discover the beauty of thoughtful and functional design.",
     header: "",
    className: "md:col-span-1",
    icon: <IconSignature className="h-4 w-4 text-neutral-500" />,
    image:"",
    imgClassName:""
  },
  {
    title: "Currently building a Multifunctional AI System",
    description:
      "",
     header: <CodeImg />,
    className: "md:col-span-2",
    icon: <IconTableColumn className="h-4 w-4 text-neutral-500" />,image:"",
    imgClassName:""
  },
];


const elements=[
  {name:"CSS"},
  {name:"HTML"},
  {name:"JAVASCRIPT"},
  {name:"NODE.JS"},
  {name:"REACT.JS"},
  {name:"AWS"},
  {name:"GIT & GITHUB"},
  {name:"DOCKER"},
  {name:"SQL"},
  {name:"PRISMA"},
  {name:"MONGODB"},
  {name:"MYSQL"},

]