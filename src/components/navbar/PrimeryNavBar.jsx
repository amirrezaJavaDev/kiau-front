'use client'
import Image from "next/image";
import { MdKeyboardArrowDown } from "react-icons/md";
import { RxHamburgerMenu } from "react-icons/rx";
import { FaIdCardAlt } from "react-icons/fa";
import React,{useState} from "react";
import Link from "next/link";
function PrimeryNavBar(){
    const[loginBtn,setLoginBtn]=useState(true);
    return(
        <>
                <nav className="px-5 shadow-lg">
                <div className="py-3">
                    <div className="flex w-full justify-between">
                            <div className="flex">
                                <Image 
                                src={`/images/logo.svg`} 
                                width={110}
                                height={100}
                                className="md:mr-16"
                                />
                            <div className="explore-programm">Explore <span>Programm</span><MdKeyboardArrowDown className="text-2xl"/></div>
                            </div>
                            <div className="hidden lg:block lg:middle-menu">
                                <div className="mr-5">
                                    <ul className="middle-items">
                                        <li>Career Support</li>
                                        <li>Success Stories</li>
                                        <li>Study Abroad</li>
                                        <li>Enterprise</li>
                                        <li className="max-[1120px]:hidden">For Recruters</li>
                                        <li className="max-[1182px]:hidden">Blog</li>
                                        <li className="max-[1274px]:hidden">Academy</li>
                                    </ul>
                                </div>
                            </div>
                            <div>
                                    <button className="hidden md:block md:login-btn" onClick={()=>setLoginBtn(!loginBtn)}>LOGIN</button>
                                    <RxHamburgerMenu className="md:hidden text-4xl"/>
                            </div>
                    </div>   
                </div>
                <div className={`fixed flex items-center 
                                 justify-center top-0 left-0 
                                 z-[100] bg-black-rgba w-full h-full 
                                 ${loginBtn?"":"hidden"}
                                 `}> 
                   <div className="relative bg-white w-auto p-3 rounded-md flex flex-row-reverse justify-between">
                        <span className="absolute top-0 right-2 cursor-pointer text-black font-bold text-2xl"
                              onClick={()=>setLoginBtn(!loginBtn)}>&times;</span>                
                        <div className="p-3">
                            <p className="text-center font-bold text-lg">Login</p>
                            <form className="flex flex-col gap-3">
                                <input type="text" className="login-inp" placeholder="Email"/>
                                <input type="password" className="login-inp" placeholder="Password"/>
                                <Link href={'#'}>
                                    <p className="cursor-pointer text-blue-500">Forget Password?</p>
                                </Link>
                                <button className="px-5 py-3 bg-blue-600 text-white rounded-md">Login</button>
                            </form>
                        </div>
                        <div className="hidden md:block bg-gray-300 mx-auto flex flex-col justify-center items-center p-3">
                            <h2>Hey there! Welcome back.</h2>
                            <div className="w-36 h-36 rounded-full mx-auto flex justify-center items-center bg-gray-600 mt-5">
                                <FaIdCardAlt className="text-6xl text-white"/>
                            </div>
                        </div>
                   </div>
               </div>
            </nav>
        </>
    )
};
export default PrimeryNavBar;