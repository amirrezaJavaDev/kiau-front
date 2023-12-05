import React from "react";
import ImageSlider from "@/components/image/slider/imageSlider";


export function WhyAiSection(){
    return(
        <section className="whay-ai-section">
            <div className="contailer mx-auto md:w-[900px]">
                <h2 className="text-center text-[34px] font-semibold">Whay AI?</h2>
                <p className="text-center px-2">
                    AI is one of the most in-demand technologies of today&lsquo;s job&lsquo;s market. Artificial Intelligence is not our future - it&lsquo;s the present. Today, everyone from the world&lsquo;s largest companies, to new age startups are using AI to build groundbreaking services and achieve what was previously unthinkable. Hence, learning AI at a young age has become a necessity
                </p>
            </div>
            <ImageSlider/>
        </section>
    );
}