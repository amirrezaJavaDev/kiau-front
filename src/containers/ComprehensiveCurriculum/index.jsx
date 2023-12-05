import AccordionTime from "@/components/accordion/accordionTime";
import { FaRegClock } from "react-icons/fa";
import { GiLaptop } from "react-icons/gi";
import React from "react";

function ComprehensiveCurriculum(){
    
    const data = [
        {
        weeks:"MODULE 1 • 2 WEEKS",
        title:"Introduction to AI",
        project:1,
        project_content:'Working with Google AI Experiments like Teachable Machine',
        content:[
            'What is AI? What isn’t AI?',
            'History of AI, ML',
            'Significant milestones in AI',
            'Role of ML within AI',
            'Intuitive example to illustrate ML, AI',
            'Careers in AI',
            'Ethics & Bias in AI'
            ]
        },
        {
        weeks:"MODULE 2 • 2 WEEKS",
        title:"Machine Learning and working with Data",
        project:1,
        project_content:'Building a Book Recommendation Model',
        content:[
            'How do machines learn?',
            'Training vs. testing data',
            'Interpreting the results of ML - what does it really mean?',
            'Recommendation systems - how they work',
            'Reinforcement Learning',
            'How self-driving cars use reinforcement learning for decision making?'
            ]
        },
        {
        weeks:"MODULE 3 • 2 WEEKS",
        title:"Frontiers of Artificial Intelligence",
        project:1,
        project_content:'Simulation - How Neural Networks Work?',
        content:[
            'Brain-inspired neural networks',
            'Neural Networks: how they work',
            'Introduction to Computer Vision & NLP',
            'What you can do with DL: Computer Vision, Natural Language Processing, etc.',
            'Case-study: Power of DL - illustrative examples like GPT3'
            ]
        },
        {
        weeks:"MODULE 4 • 2 WEEKS",
        title:"Natural Language Processing (NLP)",
        project:2,
        project_content:'Building a Chat-bot to take Pizza order',
        content:[
            'Applications of NLP',
            'AI and NLP',
            'Building Chatbots',
            'Sentiment analysis, Entity extraction'
            ]
        },
        {
        weeks:"MODULE 5 • 2 WEEKS",
        title:"Computer Vision (CV)",
        project:2,
        project_content:'Working with an X-ray Image Classification System to detect COVID disease using chest X rays',
        content:[
            'Applications of CV',
            'How images are stored digitally?',
            'How to work with images?',
            'Image Classification',
            'Image detection & Recognition'
            ]
        },
        {
        weeks:"MODULE 6 • 2 WEEKS",
        title:"Project Week",
        project:0,
        project_content:'',
        content:[
            'Project presentations by all students',
            'Industry case session - understanding real life use cases of AI from various industries'
            ]
        },
        
    ];
    
    return(
        <section className="py-3">
            <div className="flex flex-col text-center gap-3">
                <h1 className="font-bold text-2xl">Comprehensive Curriculum</h1>
                <p className="w-1/2 mx-auto">Artificial Intelligence has become the defining technology of this generation. It is ubiquitous and pervasive. It means that to a generation of high-school aged learners, a functional understanding of AI, its enabling technologies, and its applications - are indispensable. With fields as far-reaching as art, retail, healthcare and education all-embracing AI, it is vital that even non-technologists are proficient in AI and its applications.</p>
                <p className="w-1/2 mx-auto">This course will help high-school age learners (roughly ages 14 - 18) understand the AI landscape, develop an intuition for how tools and techniques are to be used in practice, and work on projects to build a deeper understanding of how data can be best utilized to solve modern problems. Through this program, they will also understand how some of the most commonly used apps, websites and tools work.</p> 
                <div className="w-full flex gap-14 justify-center">
                    <div className="w-[300px] h-2/3 pt-5 px-5 bg-pink-100 rounded-lg drop-shadow-md">
                        <p className="text-left text-gray-500">
                            About 4 hours per week, including recorded content, curated demonstrations, live interactive sessions, projects, and quizzes weekly.
                        </p>
                        <div className={`
                                bg-white
                                 p-3 rounded-md 
                                 flex 
                                 justify-center
                                 gap-8
                                 my-3
                                 `}>
                                <div className="w-12 h-12 rounded-full flex justify-center items-center bg-red-600">
                                    <FaRegClock className="text-white text-xl" />
                                </div>
                                <div className="">
                                    <p className="font-semibold text-2xl">50+ hrs</p>
                                    <span>of learning content</span>
                                </div>
                        </div>
                        <div className="bg-white p-3 rounded-md flex justify-center gap-8">
                                <div className="w-12 h-12 rounded-full  flex justify-center items-center bg-indigo-300">
                                    <GiLaptop className="text-white text-xl" />
                                </div>
                                <div className="pl-3">
                                    <p className="font-semibold text-2xl">30+ hrs</p>
                                    <span>of doubt solving</span>
                                </div>
                        </div>
                        <button className="w-full p-2 rounded-md my-5 bg-indigo-500 text-white">
                                Download Brochure
                        </button>
                    </div>
                    <AccordionTime sections={data}/>
                </div>
            </div>
        </section>
    );
}
export default ComprehensiveCurriculum;