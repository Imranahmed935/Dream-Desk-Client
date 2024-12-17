import React from "react";
import { Link, useLoaderData } from "react-router-dom";

const ViewDetails = () => {
  const {
    _id,
    company_logo,
    title,
    company,
    salaryRange,
    location,
    requirements,
    description,
    hr_email,
    hr_name,
    jobType,
    responsibilities,
    status,
    category,
    applicationDeadline,
  } = useLoaderData();

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Header Section */}
      <div className="flex items-center gap-4 border-b pb-4 mb-6">
        <img
          src={company_logo}
          alt={company}
          className="w-20 h-20 rounded-md"
        />
        <div>
          <h1 className="text-2xl font-bold">{title}</h1>
          <p className="text-gray-600">{company}</p>
          <p className="text-sm text-blue-500">{location}</p>
        </div>
      </div>

      {/* Job Details */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
        <div>
          <h2 className="text-xl font-semibold mb-4">Job Description</h2>
          <p className="text-gray-700 mb-4">{description}</p>

          <h2 className="text-xl font-semibold mb-4">Responsibilities</h2>
          <ul className="list-disc pl-6 text-gray-700 space-y-2">
            {responsibilities.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>

          <h2 className="text-xl font-semibold mt-6 mb-4">Requirements</h2>
          <ul className="list-disc pl-6 text-gray-700 space-y-2">
            {requirements.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-4">Job Details</h2>
          <div className="space-y-3">
            <p>
              <span className="font-medium">Category:</span> {category}
            </p>
            <p>
              <span className="font-medium">Job Type:</span> {jobType}
            </p>
            <p>
              <span className="font-medium">Salary:</span> ${salaryRange.min} -
              ${salaryRange.max} {salaryRange.currency}
            </p>
            <p>
              <span className="font-medium">Status:</span> {status}
            </p>
            <p>
              <span className="font-medium">Application Deadline:</span>{" "}
              {applicationDeadline}
            </p>
          </div>

          <h2 className="text-xl font-semibold mt-6 mb-4">
            Contact Information
          </h2>
          <p>
            <span className="font-medium">HR Name:</span> {hr_name}
          </p>
          <p>
            <span className="font-medium">HR Email:</span>{" "}
            <a href={`mailto:${hr_email}`} className="text-blue-500 underline">
              {hr_email}
            </a>
          </p>
        </div>
      </div>

      {/* Application Button */}
      <div className="flex justify-center mt-8">
        <Link to={`/jobApply/${_id}`}>
         <button className="btn bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-600 transition-all">
          Apply Now
         </button>
        </Link>
      </div>
    </div>
  );
};

export default ViewDetails;
