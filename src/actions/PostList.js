import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from '../middleware/axios';




export default function PostsList() {
    const [posts, setPosts] = useState([]);
    const [newsComment, setNewsComment] = useState([]);
    const [catComment, setCatComment] = useState([]);
    const [Animals, setAnimals] = useState([]);

    const [showPosts, setShowPosts] = useState(true);
    const [showNewsComments, setShowNewsComments] = useState(false);
    const [showCatComments, setShowCatComments] = useState(false);
    const [showAnimals, setShowAnimals] = useState(false);

    useEffect(() => {
        getPosts();
        getNewsComment();
        getCatComment();
        getCats();
    },[])
    const getCats = async () => {
        const response = await axios.get(`https://diplomback-f1217ff0e554.herokuapp.com/animal/`);
        setAnimals(response.data);
    };
    const deleteCat = async (id) => {
        if (window.confirm('Delete record #' + id + '?')) {
            await axios.delete(`https://diplomback-f1217ff0e554.herokuapp.com/animal/${id}`);
            getCats()
        }
    };
    const getPosts = async () => {
        const response = await axios.get(`https://diplomback-f1217ff0e554.herokuapp.com/posts`);
        setPosts(response.data);
    };
    const deletePost = async (id) => {
        
            await axios.delete(`https://diplomback-f1217ff0e554.herokuapp.com/posts/${id}`);
            getPosts()
        
    };
    const getNewsComment = async () => {
        const response = await axios.get(`https://diplomback-f1217ff0e554.herokuapp.com/commentpost/`);
        setNewsComment(response.data);
    };
    const deleteNewsComment = async (id) => {
        if (window.confirm('Delete record #' + id + '?')) {
            await axios.delete(`https://diplomback-f1217ff0e554.herokuapp.com/commentpost/${id}`);
            getNewsComment()
        }
    };

    const getCatComment = async () => {
        const response = await axios.get(`https://diplomback-f1217ff0e554.herokuapp.com/commentanimal/`);
        setCatComment(response.data);
    };
    const deleteCatComment = async (id) => {
        if (window.confirm('Delete record #' + id + '?')) {
            await axios.delete(`https://diplomback-f1217ff0e554.herokuapp.com/commentanimal/${id}`);
            getCatComment()
        }
    };
    return(
        <>
        
        <section className="w-full flex flex-col items-center pt-2">
                <div className="w-full px-4 md:px-0 lg:w-3/5 mx-auto overflow-auto flex flex-col items-center  border border-l-0 border-r-0 border-t-0 border-b-1">
                    <h1 className="font-heading my-12 font-bold tracking-tight text-gray-900  text-3xl sm:text-5xl">Control panel</h1>
        
                    <div className="container md:gap-x-2 flex flex-row items-start md:flex-row md:items-end  ">
                    <button
                            onClick={() => {
                                setShowPosts(true);
                                setShowNewsComments(false);
                                setShowCatComments(false);
                                setShowAnimals(false);
                            }}
                            className="flex border border-l-1 border-r-1 border-t-1 border-b-0 py-2 px-6 focus:outline-none hover:bg-gray-100 shadow"
                        >
                            Posts list
                        </button>
                        <button
                            onClick={() => {
                                setShowPosts(false);
                                setShowNewsComments(true);
                                setShowCatComments(false);
                                setShowAnimals(false);
                            }}
                            className="flex border border-l-1 border-r-1 border-t-1 border-b-0 py-2 px-6 focus:outline-none hover:bg-gray-100 shadow"
                        >
                            Comments to news
                        </button>
                        <button
                            onClick={() => {
                                setShowPosts(false);
                                setShowNewsComments(false);
                                setShowCatComments(true);
                                setShowAnimals(false);
                            }}
                            className="flex border border-l-1 border-r-1 border-t-1 border-b-0 py-2 px-6 focus:outline-none hover:bg-gray-100 shadow"
                        >
                            Comments to cats
                        </button>
                        <button
                            onClick={() => {
                                setShowPosts(false);
                                setShowNewsComments(false);
                                setShowCatComments(false);
                                setShowAnimals(true);
                            }}
                            className="flex border border-l-1 border-r-1 border-t-1 border-b-0 py-2 px-6 focus:outline-none hover:bg-gray-100 shadow"
                        >
                            Cats list
                        </button>
                    </div>
                </div>
        </section>
        <section>
        {showPosts && (
        <div 
         id="table1-content"   className='container mx-auto px-4  flex flex-col items-center lg:overflow-auto  overflow-x-scroll' >
        <h2 className="font-heading my-8 font-bold tracking-tight text-gray-900  text-xl sm:text-3xl">Posts list </h2>
            <div className=" container    flex justify-end ">
               
                <a href='/addpost' className="    text-white text-lg  bg-blue-400 px-4  py-2 my-2 focus:outline-none hover:bg-indigo-600 rounded">New post</a>

               

            </div>
        <table className="w-full "> 
                <thead>
                    <tr>
                    <th className=" px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100 shadow">#No</th>
                    <th className="px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100 shadow">ID</th>
                    <th className="px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100 shadow">Title</th>
                    <th className="px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100 shadow">Created date</th>  
                    <th className="px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100 shadow">Author</th>
                    <th className="w-10 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100 shadow">Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {posts.map((post, index) =>(
                    <tr className=" border border-b-1 border-x-0" key={post.id}>
                        <td className="px-4 py-3">{index + 1}</td>
                        <td className="px-4 py-3">{post.id}</td>
                        <td className="px-4 py-3">{post.title}</td>
                        <td className="px-4 py-3">{post.createdAt}</td>
                        
                        <td className="md:px-4 py-3">{post.author_name}</td>
                        <td className="w-10 text-center">
                            <div className=" flex flex-col md:flex-row items-center">
                            <Link to={`/news/${post.id}`} className=" w-full md:w-1/3 flex ml-auto text-white bg-gray-400 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded">
                                <button>Detail</button>
                            </Link>
                            <Link to={`/postedit/${post.id}`} className=" w-full md:w-1/3 flex ml-auto text-white bg-green-400 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded">
                            <button>Edit</button>
                            </Link>               
                            <button onClick={() => deletePost(post.id)} className="w-full md:w-1/3 flex ml-auto text-white bg-red-400 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded"> Delete</button>
                            </div>
                        </td>
                        
                    </tr>
                    ))}
                    
                </tbody>
            </table>
        </div>
         )}
       {showNewsComments && (
        <div  id="table2-content hidden"   className='container mx-auto px-4  flex flex-col items-center lg:overflow-auto overflow-x-scroll'>
        <h2 className="font-heading my-8 font-bold tracking-tight text-gray-900  text-xl sm:text-3xl">Comment to news </h2>
        
        <table className="w-full"> 
                <thead>
                    <tr>
                    <th className="px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100">#No</th>
                    <th className="px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100">ID</th>
                    <th className="px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100">Text</th>
                    <th className="px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100">Created date</th>  
                    <th className="px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100">Author</th>
                    <th className="w-10 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100">Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {newsComment.map((comment, index) =>(
                    <tr key={comment.id}>
                        <td className="px-4 py-3">{index + 1}</td>
                        <td className="px-4 py-3">{comment.id}</td>
                        <td className="px-4 py-3">{comment.text}</td>
                        <td className="px-4 py-3">{comment.createdAt}</td>
                        
                        <td className="px-4 py-3">{comment.author_name}</td>
                        <td className="w-10 text-center">
                            <div className="container flex flex-col md:flex-row items-center">
                            <Link className=" h-full w-1/3 flex ml-auto text-white white border-0 py-2 px-6  rounded">
                            <button> Edit</button>
                            </Link>   
                            <Link to={`/news/${comment.news_id}`} className=" w-1/3 flex ml-auto text-white bg-gray-400 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded">
                                <button>Detail</button>
                            </Link>
                                         
                            <button onClick={() => deleteNewsComment(comment.id)} className=" w-1/3 flex ml-auto text-white bg-red-400 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded"> Delete</button>
                            </div>
                        </td>
                        
                        
                    </tr>
                    ))}
                    
                </tbody>
            </table>
        </div>
        )}
       {showCatComments && (
        <div  id="table3-content hidden"   className='container mx-auto px-4  flex flex-col items-center lg:overflow-auto overflow-x-scroll'>
        <h2 className="font-heading my-8 font-bold tracking-tight text-gray-900  text-xl sm:text-3xl">Comment to cats </h2>
        
        <table className="w-full"> 
                <thead>
                    <tr>
                    <th className="px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100">#No</th>
                    <th className="px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100">ID</th>
                    <th className="px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100">Text</th>
                    <th className="px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100">Created date</th>  
                    <th className="px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100">Author</th>
                    <th className="w-10 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100">Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {catComment.map((comment, index) =>(
                    <tr key={comment.id}>
                        <td className="px-4 py-3">{index + 1}</td>
                        <td className="px-4 py-3">{comment.id}</td>
                        <td className="px-4 py-3">{comment.text}</td>
                        <td className="px-4 py-3">{comment.createdAt}</td>
                        
                        <td className="px-4 py-3">{comment.author_name}</td>
                        <td className="w-10 text-center">
                            <div className="container flex flex-col md:flex-row items-center">
                            <Link  className=" w-1/3 flex ml-auto text-white  border-0 py-2 px-6  rounded">
                            <button>Edit</button>
                            </Link>   
                            <Link to={`/catalog/${comment.animal_id}`} className=" w-1/3 flex ml-auto text-white bg-gray-400 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded">
                                <button>Detail</button>
                            </Link>
                                        
                            <button onClick={() => deleteCatComment(comment.id)} className=" w-1/3 flex ml-auto text-white bg-red-400 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded"> Delete</button>
                            </div>
                        </td>
                        
                        
                    </tr>
                    ))}
                    
                </tbody>
            </table>
        </div>
         )}
        {showAnimals && (
        <div  id="table4-content hidden"   className='container mx-auto px-4  flex flex-col items-center lg:overflow-auto overflow-x-scroll'>
        <h2 className="font-heading my-8 font-bold tracking-tight text-gray-900  text-xl sm:text-3xl"> Cats list</h2>
        
        <table className="w-full"> 
                <thead>
                    <tr>
                    <th className="px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100">#No</th>
                    <th className="px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100">ID</th>
                    <th className="px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100">Name</th>
                    <th className="px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100">Sex</th>
                    <th className="px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100">From</th>
                    <th className="px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100">Created</th>
                    <th className="px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100">Vaccine</th>
                    <th className="px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100">Place now</th>
                    <th className="px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100">Phone</th>
                    <th className="w-10 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100">Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {Animals.map((animal, index) =>(
                    <tr key={animal.id}>
                        <td className="px-4 py-3">{index + 1}</td>
                        <td className="px-4 py-3">{animal.id}</td>
                        <td className="px-4 py-3">{animal.name}</td>
                        <td className="px-4 py-3">{animal.sex}</td>
                        <td className="px-4 py-3">{animal.from_place}</td>
                        <td className="px-4 py-3">{animal.created_date}</td>
                        <td className="px-4 py-3">{animal.vaccine}</td>
                        <td className="px-4 py-3">{animal.place_now}</td>
                        <td className="px-4 py-3">{animal.owner_phone}</td>
                        <td className="w-10 ">
                            <div className=" flex flex-col md:flex-row items-center justify-start gap-1">
                            
                            <Link to={`/catalog/${animal.id}`} className="w-full md:w-1/2 flex  text-white bg-gray-400  py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded">
                                <button>Detail</button>
                            </Link>
                         {/*

                            <Link to={`//${animal.id}`} className=" w-full md:w-1/3 flex ml-auto text-white bg-green-400 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded">
                            <button>Edit</button>
                            </Link>      
                    */}
                            <button onClick={() => deleteCat(animal.id)} className=" w-full md:w-1/2 flex  text-white bg-red-400  py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded"> Delete</button>
                            </div>
                        </td>
                        
                    </tr>
                    ))}
                    
                </tbody>
            </table>
        </div>
        )}
    </section>
        
        </>
    )
}