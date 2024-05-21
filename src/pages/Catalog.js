import React, { useEffect, useState } from 'react';

export default function Catalog() {

    const [Animals, setAnimals] = useState([]);
    const [searchValue, setSearchValue]=useState('');

  useEffect(() => {

    fetch(`http://localhost:5000/animal/`)
      .then(response => response.json())
      .then(data => setAnimals(data))
      .catch(error => console.error('Error fetching animals:', error));
  }, []); 

 
  
    return (
        <><section className="hidden">
        <div className="container  pr-4 mx-auto flex justify-end ">
            <div className='flex justify-end    w-4/12 items-center'>
                
                <form className='flex justify-end'>
                    <button onClick={()=> setSearchValue('')} className=' mr-4 px-4 text-xl border h-10 bg-gray-400 my-2 hover:bg-gray-500 shadow '>
                        Find
                    </button>
                    <input id="input" type="text" placeholder="search" value={searchValue} onChange={(event) => setSearchValue(event.target.value)} className='border h-10 pl-2  w-2/3 my-2 shadow' />
                    
                </form>
                
            </div>

        </div>

    </section>
        <section className="mt-10">
        <div className="container mx-auto  border-l-1 border-t-1 border-r-1 border-b-0">
            
            <div className="flex flex-wrap  justify-between ">

                {Animals.map((data)=>(
                <div className=" xl:w-1/4 md:w-1/2 w-full">
                    <div className="h-full px-4 pb-2  flex flex-col relative overflow-hidden ">
                    
                    <img className="border shadow "  src={'/images/' + data.photo } alt="Cat "/>
                    <a className=" text-2xl  flex items-center mt-auto text-white bg-gray-400  py-3 px-4 w-full focus:outline-none hover:bg-gray-500 border shadow" href={'catalog/'+data.id}>
                        <h3 >{data.name}</h3>
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
    </>
    );
}