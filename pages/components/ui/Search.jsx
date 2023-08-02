import React from 'react'
import Title from "../ui/title";
import OutsideClickHandler from "react-outside-click-handler";
import Image from 'next/image';
import {AiFillCloseCircle} from "react-icons/ai"

const Search = ({setIsSearchModal}) => {
  return (
    <div className="fixed top-0 left-0 w-screen h-screen z-50 after:content-[''] 
    after:w-screen after:h-screen after:bg-white after:opacity-50 after:absolute after:top-0 after:left-0 
    after:opacity-60 grid place-content-center "> 
    <OutsideClickHandler onOutsideClick={() => setIsSearchModal(false)}>
    <div className='w-full h-full grid place-content-center'>
    <div className=" relative z-50 bg-secondary rounded-3xl md:w-[600px] w-[300] md:h-[600px] h-[300] grid place-content-center
                    border-2  p-5 font-dancing font-bold text-center " >
      <Title addClass="text-[50px]  " >Search</Title>
      <input type='text' placeholder='Search...' className=' border  border-primary w-full my-10  '></input>
      
      <ul>
              <li className="flex items-center justify-between p-1 hover:bg-primary transition-all">
                <div className="relative flex">
                  <Image src="/images/f1.png" alt="" width={48} height={48} />
                </div>
                <span className="font-bold">Good Pizza</span>
                <span className="font-bold">$10</span>
              </li>
        </ul>
        <button className='absolute top-3 right-3'>
            <AiFillCloseCircle className='hover:text-primary transition-all' onClick={() => setIsSearchModal(false)}/>
        </button>
     
    
    </div>
    </div>
  </OutsideClickHandler></div>
  )
}

export default Search

