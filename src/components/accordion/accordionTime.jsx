'use client'
import React, { useState } from 'react'
import { 
    IoMdArrowDropdown,
    IoMdArrowDropup 
} from "react-icons/io";
import { RiTimerLine } from "react-icons/ri";


const AccordionSection = ({
    section,
    isActiveSection,
    setActiveIndex,
    sectionIndex
})=>{
    const toggleSection = () =>{
        const nextIndex = isActiveSection ? null :sectionIndex;
        setActiveIndex(nextIndex);
    }
    return(
        <div>
            <div 
                onClick={toggleSection}
                className=' flex justify-between items-baseline cursor-pointer p-4 border rounded-lg bg-white hover:drop-shadow-md'>
                <div>{section.title}</div>
                <div className='flex items-baseline gap-2'>
                    <RiTimerLine />
                    <div className='pr-3'>Projects:{section.project}</div>
                    {isActiveSection ? <IoMdArrowDropup/>:<IoMdArrowDropdown/>}
                </div>
            </div>
            {isActiveSection && 
                <div className='p-5 bg-white border rounded-t-md rounded-b-lg text-black cursor-pointer' >
                    <ul>
                    {section.content.map((cont,index)=>(
                        <li key={index}
                            className='pl-2 py-3'>
                                {cont}
                        </li>
                    ))}
                    </ul>
                    <p className='font-bold'>Project: <span className=' text-sm font-light'>{section.project_content}</span></p>
                </div>
            }
        </div>
    );
}

const AccordionTime = ({sections}) =>{
    const [activeIndex,setActiveIndex] = useState(0);
    return(
        <div className='timeline '>
            {
                sections.map((section,index)=>(
                   <div className="relative py-3 " key={index}>
                        <div className="dot"></div>
                        <div className='pl-5 pt-3 flex flex-col w-full'>
                            <span className='timeline-date'>{section.weeks}</span>
                            <AccordionSection
                                section={section}
                                key={index}
                                isActiveSection={index === activeIndex}
                                setActiveIndex={setActiveIndex}
                                sectionIndex={index}
                            />  
                        </div>
                   </div>          
                ))
            }
        </div>
    );
}
export default AccordionTime;