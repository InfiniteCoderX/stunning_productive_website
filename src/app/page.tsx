import 'remixicon/fonts/remixicon.css'
import { Header } from "@/sections/Header";
import { Hero } from '@/sections/Hero';
import { ProductShowcase } from '@/sections/ProductShowcase';
import { LogoTicker } from '@/sections/LogoTicker';
import { CallToAction } from '@/sections/CallToAction';

export default function Home() {
  return (
    <>
     <Header />
    <Hero />
     <LogoTicker />
     <ProductShowcase />
    <CallToAction />
    </>
  )
}
