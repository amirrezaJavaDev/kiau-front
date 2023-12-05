'use client'
import React from 'react'
import {Swiper,SwiperSlide} from "swiper/react"
import { Autoplay ,Pagination } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/pagination';
import Image from 'next/image';

function ImageSlider() {
  return (
    <div className='pt-5'>
        <Swiper
            pagination={{
                dynamicBullets:true
            }}
            autoplay={{
                delay: 2500,
                disableOnInteraction: false,
              }}
            loop={true}
            modules={[Pagination,Autoplay]}
            className='md:h-[300px] md:w-[900px]'
        >
            <SwiperSlide>
                  <div className='flex flex-col md:flex-row justify-center items-center '>
                        <div>
                            <Image src={`/images/slider/whay-ai-1.jpg`} 
                                   width={250} 
                                   height={100} 
                                   />
                        </div>
                        <div className='flex flex-col gap-3 pl-5 md:gap-11'>
                            <h1 className='text-lg md:text-2xl'>
                                AI is more important than fire
                                <br/>
                                or electricity
                            </h1>
                            <span className='text-center  w-[150px] text-sm bg-yellow-100 p-3 rounded-t-lg rounded-br-lg'>
                                Sundar Pichai,CEO
                            </span>
                            <Image src={`/images/icons/svg/Google-Logo-test.svg`} 
                                   className='bg-white rounded-t-3xl mb-3 rounded-br-3xl border border-blue-400'
                                   width={100} 
                                   height={100} />
                        </div>
                  </div>
            </SwiperSlide>
            <SwiperSlide>
                  <div className='flex flex-col md:flex-row justify-center items-center '>
                        <div>
                            <Image src={`/images/slider/whay-ai-2.jpg`} width={250} height={100} />
                        </div>
                        <div className='flex flex-col gap-3 pl-5 md:gap-11'>
                            <h1 className='text-lg md:text-2xl'>
                                AI is in a ‘golden age’ & solving problems
                                <br/>
                                that were once in the realm of sci-fi.
                            </h1>
                            <span className='text-center font-bold w-[130px] text-sm bg-yellow-100 p-2 rounded-t-lg rounded-br-lg'>
                                JEFF BEZOS,CEO
                            </span>
                           <div className='rounded-t-3xl rounded-br-3xl items-center bg-white w-[100px] border border-black'>
                                <img src={`/images/icons/svg/Amazon_logo.svg`} 
                                        className='p-3 w-[100px] '
                                         />
                           </div>
                        </div>
                  </div>
            </SwiperSlide>
            <SwiperSlide>
                  <div className='flex flex-col md:flex-row justify-center items-center '>
                        <div>
                            <Image src={`/images/slider/whay-ai-3.jpg`} width={250} height={100} />
                        </div>
                        <div className='flex flex-col gap-3 pl-5 md:gap-11'>
                            <h1 className='text-lg md:text-2xl'>
                                Human-AI partnerships can help solve
                                <br/>
                                society’s challenges.
                            </h1>
                            <span className='text-center font-bold w-[130px] text-sm bg-yellow-100 p-2 rounded-t-lg rounded-br-lg'>
                                SATYA NADELLA,CEO
                            </span>
                           <div className='rounded-t-3xl mb-3 rounded-br-3xl items-center bg-white w-[100px] border border-black'>
                                {/* <img src={`/images/icons/svg/Microsoft-logo.png`} 
                                        className='p-3 w-[100px] '
                                         /> */}
                                <Image src={`/images/icons/svg/M-Logo.png`} 
                                   className='bg-white rounded-t-3xl rounded-br-3xl border border-blue-400'
                                   width={100} 
                                   height={100} />
                           </div>
                        </div>
                  </div>
            </SwiperSlide>
            {/* <div className="slider-controler">
                <div className="swiper-button-prev slider-arrow"></div>
                <div className="swiper-button-next slider-arrow"></div>
                <div className="swiper-pagination"></div>
            </div> */}
        </Swiper>
    </div>
  )
}

export default ImageSlider