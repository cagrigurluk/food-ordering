import Image from 'next/image'
import { Inter } from 'next/font/google'
import Home from "./home"
import Header from './components/layout/Header'
import Logo from './components/ui/logo'
const inter = Inter({ subsets: ['latin'] })

export default function Index() {
  return (
    <div className="">
    <main
      className={`flex min-h-screen flex-col items-left   ${inter.className}`}
    >
       {/* <h1 className="text-center bg-primary"> FOOD ORDERİNG</h1>   */}
       <Home />
       <Header />
       

       

 
    </main>
    </div>
  )
}
