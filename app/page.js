import { Footer } from "@/components/blocks/footer-section";
import { Features } from "@/components/Features";
import HeroSection from "@/components/Hero Section";
import { FloatingNavbar } from "@/components/navbar";
import { PricingBasic } from "@/components/Plan";
import { AnimatedTestimonialsDemo } from "@/components/Testimonial";


export default function Home() {
  return (
    <div>
      <FloatingNavbar/>
    <HeroSection/>
    <Features/>
    <PricingBasic/>
    <AnimatedTestimonialsDemo/>
    <Footer/>
   


  </div>
  )}