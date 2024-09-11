import 'remixicon/fonts/remixicon.css'
import { Header } from "@/sections/Header";
import { Hero } from '@/sections/Hero';
import { ProductShowcase } from '@/sections/ProductShowcase';
import { LogoTicker } from '@/sections/LogoTicker';

export default function Home() {
  return (
    <>
    <Header />
     <Hero />
    <LogoTicker />
    {/* <ProductShowcase /> */}
    </>
  )
}
