import React, { useEffect, useState } from 'react';
import HotJob from '../HotJob/HotJob';

const HotJobs = () => {
    const [jobs, setJobs] = useState([]);

    useEffect(()=>{
        fetch('https://dream-desk-server.vercel.app/jobs')
        .then(res => res.json())
        .then(data =>{
            setJobs(data)
        })
    },[])
    return (
        <div>
            <div className='text-center text-3xl font-bold'>Today's hot Jobs</div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 py-10 lg:ml-0 ml-16'>
                {
                    jobs.map(job => <HotJob 
                    key={job._id}
                    job={job}                   
                    ></HotJob>)
                }
            </div>
        </div>
    );
};

export default HotJobs;