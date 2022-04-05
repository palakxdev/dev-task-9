import React from 'react';
import { Bar, BarChart, CartesianGrid, Legend, Line, LineChart, Tooltip, XAxis, YAxis } from 'recharts';

const Dashboard = () => {
    const data = [
        {
            "id": 1,
            "month": "Mar",
            "investment": 10000,
            "sell": 241,
            "revenue": 10401
        },
        {
            "id": 2,
            "month": "Apr",
            "investment": 20000,
            "sell": 423,
            "revenue": 24500
        },
        {
            "id": 3,
            "month": "May",
            "investment": 50000,
            "sell": 726,
            "revenue": 67010
        },
        {
            "id": 4,
            "month": "Jun",
            "investment": 50000,
            "sell": 529,
            "revenue": 40405
        }
    ];

    return (
        <div>
            <h2 className="text-3xl text-center m-4 text-orange-500">
                This is our dashboard:
            </h2>
            <div className='lg:flex justify-between m-8'>
                <LineChart width={600} height={300} data={data} margin={{ top: 5, right: 20, bottom: 5, left: 0 }}>
                    <Line type="monotone" dataKey="sell" stroke="#8884d8" />
                    <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
                    <XAxis dataKey="month" />
                    <YAxis />
                    <Tooltip />
                </LineChart>

                <BarChart width={600} height={300} data={data}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="month" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Bar dataKey="investment" fill="#8884d8" />
                    <Bar dataKey="revenue" fill="#82ca9d" />
                </BarChart>
            </div>
        </div>
    );
};

export default Dashboard;