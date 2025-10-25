import FAQ from "@/components/FAQ";
import HeroSection from "@/components/Hero Section";

import { AnimatedTestimonialsDemo } from "@/components/Testimonial";
import { Navbar } from "@heroui/react";
import Image from "next/image";

export default function Home() {
  return (
    <div>
    <HeroSection/>
    <AnimatedTestimonialsDemo/>
    <FAQ/>
  </div>
  )}