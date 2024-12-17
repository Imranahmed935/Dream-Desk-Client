import { useParams } from "react-router-dom";
import useAuth from "../../hooks/useAuth";

const JobApply = () => {
    const {user} = useAuth();
    const {id} = useParams();

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const phone = form.phone.value;
    const position = form.position.value;
    const resume = form.resume.value;
    const coverLetter = form.coverLetter.value;
    const jobApplication = {
        job_id:id,
        user_email:user.email,
        name,
        phone,
        position,
        resume,
        coverLetter
    }
    fetch('https://dream-desk-server.vercel.app/jobs-applications',{
        method:'POST',
        headers:{
            "content-type":"application/json"
        },
        body: JSON.stringify(jobApplication)
    })
    .then(res => res.json())
    .then(data =>{
        if(data.insertedId){
            alert('added successfully')
        }
    })
  };

  return (
    <div className="max-w-xl mx-auto bg-gradient-to-r from-blue-100 to-blue-300 p-8 shadow-lg rounded-lg">
      <h1 className="text-3xl font-extrabold text-center text-blue-800 mb-8">
        Job Application
      </h1>
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="flex flex-col">
          <label htmlFor="name" className="mb-2 font-semibold text-blue-900">
            Full Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            placeholder="Enter your full name"
            className="border border-gray-300 p-3 rounded-md focus:outline-none focus:ring-4 focus:ring-blue-400 hover:bg-blue-50 transition"
            required
          />
        </div>
        {/* <div className="flex flex-col">
          <label htmlFor="email" className="mb-2 font-semibold text-blue-900">
            Email Address
          </label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Enter your email"
            className="border border-gray-300 p-3 rounded-md focus:outline-none focus:ring-4 focus:ring-blue-400 hover:bg-blue-50 transition"
            required
          />
        </div> */}
        <div className="flex flex-col">
          <label htmlFor="phone" className="mb-2 font-semibold text-blue-900">
            Phone Number
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            placeholder="Enter your phone number"
            className="border border-gray-300 p-3 rounded-md focus:outline-none focus:ring-4 focus:ring-blue-400 hover:bg-blue-50 transition"
            required
          />
        </div>
        <div className="flex flex-col">
          <label
            htmlFor="position"
            className="mb-2 font-semibold text-blue-900"
          >
            Position Applied For
          </label>
          <input
            type="text"
            id="position"
            name="position"
            placeholder="Enter the position name"
            className="border border-gray-300 p-3 rounded-md focus:outline-none focus:ring-4 focus:ring-blue-400 hover:bg-blue-50 transition"
            required
          />
        </div>
        <div className="flex flex-col">
          <label htmlFor="resume" className="mb-2 font-semibold text-blue-900">
            Upload Resume
          </label>
          <input
            type="file"
            id="resume"
            name="resume"
            className="border border-gray-300 p-3 rounded-md focus:outline-none focus:ring-4 focus:ring-blue-400 hover:bg-blue-50 transition"
            required
          />
        </div>
        <div className="flex flex-col">
          <label
            htmlFor="coverLetter"
            className="mb-2 font-semibold text-blue-900"
          >
            Cover Letter
          </label>
          <textarea
            id="coverLetter"
            name="coverLetter"
            placeholder="Write your cover letter here"
            rows="5"
            className="border border-gray-300 p-3 rounded-md focus:outline-none focus:ring-4 focus:ring-blue-400 hover:bg-blue-50 transition"
          ></textarea>
        </div>
        <button
          type="submit"
          className="w-full bg-blue-600 text-white font-bold p-4 rounded-md hover:bg-blue-700 transition"
        >
          Submit Application
        </button>
      </form>
    </div>
  );
};

export default JobApply;
