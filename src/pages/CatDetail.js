import React, { useEffect, useState } from 'react';
import axios from 'axios';
import {useParams} from 'react-router-dom';
import CatComment from '../components/CatComment';

export default function CatDetail( ) {
    const [animal, setAnimal] = useState({});
    const {id} = useParams();

    useEffect(() => {
      const fetchData = async () => {
        
            const response = await axios.get(`https://diplomback-f1217ff0e554.herokuapp.com/animal/${id}`);
            setAnimal(response.data);
          
        
      };
  
      fetchData();
    }, [id]);
    return (
<>
<section className="py-20  ">
    
    <div className="max-w-6xl px-4 mx-auto">
    <div className="flex flex-wrap mb-24 -mx-4">
    <div className="w-full px-4 mb-8 md:w-1/2 md:mb-0">
    <div className="sticky top-0 z-50 overflow-hidden ">

    <div className="relative mb-6 lg:mb-10 ">
        

            <img className="object-cover w-full lg:h-1/2" src={'/images/' + animal.photo } alt=""/>
           
            
            
            </div>
           
            </div>
            </div>

                
            <div className="w-full px-4 md:w-1/2">
            <div className="lg:pl-20">
            <div className="mb-6 ">
            
            <h2 className="max-w-xl mt-2 mb-4 text-5xl font-bold md:text-6xl font-heading ">
            {animal.name}
            </h2>
            </div>

            <div className="mt-6">
                <p className="mb-2 text-lg font-semibold ">Age: <span className="max-w-md mb-4 text-gray-500 " > {animal.age} </span></p>
                <div className="grid grid-cols-2 gap-4 pb-4 mt-2 mb-4 border-b-2 border-gray-300 lg:grid-cols-3">
                </div>
            </div>

            <div className="mt-6">
                <p className="mb-2 text-lg font-semibold ">Sex: <span className="max-w-md mb-4 text-gray-500 " > {animal.sex} </span></p>
                <div className="grid grid-cols-2 gap-4 pb-4 mt-2 mb-4 border-b-2 border-gray-300 lg:grid-cols-3">
                </div>
            </div>
            


            <div className="mt-6">
                <p className="mb-2 text-lg font-semibold ">From: <span className="max-w-md mb-4 text-gray-500 " > {animal.from_place} </span></p>
                <div className="grid grid-cols-2 gap-4 pb-4 mt-2 mb-4 border-b-2 border-gray-300 lg:grid-cols-3">
                </div>
            </div>

            


            <div className="mt-6">
                <p className="mb-2 text-lg font-semibold ">Arrived: <span className="max-w-md mb-4 text-gray-500 " > {animal.created_date} </span></p>
                <div className="grid grid-cols-2 gap-4 pb-4 mt-2 mb-4 border-b-2 border-gray-300 lg:grid-cols-3">
                </div>
            </div>
            
            <div className="mt-6">
                <p className="mb-2 text-lg font-semibold ">Vaccine: <span className="max-w-md mb-4 text-gray-500 " > {animal.vaccine} </span></p>
                <div className="grid grid-cols-2 gap-4 pb-4 mt-2 mb-4 border-b-2 border-gray-300 lg:grid-cols-3">
                </div>
            </div>

            <div className="mt-6">
                <p className="mb-2 text-lg font-semibold ">Place now: <span className="max-w-md mb-4 text-gray-500 " > {animal.place_now} </span></p>
                <div className="grid grid-cols-2 gap-4 pb-4 mt-2 mb-4 border-b-2 border-gray-300 lg:grid-cols-3">
                </div>
            </div>

            <div className="mt-6">
                <p className="mb-2 text-lg font-semibold ">Owner phone: <span className="max-w-md mb-4 text-gray-500 " > {animal.owner_phone} </span></p>
                <div className="grid grid-cols-2 gap-4 pb-4 mt-2 mb-4 border-b-2 border-gray-300 lg:grid-cols-3">
                </div>
        </div>
   

    <div className="mt-6 ">
        <button className="w-full px-4 py-2 bg-gray-100   text-xs font-medium uppercase leading-normal  shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]">
         Adopt
        </button>
    </div>


    
    
    </div>
    </div>
    </div>
    </div>
    
    </section>
    <CatComment/>

</>

    );
}