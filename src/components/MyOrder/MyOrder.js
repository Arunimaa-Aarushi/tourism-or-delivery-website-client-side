import React, { useEffect, useState } from 'react';
import { Table } from 'react-bootstrap';
import useAuth from '../Hooks/useAuth';
import Navbar from '../Navbar/Navbar';

const MyOrder = () => {

    const { user } = useAuth();
    const [orders, setOrders] = useState([]);

    useEffect(() => {
        fetch(`https://scary-vault-39957.herokuapp.com/orders/${user.email}`)
            .then(res => res.json())
            .then(data => {
                setOrders(data)
            })
    }, [orders, user.email])

    return (
        <div>
            <Navbar />
            <div className="container myOrder">
                <h2 className="text-center my-4">My <span style={{ color: "#ED1C24" }}>Orders</span></h2>
                <Table bordered size="sm" responsive="sm">
                    <thead>
                        <tr>
                            <th>SL.</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Reg. Date</th>
                            <th>Address</th>
                            <th>Service</th>
                            <th>Amount</th>
                            <th>Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            orders?.map((order, index) => <>
                                <tr>
                                    <td>{index}</td>
                                    <td>{order.name}</td>
                                    <td>{order.email}</td>
                                    <td>{order.date}</td>
                                    <td>{order.address}</td>
                                    <td>{order.title}</td>
                                    <td>{order.charge}</td>
                                    <td>{order.status}</td>
                                    <td><button className="btn btn-sm btn-danger">Cancel</button></td>
                                </tr>
                            </>)
                        }
                    </tbody>
                </Table>
            </div>
        </div>
    );
};

export default MyOrder;