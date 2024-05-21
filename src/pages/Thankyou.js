import React from 'react';


export default function Thankyou() {
    

    return(
    <section className=" h-screen" >
        <div className="container px-5  mx-auto " >
        
            <div className="mb-4 flex flex-wrap justify-center">
                <div className="w-full shrink-0 grow-0 basis-auto md:w-12/12">
                    <div className="relative mb-6 overflow-hidden  bg-cover bg-no-repeat shadow-lg flex flex-col items-center ">
                        <img src="/images/pray.jpg" className="w-9/12 " alt="pray cat"/>
                        <h3 className="md:text-2xl text-base text-gray-900 font-semibold text-center">Thank You!</h3>
                        <p className="text-gray-600 my-2 text-center"></p>
                        <p className="text-center"> Have a great day!  </p>
                        <div className="py-10 text-center">
                            <a href="/" className="px-12 bg-indigo-600 hover:bg-indigo-500 text-white font-semibold py-3">
                                GO BACK 
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>


    
    );

    }