import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import useAuth from '../Hooks/useAuth';
import Navbar from '../Navbar/Navbar';

const Booking = () => {

    const {user} = useAuth();
    const {id} = useParams();
    const [book, setBook] = useState({});

    const [name, setUsername] = useState('');
    const [email, setUseremail] = useState('');
    const [useraddress, setAddress] = useState('');
    const [regDate, setDate] = useState('');

    useEffect(() =>{
        fetch(`https://scary-vault-39957.herokuapp.com/booking/${id}`)
        .then(res => res.json())
        .then(data => setBook(data))
    }, [])


    const handleRegister = (e) =>{
        e.preventDefault();
        const name = user.displayName;
        const email = user.email;
        const address = useraddress;
        const date = regDate
        const title = book.name;
        const charge = book.charge;
        const status = 'Pending';

        const bookService = {name, email, date, address, title, charge, status};

        fetch("https://scary-vault-39957.herokuapp.com/booking", {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(bookService)
        })
        .then(res => res.json())
        .then(data => {
            if(data.acknowledged){
                alert("Booking Successful!");
                e.target.reset();
            }
        })
        
}

    return (
        <div>
            <div className="booking-area">
                <Navbar />
                <div className="row mt-3 d-flex align-items-center justify-conten-center">
                    <div className="col-lg-6 col-md-6 col-sm-12">
                        <img width="100%" src={book.img} alt="" /><br />
                        <h3>{book.name}</h3>
                        <p>{book.description}</p>
                    </div>
                    <div className="col-lg-6 col-md-6 col-sm-12">


                    <div className="form">
                        <form onSubmit={handleRegister}>
                            <input onBlur={(e) => setUsername(e.target.value)} type="text" placeholder="Full Name" defaultValue={user.displayName} required /><br /><br />
                            <input onBlur={(e) => setUseremail(e.target.value)} type="email" placeholder="Email" defaultValue={user.email} required /><br /><br />
                            <input type="text" placeholder="Service title" defaultValue={book.name} /><br /><br />
                            <input onBlur={(e) => setDate(e.target.value)} type="date" placeholder="Date" /><br /><br />
                            <input onBlur={(e) => setAddress(e.target.value)} type="text" placeholder="Address" required /><br /><br />
                            <input type="number" placeholder="Delivery Charge" defaultValue={book.charge} /><br /><br />
                        <button className="btn addBtn" type="submit">Submit</button>
                        </form>
                    </div>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Booking;