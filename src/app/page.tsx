import Blogs from "./components/Blogs";
//  import Grid from "./components/Grid";
import HeroSection from "./components/HeroSection";
import { BentoGridSecondDemo } from "./components/ui/bentogrid";



export default function Home() {
  return (
    <main className="flex flex-col min-h-screen bg-black/[0.96] antialiased bg-grid-white/[0.02]">

      {/* <h1 className="text-2xl text-center">Portfolio prject</h1> */}
       <HeroSection/>
       <BentoGridSecondDemo/> 
        
        
        
       
       <Blogs/>
    </main>
  );
}
