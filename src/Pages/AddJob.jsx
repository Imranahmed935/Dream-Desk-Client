import useAuth from "../hooks/useAuth";

const AddJob = () => {
    const {user} = useAuth()
    const handleAddForm = (e)=>{
        e.preventDefault();
        const formData = new FormData(e.target);
        const initialData = Object.fromEntries(formData.entries());
        const {min, max, currency, ...newJob} = initialData
        newJob.salaryRange = {min, max, currency}
        newJob.requirements = newJob.requirements.split(',');
        newJob.responsibilities = newJob.responsibilities.split(',')
        
        fetch('https://dream-desk-server.vercel.app/jobs',{
            method:'POST',
            headers:{
                "content-type":"application/json"
            },
            body: JSON.stringify(newJob)
        })
        .then(res => res.json())
        .then(data =>{
            if(data.insertedId){
                alert('job added')
            }
        })
    }
  return (
    <div className="max-w-4xl mx-auto p-8 bg-white shadow-md rounded-md">
      <h1 className="text-2xl font-bold mb-6">Add Job</h1>
      <form onSubmit={handleAddForm}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-gray-700 font-medium mb-2">
              Title
            </label>
            <input
              type="text"
              name="title"
              className="w-full border border-gray-300 rounded-md p-2"
              placeholder="Job Title"
              required
            />
          </div>
          <div>
            <label className="block text-gray-700 font-medium mb-2">
              Location
            </label>
            <input
              type="text"
              name="location"
              className="w-full border border-gray-300 rounded-md p-2"
              placeholder="Location"
              required
            />
          </div>
          <div>
            <label className="block text-gray-700 font-medium mb-2">
              Job Type
            </label>
            <select
              name="jobType"
              className="w-full border border-gray-300 rounded-md p-2"
              required
            >
              <option value="">Select Job Type</option>
              <option value="Hybrid">Hybrid</option>
              <option value="Remote">Remote</option>
              <option value="On-Site">On-Site</option>
            </select>
          </div>
          <div>
            <label className="block text-gray-700 font-medium mb-2">
              Category
            </label>
            <input
              type="text"
              name="category"
              className="w-full border border-gray-300 rounded-md p-2"
              placeholder="Category"
              required
            />
          </div>
          <div>
            <label className="block text-gray-700 font-medium mb-2">
              Application Deadline
            </label>
            <input
              type="date"
              name="applicationDeadline"
              className="w-full border border-gray-300 rounded-md p-2"
              required
            />
          </div>
          <div>
            <label className="block text-gray-700 font-medium mb-2">
              Salary Range
            </label>
            <div className="flex space-x-2">
              <select
                name="currency"
                className="border border-gray-300 rounded-md p-2 bg-white text-gray-700"
              >
                <option value="bdt">BDT</option>
                <option value="usd">Dollar</option>
                <option value="eur">Euro</option>
                <option value="inr">Rupee</option>
              </select>
              <div className="relative w-full">
                <input
                  type="number"
                  name="min"
                  className="w-full border border-gray-300 rounded-md p-2"
                  placeholder="Min"
                  required
                />
              </div>
              <div className="relative w-full">
                <input
                  type="number"
                  name="max"
                  className="w-full border border-gray-300 rounded-md p-2"
                  placeholder="Max"
                  required
                />
              </div>
            </div>
          </div>

          <div className="col-span-2">
            <label className="block text-gray-700 font-medium mb-2">
              Description
            </label>
            <textarea
              name="description"
              className="w-full border border-gray-300 rounded-md p-2"
              placeholder="Job Description"
              rows="4"
              required
            ></textarea>
          </div>
          <div>
            <label className="block text-gray-700 font-medium mb-2">
              Company
            </label>
            <input
              type="text"
              name="company"
              className="w-full border border-gray-300 rounded-md p-2"
              placeholder="Company Name"
              required
            />
          </div>
          <div>
            <label className="block text-gray-700 font-medium mb-2">
              Requirements (comma-separated)
            </label>
            <input
              type="text"
              name="requirements"
              className="w-full border border-gray-300 rounded-md p-2"
              placeholder="e.g., JavaScript, React"
            />
          </div>
          <div>
            <label className="block text-gray-700 font-medium mb-2">
              Responsibilities (comma-separated)
            </label>
            <input
              type="text"
              name="responsibilities"
              className="w-full border border-gray-300 rounded-md p-2"
              placeholder="e.g., Develop software, Code review"
            />
          </div>
          <div>
            <label className="block text-gray-700 font-medium mb-2">
              HR Email
            </label>
            <input
              type="email"
              name="hr_email"
              defaultValue={user?.email}
              className="w-full border border-gray-300 rounded-md p-2"
              placeholder="HR Email"
              required
            />
          </div>
          <div>
            <label className="block text-gray-700 font-medium mb-2">
              HR Name
            </label>
            <input
              type="text"
              name="hr_name"
              className="w-full border border-gray-300 rounded-md p-2"
              placeholder="HR Name"
              required
            />
          </div>
          <div className="col-span-2">
            <label className="block text-gray-700 font-medium mb-2">
              Company Logo URL
            </label>
            <input
              type="url"
              name="company_logo"
              className="w-full border border-gray-300 rounded-md p-2"
              placeholder="Company Logo URL"
            />
          </div>
        </div>
        <button
          type="submit"
          className="mt-6 bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700"
        >
          Submit Job
        </button>
      </form>
    </div>
  );
};

export default AddJob;
