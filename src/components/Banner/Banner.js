import React from 'react';
import './Banner.css';


const Banner = () => {
    return (
        <div className="banner">
            <div className="container">
                <div className="row d-flex align-items-center justify-content-center">
                    <div className="col-lg-4 col-md-4 col-sm-12 text-light">
                        <div className="intro">
                            <h1>WELCOME TO OUR
                                <h1 className="span"> FAST CITY COURIER SERVICE!</h1></h1>
                            <p>
                                Fast City Courier Service is an international courier service that provides OBC services Directly with india as well as international for transit important and time-sensitive documents and parcels around the world, door-to-door, within committed transit times that meet your needs and expectations. Our International Express service is available with the ability to track shipments at anytime of the day through our advanced online tracking system available.
                            </p>
                        </div>
                    </div>
                    <div className="col-lg-6 col-md-6 col-sm-12">
                        <img src="https://www.fastcourierservicebd.com/wp-content/uploads/2020/11/air-freight-courier-service-500x500-1.jpeg" alt="" />
                    </div>
                </div>

            </div>

        </div>
    );
};

export default Banner;