import React, { useEffect, useState } from 'react';
import useAuth from '../hooks/useAuth';
import axios from 'axios';
import useSecure from '../hooks/useSecure';

const MyApplications = () => {
    const [data, setData] = useState([]);
    const { user } = useAuth();
    const axiosValueSecure = useSecure();

    axiosValueSecure.get(`/jobs-application?email=${user?.email}`)
    .then(res=>setData(res.data))

    // useEffect(() => {
    //     fetch(`https://dream-desk-server.vercel.app/jobs-application?email=${user?.email}`)
    //         .then(res => res.json())
    //         .then(data => setData(data))
    //         .catch(error => console.error('Error fetching data:', error));
    // }, [user?.email]);

    // axios.get(`https://dream-desk-server.vercel.app/jobs-application?email=${user?.email}`, {withCredentials:true})
    // .then(res=>{
    //     setData(res.data)
    // })
    
    // axios.get(`https://dream-desk-server.vercel.app/jobs-application?email=${user.email}`, {withCredentials:true})
    // .then(res=> setData(res.data))

    return (
        <div className="max-w-6xl mx-auto p-6 bg-white shadow-lg rounded-lg">
            <h1 className="text-2xl font-bold text-center mb-6">My Applications: {data.length}</h1>
            {data.length > 0 ? (
                <table className="table-auto w-full border-collapse border border-gray-300">
                    <thead>
                        <tr className="bg-blue-100">
                            <th className="border border-gray-300 p-3 text-left">Name</th>
                            <th className="border border-gray-300 p-3 text-left">Email</th>
                            <th className="border border-gray-300 p-3 text-left">Phone</th>
                            <th className="border border-gray-300 p-3 text-left">Position</th>
                            <th className="border border-gray-300 p-3 text-left">Title</th>
                            <th className="border border-gray-300 p-3 text-left">Company</th>
                            <th className="border border-gray-300 p-3 text-left">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data.map((application, index) => (
                            <tr key={index} className={index % 2 === 0 ? 'bg-gray-100' : ''}>
                                <td className="border border-gray-300 p-3">{application.name}</td>
                                <td className="border border-gray-300 p-3">{application.user_email}</td>
                                <td className="border border-gray-300 p-3">{application.phone}</td>
                                <td className="border border-gray-300 p-3">{application.position}</td>
                                <td className="border border-gray-300 p-3">{application.title}</td>
                                <td className="border border-gray-300 p-3">{application.company}</td>
                                <td className="border border-gray-300 p-3">
                                    <button className='btn bg-red-600'>Delete</button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            ) : (
                <p className="text-center text-gray-500">No applications found.</p>
            )}
        </div>
    );
};

export default MyApplications;
