import React from 'react';
import Form from '../../components/Form/Form';
import DetailsPage from '../../components/DetailsPage/DetailsPage';

const Home = () => {
    return (
        <div className='drop-shadow-xl bg-slate-200 lg:flex lg:justify-around mt-20 xl:p-20 px-5 py-20 mx-10'>
        <Form/>
        <DetailsPage/>
        </div>
    );
};

export default Home;