import { FaArrowsDownToPeople } from "react-icons/fa6";
import { LuWaypoints } from "react-icons/lu";
import { IoChatbubbleEllipsesOutline } from "react-icons/io5";

import React from 'react';

const Features = () => {
  return (
    <div className="bg-[#f3f7f9] py-16">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-6">
          Why Families <span className="text-purple-600">Trust Our App?</span>
        </h2>
        <p className="text-lg text-gray-700 mb-10">
          Our platform is designed to make child-minding easier, more accessible, and community-focused. Here's how we stand out:
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white rounded-lg p-6">
            <div className="text-yellow-600 text-4xl mb-4 flex justify-center">
              <FaArrowsDownToPeople />
            </div>
            <h3 className="text-xl font-semibold mb-3">Family Matching</h3>
            <p className="text-gray-700">
              Match with families who share your values, parenting styles, and schedules to create trusted support networks.
            </p>
          </div>
          <div className="bg-white rounded-lg p-6">
            <div className="text-yellow-600 text-4xl mb-4 flex justify-center">
              <LuWaypoints />
            </div>
            <h3 className="text-xl font-semibold mb-3">Point-Based System</h3>
            <p className="text-gray-700">
              Earn and redeem points for child-minding services. Help others and receive assistance, all without financial transactions.
            </p>
          </div>
          <div className="bg-white rounded-lg p-6">
            <div className="text-yellow-600 text-4xl mb-4 flex justify-center">
              <IoChatbubbleEllipsesOutline />
            </div>
            <h3 className="text-xl font-semibold mb-3">Chat Functionality</h3>
            <p className="text-gray-700">
              Use the in-app chat to coordinate schedules, share tips, and build stronger community bonds.
            </p>
          </div>
        </div>
        <button className="mt-6 px-6 py-4 bg-yellow-500 font-semibold text-white rounded">
          Download the app
        </button>
      </div>
    </div>
  );
};

export default Features;
