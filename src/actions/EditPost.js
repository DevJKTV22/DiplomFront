import React from 'react';
import axios from'../middleware/axios';
import { useNavigate, useParams } from 'react-router-dom';


export default function EditPost(){
    const [categories, setCategory] = React.useState([]);
    React.useEffect(() =>{
        const getCategory = async () => {
            const response = await axios.get(`https://diplomback-f1217ff0e554.herokuapp.com/categories`);
            setCategory(response.data);
        };
        getCategory();
    },[]);

    const [title, setTitle]=React.useState('');
    const [news_text,setNews_text]=React.useState('');
    const [file, setFile]=React.useState('');
    const [oldImage, setOldImage]=React.useState('');
    const [categoryId, setCategoryId]=React.useState(0);

    const [image,setImage] = React.useState ({preview: '', data: ''});
    const handleFileChange = (e)=>{
        const img ={
            preview: URL.createObjectURL(e.target.files[0]),
            data: e.target.files[0],
        };
        setImage(img);
        setFile(img.data.name);
    };
    const navigate = useNavigate();
    const {id} = useParams();
    React.useEffect(() =>{
        const getPostById = async () =>{
            const response = await axios.get(`https://diplomback-f1217ff0e554.herokuapp.com/posts/${id}`);
            setTitle(response.data.title);
            setNews_text(response.data.news_text);
            setFile(response.data.photo);
            setOldImage(response.data.photo);
            setCategoryId(response.data.categoryId);
        };
        getPostById();
    },[id]);

    const updatePost =async (e)=> {
        e.preventDefault();
        await axios.patch(`https://diplomback-f1217ff0e554.herokuapp.com/posts/${id}`,{
            title:title,
            news_text: news_text,
            category_id: categoryId,
            photo: file,
        });

        let formData = new FormData();
        formData.append('file',image.data);
        await fetch(`https://diplomback-f1217ff0e554.herokuapp.com/image`,{
            method: 'POST',
            body: formData,
        });

        navigate('/postlist');
    };
    return (
       

    
<section className='w-full flex flex-col items-center border h-screen' >
<div className="container  flex flex-col items-center px-4">
  <h1 className="font-heading my-8 font-bold tracking-tight text-gray-900  text-3xl sm:text-5xl">Edit post</h1>
  <div className="  w-full md:w-11/12 xl:w-1/2">
    <form onSubmit={updatePost} className="bg-gray-100 p-4 shadow-md w-full">
    
      
      <div className="mb-4">
        <label className="block text-gray-700 font-bold mb-2" htmlFor="category">Category</label>
        <select className="shadow appearance-none border w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                      id="category" value={categoryId} onChange={(e) => setCategoryId(Number(e.target.value))}>
                      {categories.map((data) => (
                          <option value={data.id} key={data.id} className="p-2">
                              {data.name}
                          </option>
                      ))}
                  </select>
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 font-bold mb-2" htmlFor="title">Title</label>
        <input className="shadow appearance-none border w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="title"
         
          type="text"
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}/>
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 font-bold mb-2" htmlFor="text">Text</label>
        <textarea className="shadow appearance-none border w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
           id="description"
           rows={3}
           
           value={news_text}
           onChange={(e) => setNews_text(e.target.value)}></textarea>
      </div>
      <div className="">
            <div className="w-full  mb-4 flex flex-col md:flex-row md:justify-between ">
                <div className="w-1/2">
                    <div className="h-8 ">
                        <input className=" w-full"  id="file"type="file"filename={file} onChange={handleFileChange}  /> 
                    </div>
                    <div className="w-full " id="imagePreview">
                        {image.preview && 
                            <img className=" object-scale-downw-full h-full" id="preview" src={image.preview} alt="Preview" />
                        }
                    </div>
                
                    
                </div>
                <div className="w-1/2 ">
                    <div className="h-8  flex items-center">
                        <label htmlFor="oldImage" className="    text-md ">Old image</label>
                    </div>
                    <div>
                    <img
                            className="mr-3 img-thumbnail w-full h-full object-scale-down"
                            src={`/images/${oldImage}`}
                            alt="logo"
                            width={100}
                        />
                    </div>
                    
                </div>

            </div>
       

        </div>
        
          
                   
         
      <div className="w-full flex justify-between">
      <button className="inline-block bg-primary px-6 pt-2.5 pb-2 text-xs font-medium uppercase leading-normal shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]"
        type="submit" >Submit</button>
         <a href="/postlist" className="inline-block bg-primary px-6 pt-2.5 pb-2 text-xs font-medium uppercase leading-normal shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]">Posts List</a>
 
      </div>
        </form>
  </div>
</div>
</section>

    );

}
