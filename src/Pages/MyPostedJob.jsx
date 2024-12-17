import React, { useEffect, useState } from "react";
import useAuth from "../hooks/useAuth";
import { Link } from "react-router-dom";

const MyPostedJob = () => {
  const { user } = useAuth();
  const [post, setPost] = useState([]);
  useEffect(() => {
    fetch(`https://dream-desk-server.vercel.app/jobs?email=${user.email}`)
      .then((res) => res.json())
      .then((data) => setPost(data));
  }, []);
  return (
    <div>
      <h1>My posted jobs here :{post.length}</h1>
      <div className="overflow-x-auto">
        <table className="table">
          <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th>Job</th>
              <th>Application</th>
            </tr>
          </thead>
          <tbody>
            {
                post.map((m, index)=> <tr key={m._id}>
            
                    <th>{index+1}</th>
                    <td>{m.title}</td>
                    <td>{m.jobType}</td>
                    <td>
                        <Link to={`/viewApplication/${m._id}`}>
                        <button className="btn btn-link">view application</button>
                        </Link>
                    </td>
                  </tr>)
            }
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyPostedJob;
