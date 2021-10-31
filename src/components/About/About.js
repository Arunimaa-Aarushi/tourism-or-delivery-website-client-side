import React from 'react';
import aboutSideImg from './aboutImage.jpeg';
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';

const About = () => {
    return (
        <div>
            <Navbar />
            <div className="container p-5">
                <div className="row d-flex align-items-center">
                    <div className="col-lg-6 col-md-5 col-sm-12">
                        <img className="w-100" src={aboutSideImg} alt="" />
                    </div>
                    <div className="col-lg-6 col-md-6 col-sm-12">
                        <h3>About Us</h3>
                        <p>Fast City Courier Service is a household name to all in Bangladesh for having been the pioneer of Courier and Parcel Services in this country. From the Corporate Clients to the average person all the persons have been availing the services of Fast City Courier Service , consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua .
                            It is reliable and the label is a trustworthy name to all who have taken, taking and will take the services of this Company. The many years of service to the mass and to the corporates have made it the service for all to take.
                        </p>
                    </div>
                </div>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default About;