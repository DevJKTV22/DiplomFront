import React, { useEffect, useState } from 'react';
import AddDonation from '../actions/AddDonation';

export default function LastNews() {

    const [lastPost, setLastPost] = useState([]);
    useEffect(() => {
        
        fetch('https://diplomback-f1217ff0e554.herokuapp.com/posts/last')
          .then(response => response.json())
          .then(data => setLastPost(data))
          .catch(error => console.error('Error fetching last post:', error));
         
        }, []);
        const truncateText = (text, maxLength) => {
            if (text.length <= maxLength) {
                return text;
            }
            return text.slice(0, maxLength) + '...';
        };
         
    return(

<section className="w-full mx-auto text-gray-600 body-font ">
    <div className="container  pb-24 mx-auto flex flex-col justify-start items-center md:items-start md:flex-row md:justify-between px-2 lg:px-6 ">
        <div className="w-full md:w-4/6 ">
            
            {lastPost.map((data)=>(
            <div className="mb-6 flex flex-wrap ">
                <div className="mb-6  w-full shrink-0 grow-0 basis-auto pr-3 md:mb-0 md:w-3/12">
                    <div className="relative  overflow-hidden  bg-gray-400 ">
                        <img className="opacity-80 w-full" src={'/images/' + data.photo }  alt="Louvre" />
                        <a href={'news/'+data.id}>
                            <div
                            className="absolute top-0 right-0 bottom-0 left-0 h-full w-full overflow-hidden bg-fixed opacity-0 transition duration-300 ease-in-out hover:opacity-100 bg-[hsla(0,0%,98.4%,.15)]">
                            </div>
                            
                        </a>
                    </div>
                    
                </div>
            
                <div className="mb-6 mr-auto w-full shrink-0 grow-0 basis-auto px-3 md:mb-0 md:w-9/12 xl:w-7/12">
                    <h5 className="mb-3 text-lg font-bold">{data.title}</h5>
                   {/* <div
                        className="mb-3 flex items-center justify-center text-sm font-medium text-danger text-gray-600 md:justify-start">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2"
                            stroke="currentColor" className="mr-2 h-5 w-5">
                            <path stroke-linecap="round" stroke-linejoin="round"
                            d="M12.75 3.03v.568c0 .334.148.65.405.864l1.068.89c.442.369.535 1.01.216 1.49l-.51.766a2.25 2.25 0 01-1.161.886l-.143.048a1.107 1.107 0 00-.57 1.664c.369.555.169 1.307-.427 1.605L9 13.125l.423 1.059a.956.956 0 01-1.652.928l-.679-.906a1.125 1.125 0 00-1.906.172L4.5 15.75l-.612.153M12.75 3.031a9 9 0 00-8.862 12.872M12.75 3.031a9 9 0 016.69 14.036m0 0l-.177-.529A2.25 2.25 0 0017.128 15H16.5l-.324-.324a1.453 1.453 0 00-2.328.377l-.036.073a1.586 1.586 0 01-.982.816l-.99.282c-.55.157-.894.702-.8 1.267l.073.438c.08.474.49.821.97.821.846 0 1.598.542 1.865 1.345l.215.643m5.276-3.67a9.012 9.012 0 01-5.276 3.67m0 0a9 9 0 01-10.275-4.835M15.75 9c0 .896-.393 1.7-1.016 2.25" />
                        </svg>
                        Travels
                    </div>
                     */}
                    <p className="mb-6 ">
                    <small>Published <u>{data.createdAt}</u> by
                        <p>{data.author_name}</p></small>
                    </p>
                    <p >
                    {truncateText(data.news_text, 100)}
                    </p>
                </div>
            </div>
            ))}
        </div>
            <div className="w-4/5 md:w-2/6  flex justify-center  md:justify-end "> 
            <section id="login" className="px-4 p flex flex-col justify-start items-center  max-w-md mx-auto lg:ml-36 ">
                <AddDonation/>
            </section>
            </div>

        
    </div>
   
</section>
    );
}