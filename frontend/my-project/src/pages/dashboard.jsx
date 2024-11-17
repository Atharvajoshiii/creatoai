import React from 'react';
import { FaInstagram, FaFileAlt, FaVideo, FaPrint } from 'react-icons/fa';
import { AiFillAppstore, AiOutlineCloudUpload } from 'react-icons/ai';

const Dashboard = () => {
  return (
    <div className="bg-gray-100 min-h-screen w-full">
      {/* Header Section */}
      <div className="bg-gradient-to-r from-purple-500 to-indigo-500 text-white text-center py-16 w-full">
        <h1 className="text-4xl font-bold mb-4">Discover Droptober</h1>
        <button className="bg-white text-purple-600 px-6 py-2 rounded-full font-medium shadow-lg hover:bg-gray-100">
          See what’s new in Print
        </button>
      </div>

      {/* Icons Section */}
      <div className="flex justify-center gap-6 flex-wrap mt-8 px-0 w-full">
        {[
          { label: 'Logo', icon: <AiFillAppstore /> },
          { label: 'Instagram Post', icon: <FaInstagram /> },
          { label: 'Doc', icon: <FaFileAlt /> },
          { label: 'Video', icon: <FaVideo /> },
          { label: 'Printables', icon: <FaPrint /> },
          { label: 'Upload', icon: <AiOutlineCloudUpload /> },
        ].map((item, index) => (
          <div key={index} className="flex flex-col items-center">
            <div className="bg-gray-200 p-4 rounded-full text-purple-600 text-2xl shadow-lg hover:shadow-xl">
              {item.icon}
            </div>
            <p className="mt-2 text-gray-700 font-medium">{item.label}</p>
          </div>
        ))}
      </div>

      {/* Action Buttons */}
      <div className="flex justify-center gap-4 mt-8 flex-wrap w-full">
        <button className="bg-purple-100 text-purple-600 px-4 py-2 rounded-full shadow-md hover:bg-purple-200">
          Make me an image
        </button>
        <button className="bg-purple-100 text-purple-600 px-4 py-2 rounded-full shadow-md hover:bg-purple-200">
          Write my first draft
        </button>
        <button className="bg-purple-100 text-purple-600 px-4 py-2 rounded-full shadow-md hover:bg-purple-200">
          Resize any design
        </button>
      </div>

      {/* Recent Designs Section */}
      <div className="mt-12 px-4 w-full">
        <h2 className="text-lg font-bold text-gray-700 mb-4">Recent designs</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 w-full">
          {[1, 2, 3, 4].map((item) => (
            <div
              key={item}
              className="bg-white shadow-md rounded-lg overflow-hidden"
            >
              <div className="h-40 bg-gray-200"></div>
              <div className="p-4">
                <h3 className="text-gray-800 font-medium">Design {item}</h3>
                <p className="text-gray-500 text-sm">Subtitle or details</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
