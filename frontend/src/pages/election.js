import React from "react";
import Carousel from "../components/election/carousel";
import Features from "../components/election/features";
import Navbar from "../components/Navbar";

export default function Election(){
    return(
        <>  
                {/* <div className="min-h-full flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-md w-full space-y-8"> */}
            <Navbar/>
            <Carousel/> 
            <Features/>
            {/* </div></div> */}
            
        </>
    )
}

