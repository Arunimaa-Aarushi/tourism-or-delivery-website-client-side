import React from 'react';
import img1 from './client1.jpeg';
import img2 from './client2.jpeg';
import img3 from './client3.jpeg';

const Clients = () => {
    return (
        <div className="p-5">
            <div className="container">
                <h2 className="text-center mb-4 text-danger">Our Clients</h2>
                <div className="row row-cols-lg-3 row-cols-md-2 row-cols-sm-1">
                    <div className="col">
                        <div className="card h-100 shadow-lg border-1">
                            <img height="200px" src={img1} className="card-img-top" alt="..." />
                                <div  className="card-body">
                                <h5 className="card-title">Alen Marken</h5>
                                <p>I have been with Fast City Courier service for more than a decade. Their service always surprise me. They have never been late . I would like stick with them also in the future.</p>
                                </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="card h-100 shadow-lg border-1">
                            <img height="200px" src={img2} className="card-img-top" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title"> Samira Sans</h5>
                                <p>I have been with Fast City Courier service for more than a decade. Their service always surprise me. They have never been late . I would like stick with them also in the future.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="card h-100 shadow-lg border-1">
                            <img height="200px" src={img3} className="card-img-top" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title">Jign Postine</h5>
                                <p>I have been with Fast City Courier service for more than a decade. Their service always surprise me. They have never been late . I would like stick with them also in the future.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Clients;