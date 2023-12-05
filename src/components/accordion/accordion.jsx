'use client'
import React,{useState} from 'react'
import { IoMdArrowDropdown,IoMdArrowDropup } from "react-icons/io";
function Accordion(props) {
  const [item,setItem] = useState(props.data)
  const handleToggleActive = ()=>{
        let newActive = item.active === 1? 0:1;
        setItem({...item,active:newActive});
  };
 
  return (
    <div className={`accordion group ${item.active === 1 ?'is-active':''}`}>  {/* accordion */}
        <div className='item'
            onClick={handleToggleActive}>   {/* item */}
              <div>
                <img src={item.icon} 
                     alt="icon"
                     className='w-[20px] h-[32px]' />
              </div>
             <div className="text-gray-500 group-[is-active]:items-baseline group-[.is-active]:text-black">  {/* title */}
                {item.title}
             </div>
             <span>{item.active?<IoMdArrowDropup/>:<IoMdArrowDropdown/>}</span>
        </div>  
        <div className='content'>  {/* content */}
                {item.content}
        </div>
    </div>
  )
}

export default Accordion