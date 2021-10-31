import React, { useEffect, useState } from 'react';
import Card from '../Card/Card';


const AllServices = () => {

    const [service, setService] = useState([]);

    useEffect(() => {
        fetch('https://scary-vault-39957.herokuapp.com/allServices')
            .then(res => res.json())
            .then(data => setService(data))
    }, [])

    return (
        <div>

            <div className=" p-5">
                <h2 className="text-center mb-4 text-danger">Our Services</h2>
                <div className="container">
                    <div className="row row-cols-lg-3">
                        {
                            service?.map(service => <Card service={service}></Card>)
                        }
                    </div>
                </div>
            </div>

        </div>
    );
};

export default AllServices;