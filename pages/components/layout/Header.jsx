/* eslint-disable react/jsx-no-undef */
import React from "react";
import Logo from "../ui/logo";
import {BiSolidUser} from "react-icons/bi"
import {RiShoppingBag2Fill} from "react-icons/ri"
import {ImSearch} from "react-icons/im"
import { useState } from "react";
import Search from "../ui/Search";






const Header = () => {
    const [isSearchModal, setIsSearchModal] = useState(false)
    return (
     <div className="h-[5.5rem] bg-secondary ">
       <div className="container text-white mx-auto flex justify-between items-center h-full">
       <div  >
        <Logo/>
      </div>
      <nav>
        <ul className="flex gap-x-2">
            <li className="px-[5px] py-[20px] uppercase cursor-pointer hover:text-primary ">
                <a href="">HOME</a>
            </li>
            <li className="px-[5px] py-[20px] uppercase cursor-pointer hover:text-primary  ">
                <a href="">MENU</a>
            </li>
            <li className="px-[5px] py-[20px] uppercase cursor-pointer hover:text-primary  ">
                <a href="">ABOUT</a>
            </li>
            <li className="px-[5px] py-[20px] uppercase cursor-pointer hover:text-primary  ">
                <a href="">BOOK TABLE</a>
            </li>
            
        </ul>
      </nav>
        <div className="flex gap-x-3">
            
            <a href="# ">
            <BiSolidUser className="hover:text-primary " />
            </a>
            <a href="# ">
            <RiShoppingBag2Fill className="hover:text-primary transition-all" />
            </a>
            <button onClick={() => setIsSearchModal(true)}>
            <ImSearch className="hover:text-primary  "/>
            </button>
            <a href="#">
                <button className="btn-primary bg-primary px-3 rounded-[8px]">Order Online</button>
            </a>
            <button></button>

        </div>
       
       
       {isSearchModal && (
        <Search setIsSearchModal={setIsSearchModal}/>
       
      )}
      </div>
    </div>
       
    );
  };
  
  export default Header;

 