import React from "react";
import { useLoaderData } from "react-router-dom";

const ViewApplication = () => {
  const applicationData = useLoaderData();
  const handleStatus = (e, _id)=>{
    const data = {
        status:e.target.value
    }
    fetch(`https://dream-desk-server.vercel.app/jobs-applications/${_id}`,{
      method:'PATCH',
      headers:{
        "content-type":"application/json"
      },
      body: JSON.stringify(data)
    })
    .then(res => res.json())
    .then(data=>{
      if(data.modifiedCount){
        alert('updated successfully')
      }
    })
  }
  
  return (
    <div>
      <h1>Application details:{applicationData.length}</h1>
      <div className="overflow-x-auto">
        <table className="table">
          <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th>email</th>
              <th>position</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {applicationData.map((application, index) => (
              <tr key={application._id}>
                <th>{index + 1}</th>
                <td>{application.name}</td>
                <td>{application.user_email}</td>
                <td>{application.position}</td>
                <td>
                  <select 
                  onChange={(e)=>handleStatus(e, application._id)}
                  defaultValue={application.status || 'Change status'}
                  className="select select-bordered select-xs w-full max-w-xs">
                    <option disabled>
                    Change status
                    </option>
                    <option>under review</option>
                    <option>Hired</option>
                    <option>Rejected</option>
                  </select>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ViewApplication;
