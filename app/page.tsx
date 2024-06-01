'use client'
'use client'
import Clients from "@/components/Clients";
import Grid from "@/components/Grid";
import Hero from "@/components/Hero";
import RecentProjects from "@/components/RecentProjects";
import Experience from "@/components/Experience";
import { FloatingNav } from "@/components/ui/FloatingNav";
import Approach from "../components/Approach";
import Footer from "@/components/Footer";
import { useRef } from "react";
import { FaHome } from "react-icons/fa";
import { RefObject } from "react";

export default function Home() {
  const projectsRef = useRef<HTMLDivElement>(null);
  const TestimonialsRef = useRef<HTMLDivElement>(null);
  const approachRef = useRef<HTMLDivElement>(null);
  const experienceRef = useRef<HTMLDivElement>(null);
  const connectRef = useRef<HTMLDivElement>(null);
  

  // Function to scroll to the projects section
  const scrollToProjects = () => {
    if (projectsRef.current) {
      window.scrollTo({
        top: projectsRef.current.offsetTop,
        behavior: "smooth",
      });
    }
  };
  const scrollToTest = () => {
    if (TestimonialsRef.current) {
      window.scrollTo({
        top: TestimonialsRef.current.offsetTop,
        behavior: "smooth",
      });
    }
  };
  const scrollToApproach = () => {
    if (approachRef.current) {
      window.scrollTo({
        top: approachRef.current.offsetTop,
        behavior: "smooth",
      });
    }
  };
  const scrollToExperience = () => {
    if (experienceRef.current) {
      window.scrollTo({
        top: experienceRef.current.offsetTop,
        behavior: "smooth",
      });
    }
  };
  const scrollToConnect = () => {
    if (connectRef.current) {
      window.scrollTo({
        top: connectRef.current.offsetTop,
        behavior: "smooth",
      });
    }
  };
  
  return (
    <main className="relative bg-black-100 flex justify-center items-center flex-col mx-auto sm:px-10 px-5 overflow-clip">
      <div className="max-w-7xl w-full">
        
        <FloatingNav navItems={[
          {name: 'Home', link: "/", icon: <FaHome/> },
          {name: 'Projects', link:"#projects", onClick: scrollToProjects },
          // {name: 'Testimonials', link:"#testimonials", onClick: scrollToTest },
          {name: 'Experience', link:"#experience", onClick: scrollToExperience },
          {name: 'Approach', link:"#approach", onClick: scrollToApproach },
          {name: 'Connect', link:"#connect", onClick: scrollToConnect },
        ]} />
        <Hero/>
        <Grid/>
        <RecentProjects/>
        {/* <Clients/> */}
        <Experience/>
        <Approach/>
        {/* Add ref to Projects section */}
        <div ref={projectsRef}>
          <Footer/>
        </div>
      </div>
    </main>
  );
}

// Function to scroll to a specific reference
const scrollToRef = (ref: RefObject<HTMLDivElement>) => {
  if (ref.current) {
    ref.current.scrollIntoView({ behavior: "smooth" }); // Scroll to the referenced element
  }
};
