'use client'
import React from "react";
import { useState } from "react";
export function IndexBanner(){
    const [play,setPlay] = useState(false);
    return(
        <div className="banner">
           <img src="/images/accets/happy-boy-model.jpeg" alt="happy boy" />
               <div>
                    <h1 className="font-bold text-4xl pt-8 pb-8">
                            Applications of
                            <br/>
                            Artificial Intelligence  Program
                    </h1>
                     <h3 className="text-xl pb-3">
                            A head start in AI for young innovators.
                            <br/>
                            Enable your children to build a foundation in AI, the most sought after technology today.
                    </h3>
                        <div className="flex-col space-y-3">
                            <div className="justify-center cursor-pointer" onClick={()=>setPlay(!play)}>
                                <a className="flex justify-center gap-2 text-blue-800 ">
                                    <img src="/images/icons/svg/play-icon.svg" alt="play icon" />
                                    Watch Video
                                </a>
                            </div>
                            <div className="flex flex-col  p-2 md:flex-row justify-center gap-3">
                                    <a className="banner-btn-primery">Download Brochure</a>
                                    <a className="banner-btn-secondery">Access Program Demo</a>
                            </div>
                        </div>
               </div>
               <div className={`fixed flex items-center justify-center top-0 left-0 z-[100] bg-black-rgba  w-full h-full ${play? 'block':'hidden'}`}> 
                    <span className="text-white cursor-pointer font-bold text-7xl absolute top-0 right-2" onClick={()=>setPlay(!play)}>&times;</span>
                    <video src="https://res.cloudinary.com/dpwdri090/video/upload/v1699968405/output_vbwg1i.mp4" 
                           className="absolute transform origin-center max-w-[95%] max-h-[95%] object-contain border border-white rounded-lg" 
                           controls/>       
               </div>
           <img src="/images/accets/happy-girl-model.jpeg" alt="happy girl" className="hidden md:block"/>
           <img src="/images/accets/happy-girl-model-top.jpeg" alt="happy girl" className="md:hidden"/>
        </div>
    );
}