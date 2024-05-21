import React from 'react';
import petition2 from '../assets/petition2.jpg';
import LastCats from '../components/LastCats';
import LastNews from '../components/LastNews';

export default function Home() {
    

    return(
        <>
        

            <section className="w-full   mx-auto bg-nordic-gray-light flex pt-12 md:pt-0 md:items-center bg-cover bg-right max-w-screen-2xl h-96 bg-main" >


                    <div className="container mx-auto">

                        <div className="flex flex-col w-full lg:w-1/2 justify-center items-start  px-6 tracking-wide">
                            <h1 className="text-black text-2xl my-4">Cat life</h1>
                            <p className="text-xl inline-block no-underline border-b border-gray-600 leading-relaxed hover:text-black hover:border-black">It is simple</p>

                        </div>

                    </div>

            </section>



            <section className="text-gray-600 body-font ">
                <div className="container px-5 py-24 mx-auto flex flex-wrap items-center ">
                    <div className="lg:w-3/5 md:w-1/2 md:pr-16 lg:pr-0 pr-0 ">
                        <h1 className="title-font font-medium text-3xl text-gray-900">Cats need your help NOW! </h1>
                        <p className="leading-relaxed mt-4">Sign a petition to support animals </p>
                        <p className="leading-relaxed mt-4">Force Bayer to label GERMOLENE as dangerous to pets and animals. 
        
                            Bayer must clearly label all their products as dangerous to pets and animals, and all vets should warn pet owners of the dangers of using human medicines on their pets. </p>
                    </div>
                    <div className="lg:w-2/6 md:w-1/2 bg-gray-100   flex flex-col md:ml-auto w-full mt-10 md:mt-0 ">
                        <div className="w-full flex flex-col justify-end" >
                            <img  src={petition2} alt="Petition"/>
                            <a href="https://www.change.org/t/cats-8">
                            <button className="w-full text-white bg-gray-400  border-0 py-2 px-8 focus:outline-none hover:bg-gray-500  text-lg">Sign </button>
                            </a>
                        </div> 
                    </div>
                </div>
            </section>
            <LastCats/>
            <LastNews/>
            
        </>
        
    );
}