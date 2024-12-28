import AppointmentModal from "../AppointmentModal/AppointmentModal"

const Blog = () => {
    return (
      <div className="bg-gray-100 py-10 px-5 md:px-20">
        <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
          <div className="px-6 py-8">
          <div className="text-center my-8">
          <h1 className="text-4xl font-bold text-gray-800 md:text-4xl lg:text-5xl relative inline-block">
            Blog/Updates
            <span className="block h-1 w-16 bg-primary mt-2 mx-auto"></span>
          </h1>
        </div>
            <div className="text-gray-700 space-y-6">
              <div>
                <h2 className="text-xl font-semibold text-primary mb-2">
                Stay Informed
                </h2>
                <p className="leading-relaxed">
                Read expert articles on orthopaedic health, exercise tips, and success stories from our patients.
                </p>
              </div>
              <div>
                <h2 className="text-xl font-semibold text-primary mb-2">
                Upcoming Events
                </h2>
                <ul className="list-disc pl-5 space-y-2">
                  <li>Free Orthopaedic Camp: [Date & Details]</li>
                  <li>Seminar on Joint Health: [Date & Details]</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="flex justify-center items-center py-6">
          <AppointmentModal />
        </div>
        </div>
      </div>
    );
  };
  
  export default Blog;
  
  
  