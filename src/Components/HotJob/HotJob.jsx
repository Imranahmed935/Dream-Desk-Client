import { IoLocationOutline } from "react-icons/io5";
import { Link } from "react-router-dom";

const HotJob = ({ job }) => {
  const {
    _id,
    company_logo,
    title,
    company,
    salaryRange,
    location,
    requirements,
    description,
  } = job;

  return (
    <div className="card bg-base-100 border p-4 flex flex-col justify-between">
      {/* Company Logo and Info */}
      <div className="flex items-center gap-4">
        <figure>
          <img src={company_logo} alt="Company Logo" className="w-16" />
        </figure>
        <div>
          <h1 className="font-bold">{company}</h1>
          <p className="flex items-center gap-2">
            <IoLocationOutline />
            {location}
          </p>
        </div>
      </div>

      {/* Job Details */}
      <div className="py-4">
        <h2 className="font-bold flex gap-2 items-center">
          {title}
          <div className="badge badge-secondary">NEW</div>
        </h2>
        <p className="text-sm text-gray-600">{description}</p>

        {/* Requirements */}
        <div className="flex flex-wrap gap-2 py-2">
          {requirements.map((data, index) => (
            <h1 key={index} className="border rounded-md px-3 py-1 text-sm">
              {data}
            </h1>
          ))}
        </div>
      </div>

      {/* Salary and Actions */}
      <div>
        <div className="flex items-center justify-between">
          <p className="text-sm font-medium">
            Salary: ${salaryRange.min} - ${salaryRange.max} {salaryRange.currency}
          </p>
        </div>
        <div className="card-actions justify-end mt-4">
          <Link to={`/details/${_id}`}>
            <button className="btn bg-blue-500 text-white w-full">Apply</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HotJob;
