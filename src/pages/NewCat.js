import React from 'react';

import axios from 'axios';

import { useNavigate } from 'react-router-dom';

export default function AddCat({ onCommentAdded }) {
  
  const [name, setName] = React.useState('');
  const [sex, setSex] = React.useState('Male');
  const [age, setAge] = React.useState('1');
  const [created_date, setCreated_date] = React.useState('');
  const [from_place, setFrom_place] = React.useState('');
  const [vaccine, setVaccine] = React.useState('Yes');
  const [place_now, setPlace_now] = React.useState('Shelter');
  const [owner_phone, setOwner_phone] = React.useState('');
  const [file, setFile] = React.useState('');
  const [msg, setMsg] = React.useState('');
  

  const [image, setImage]= React.useState({preview: '',data: ''});
    const handleFileChange = (e) =>{
        const img ={
            preview: URL.createObjectURL(e.target.files[0]),
            data: e.target.files[0],
        };
        setImage(img);
        setFile(img.data.name);

    };

  const navigate = useNavigate();
 
  const saveCat = async (e) => {
    e.preventDefault();

    if (!name || !sex || !age || !created_date || !from_place || !vaccine || !place_now || !owner_phone || !file ) {
        setMsg('Please fill in all fields');
        return;
      }

    try {
      await axios.post(`https://diplomback-f1217ff0e554.herokuapp.com/animal/`, {      
        name:name,
        sex:sex,
        age:age,
        created_date:created_date,
        from_place:from_place,
        vaccine:vaccine,
        place_now:place_now,
        owner_phone:owner_phone,
        photo:file,
      });
      let formData = new FormData();
            formData.append('file', image.data);
            await fetch(`https://diplomback-f1217ff0e554.herokuapp.com/image`, {
                method: `POST`,
                body: formData,
            });

      navigate(`/thx`)
    } catch (error) {
        navigate('/addcat');
    }
  };
  

  return (
    <section className="py-20">  
        <div className="max-w-6xl px-4 mx-auto">
            <form className="flex flex-wrap mb-24 -mx-4">
                <div className="w-full px-4 mb-8 md:w-1/2 md:mb-0">
                    <div className="sticky top-0 z-50 overflow-hidden ">
                        <div className="relative mb-6 lg:mb-10 ">
                            <h1 className="mb-2 text-lg font-semibold">Rehoming Assistance for Beloved Cats</h1>
                            <p>Dear Cat Lovers, <br/>

                                We understand that life's circumstances can change, and sometimes, finding a new loving home for your feline friend becomes a necessity. If you are in the heartbreaking position of needing to rehome your beloved cat, we are here to help facilitate a smooth transition for both you and your furry companion.
                            </p>
                            <br/>
                            <p>
                                Please take a few moments to complete the rehoming form, providing us with essential information about your cat. This information will help us match your feline friend with a suitable adopter who can meet their specific needs and provide a loving environment.
                            </p>
                            <br/>
                            <p>
                                Once you submit the form, our team will review the details and begin the process of finding a suitable new home for your cat. We may reach out for additional information if needed.

                                Thank you for considering the well-being of your cat during this challenging time. Together, we can ensure that your feline friend continues to thrive in a loving and caring environment.
                            </p>
                        </div>
                        <div className="flex-wrap hidden -mx-2 md:flex">
                            <div className="md:w-1/2 p-2 w-1/4 border" >
                                <div id="imagePreview">
                                    {image.preview && <img id="preview" src={image.preview} alt="Preview" />}
                                </div>
                                    <input  type="file" id="imageInput" filename={file}  onChange={handleFileChange}  />   
                            </div>
                            

                        </div>
                            <div className="px-6 pb-6 mt-6 border-t border-gray-300 ">
                            </div>
                    </div>
                </div>                    
                <div className="w-full px-4 md:w-1/2">
                        <div className="lg:pl-20">
                            <div className="mb-6 ">
                              
                                <div className="flex justify-between  ">
                                <label className="mb-2 text-lg font-semibold ">Name:</label> 
                                <input className="max-w-md md:w-1/2 w-1/3 mb-4 text-gray-800 bg-gray-100 text-lg font-semibold placeholder-gray-400" placeholder="Name" type="text"  onChange={(e) => setName(e.target.value)} required />
                                </div>
                                <div className="grid grid-cols-2 gap-4 pb-4 mt-2 mb-4 border-b-2 border-gray-300 lg:grid-cols-3">
                                </div>
                            </div>

                            <div className="mt-6">
                                <div className="flex justify-between">
                                <label className="mb-2 text-lg font-semibold ">Age:</label> 
                                <input className="max-w-md md:w-1/2 w-1/3 mb-4 text-gray-800 bg-gray-100 text-lg font-semibold" value={age} min="0" max="30" placeholder="Age" type="number" onChange={(e) => setAge(e.target.value)} required />
                                </div>
                                <div className="grid grid-cols-2 gap-4 pb-4 mt-2 mb-4 border-b-2 border-gray-300 lg:grid-cols-3">
                                </div>
                            </div>

                            <div className="mt-6">
                                <div className="flex justify-between  ">
                                <label className="mb-2 text-lg font-semibold ">Sex: </label>
                                <select className="max-w-md md:w-1/2 w-1/3 mb-4 text-gray-800 bg-gray-100 text-lg font-semibold" onChange={(e) => setSex(e.target.value)} required >
                                    <option value={sex} selected >Male  </option>
                                    <option value="Female">Female </option>
                                </select>
                                </div>
                                <div className="grid grid-cols-2 gap-4 pb-4 mt-2 mb-4 border-b-2 border-gray-300 lg:grid-cols-3">
                                </div>
                            </div>
                           
                            <div className="mt-6">
                            <div className="flex justify-between  ">
                                <label className="mb-2 text-lg font-semibold ">From: </label> 
                                <input className="max-w-md md:w-1/2 w-1/3 mb-4 text-gray-800 bg-gray-100 text-lg font-semibold placeholder-gray-400" placeholder="From" type="text"  onChange={(e) => setFrom_place(e.target.value)} required /> 
                                </div>
                                <div className="grid grid-cols-2 gap-4 pb-4 mt-2 mb-4 border-b-2 border-gray-300 lg:grid-cols-3">
                                </div>
                            </div>

                            <div className="mt-6">
                                <div className="flex justify-between  ">
                                <label className="mb-2 text-lg font-semibold ">Arrived: </label> 
                                
                                <input className="max-w-md md:w-1/2 w-1/3 mb-4 text-gray-800 bg-gray-100 text-lg font-semibold"   type="date"  onChange={(e) => setCreated_date(e.target.value)} required/> 
                               
                                </div>
                                <div className="grid grid-cols-2 gap-4 pb-4 mt-2 mb-4 border-b-2 border-gray-300 lg:grid-cols-3">
                                </div>
                            </div>
                           
                            <div className="mt-6">
                                <div className="flex justify-between  ">
                                <label className="mb-2 text-lg font-semibold ">Vaccine: </label> 
                                <select className="max-w-md md:w-1/2 w-1/3 mb-4 text-gray-800 bg-gray-100 text-lg font-semibold"  onChange={(e) => setVaccine(e.target.value)} required> 
                                    <option value={vaccine}>Yes</option>
                                    <option value="No" selected >No</option>
                                </select>
                                </div>
                                <div className="grid grid-cols-2 gap-4 pb-4 mt-2 mb-4 border-b-2 border-gray-300 lg:grid-cols-3">
                                </div>
                            </div>

                            <div className="mt-6">
                                <div className="flex justify-between  ">
                                <label className="mb-2 text-lg font-semibold ">Place now: </label>
                                <select className="max-w-md md:w-1/2 w-1/3 mb-4 text-gray-800 bg-gray-100 text-lg font-semibold" onChange={(e) => setPlace_now(e.target.value)} required> 
                                    <option value={place_now} selected>Shelter</option>
                                    <option value="At owner">At owner</option>
                                </select>
                                </div>
                                <div className="grid grid-cols-2 gap-4 pb-4 mt-2 mb-4 border-b-2 border-gray-300 lg:grid-cols-3">
                                </div>
                            </div>

                            <div className="mt-6">
                                <div className="flex justify-between  ">
                                <label className="mb-2 text-lg font-semibold ">Owner phone:</label> 
                                <input className="max-w-md md:w-1/2 w-1/3 mb-4 text-gray-800 bg-gray-100 text-lg font-semibold placeholder-gray-400 " placeholder="+372 454647" type="tel"  onChange={(e) => setOwner_phone(e.target.value)}  required/> 
                                </div>
                                <div className="grid grid-cols-2 gap-4 pb-4 mt-2 mb-4 border-b-2 border-gray-300 lg:grid-cols-3">
                                </div>
                           
                            </div>
                            <div className="mt-6 ">
                                <button onClick={saveCat}  className="w-full px-4 py-2 bg-gray-400 hover:bg-gray-500 shadow  text-lg font-medium uppercase   ">
                                    Register cat
                                </button>
                                <p className='text-red-500 mt-2'>{msg}</p>
                            </div>
                        </div>
                </div>
            </form >  
        </div>
   
    </section>
  );
}