import { FaArrowRight } from "react-icons/fa6";

const HowItWorks = () => {
  return (
    <div className="py-16">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-8">A Quick <span className='text-purple-700'>Walkthrough</span></h2>
        <div className="flex flex-col md:flex-row items-center md:items-center justify-between">
          {/* Step 1 */}
          <div className="flex flex-col items-center mb-8 md:mb-0">
            <div className="bg-white shadow-md rounded-lg p-6 w-64 text-center">
              <h3 className="text-lg font-semibold mb-4">Register</h3>
              <p className="text-gray-600">
                Sign up and provide basic details, including KYC verification.
              </p>
            </div>
          </div>
          <div className="hidden md:block mt-4 text-gray-500">
            <FaArrowRight className="text-yellow-600 text-2xl" />
          </div>
          {/* Step 2 */}
          <div className="flex flex-col items-center mb-8 md:mb-0">
            <div className="bg-white shadow-md rounded-lg p-6 w-64 text-center">
              <h3 className="text-lg font-semibold mb-4">Setup Profile</h3>
              <p className="text-gray-600">
                Complete your profile with bio, family details, and availability.
              </p>
            </div>
          </div>

          <div className="hidden md:block mt-4 text-gray-500">
            <FaArrowRight className="text-yellow-600 text-2xl" />
          </div>
          {/* Step 3 */}
          <div className="flex flex-col items-center mb-8 md:mb-0">
            <div className="bg-white shadow-md rounded-lg p-6 w-64 text-center">
              <h3 className="text-lg font-semibold mb-4">Get or Provide Help</h3>
              <p className="text-gray-600">
                Request or offer child-minding services, earn and redeem tokens.
              </p>
            </div>
          </div>

          <div className="hidden md:block mt-4 text-gray-500">
            <FaArrowRight className="text-yellow-600 text-2xl" />
          </div>
          {/* Step 4 */}
          <div className="flex flex-col items-center">
            <div className="bg-white shadow-md rounded-lg p-6 w-64 text-center">
              <h3 className="text-lg font-semibold mb-4">Community Chat</h3>
              <p className="text-gray-600">
                Join group discussions and access parenting resources.
              </p>
            </div>
          </div>
        </div>
        <button className="mt-6 px-6 py-4 bg-yellow-500 font-semibold text-white rounded">
          Get Started
        </button>
      </div>
    </div>
  );
};

export default HowItWorks;
