import React from 'react';
import Banner from '../Banner/Banner';
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';
import Message from '../Message/Message';
import Clients from '../Clients/Clients';
import AllServices from '../AllServices/AllServices';

const Home = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Banner></Banner>
            <Clients></Clients>
            <AllServices></AllServices>
            <Message></Message>
            <Footer></Footer>
        </div>
    );
};

export default Home;