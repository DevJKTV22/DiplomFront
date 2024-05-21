import React, { useEffect, useState } from 'react';
import axios from 'axios';
import {useParams} from 'react-router-dom';
import BlogComment from '../components/BlogComment';
export default function BlogDetails( ) {
    const [oneNew, setOneNew] = useState({});
    const {id} = useParams();

    useEffect(() => {
      const fetchData = async () => {
        
            const response = await axios.get(`http://localhost:5000/posts/${id}`);
            setOneNew(response.data);
          
        
      };
  
      fetchData();
    }, [id]);
    return (

<>
<section >
<div className="container mx-auto " >
    
    <div className="my-12 flex flex-wrap justify-center border shadow pb-4">
      <div className="w-full shrink-0 grow-0 basis-auto px-3 bg-gray-50">
        <h5 className="my-3 text-lg font-bold">{oneNew.title}</h5>
            <p className="mb-4 text-neutral-500 ">
              <small>Published <u>{oneNew.createdAt}</u>  {"by: "+oneNew.author_name}</small>
            </p>
      </div>
      <div className="w-full shrink-0 grow-0 basis-auto md:w-12/12 ">
        <div className="relative mb-6 overflow-hidden  bg-cover bg-no-repeat shadow-lg flex flex-col items-baseline "data-te-ripple-init data-te-ripple-color="light">
          <img  src={'/images/' + oneNew.photo} className="w-1/2 mx-auto my-4" alt="Post illustrative"/>                   
        </div>
      </div>
      <div className="w-full shrink-0 grow-0 basis-auto px-3 ">
          <p className="mb-6"> {oneNew.news_text}</p>
            <a className="inline-block  bg-primary px-6 pt-2.5 pb-2 text-xs font-medium uppercase leading-normal  shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)]"
              href="/news" role="button">Back to list</a>
      </div>
    </div>
  </div>
  </section>




       
<BlogComment/>
</>
    );

}