import React from 'react';
import Loader from "../../assets/Loading.gif";

const Spinner = () => {
    return (
        <div className='h-screen flex justify-center items-center'>
            <img src={Loader} alt="LoaderImg" />
        </div>
    );
};

export default Spinner;