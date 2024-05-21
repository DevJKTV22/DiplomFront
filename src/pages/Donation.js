import React from 'react';

import AddDonation from '../actions/AddDonation';

export default function Donation() {
    

    return(
        <div className=" 2xl:px-8">
            <div className="bg-donation bg-cover ">
                <section id="login" className="p-4 flex flex-col justify-center min-h-screen max-w-md mx-auto lg:ml-36">
                <AddDonation/>
                </section>
            </div>
        </div>
        );
    }