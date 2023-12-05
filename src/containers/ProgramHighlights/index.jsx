
import React from 'react'
import json from '@/lib/accordion.json'
import Accordion from '@/components/accordion/accordion';


function ProgramHighlight() {
  const {accordion} = json;
    
  return (
    <section className='text-center bg-violet-300'>
            <h1 className='font-mono font-bold text-5xl'>Program Highlights</h1>
            <div className={`flex gap-3 justify-center py-3 
                             bg-[url('/images/accets/blob.svg')] 
                             bg-no-repeat bg-center bg-cover
                             bg-[length:100px_100px] 
                            `}>
                <div className='hidden py-3 md:block'>
                    <img src="/images/accets/happy-girl-model-right.jpeg" className='rounded-lg drop-shadow-lg' 
                         alt="happy boy model" />
                </div>
                <div className='pt-5'>
                    {
                      accordion.map((accord,i)=>(
                        <Accordion data={accord} key={i}/>
                      ))
                    }
                </div>
            </div>
    </section>
  )
}

export default ProgramHighlight