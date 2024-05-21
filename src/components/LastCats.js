import React, { useEffect, useState } from 'react';


export default function LastCats() {
    
  const [lastAnimals, setLastAnimals] = useState([]);

  useEffect(() => {

    fetch(`https://diplomback-f1217ff0e554.herokuapp.com/animal/last`)
      .then(response => response.json())
      .then(data => setLastAnimals(data))
      .catch(error => console.error('Error fetching last animals:', error));
  }, []); 

 
  return (
    <section className=" text-gray-600 body-font overflow-hidden ">
        <div className="container px-5 pb-24 mx-auto ">
            
            <div className="flex flex-wrap -m-4 justify-between px-2">

                {lastAnimals.map((data)=>(
                <div className=" xl:w-1/4 md:w-1/2 w-full">
                    <div className="h-full px-2 pt-2  flex flex-col relative overflow-hidden">
                    
                    <img src={'/images/' + data.photo } alt="Cat "/>
                    <a className="flex items-center mt-auto text-white text-2xl bg-gray-400 border-0 py-3 px-4 w-full focus:outline-none hover:bg-gray-500 " href={'catalog/'+data.id}>
                      <h3>{data.name} </h3>
                        <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-4 h-4 ml-auto" viewBox="0 0 24 24">
                        <path d="M5 12h14M12 5l7 7-7 7"></path>
                        </svg>
                    </a>
                    
                    </div>
                </div>
                ))}
            </div>
        </div>
    </section>
  );
}