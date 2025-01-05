import React from 'react';

const CommunityBenefits = () => {
  return (
    <div className="bg-[#f3f7f9] py-16">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-8">Community <span className='text-purple-700'>Benefits</span></h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {/* Benefit 1 */}
          <div className="flex items-start bg-white shadow-md rounded-lg p-6">
            <div className="text-blue-600 text-4xl mr-4">
              <i className="fas fa-dollar-sign"></i> {/* Replace with an icon */}
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-2">
                Cost-effective and Flexible Services
              </h3>
              <p className="text-gray-600">
                Save money with an innovative point-based system while ensuring flexible child-minding services.
              </p>
            </div>
          </div>

          {/* Benefit 2 */}
          <div className="flex items-start bg-white shadow-md rounded-lg p-6">
            <div className="text-blue-600 text-4xl mr-4">
              <i className="fas fa-coins"></i> {/* Replace with an icon */}
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-2">
                Earn and Redeem Tokens
              </h3>
              <p className="text-gray-600">
                Foster collaboration by earning tokens for services provided, redeemable for support from others.
              </p>
            </div>
          </div>

          {/* Benefit 3 */}
          <div className="flex items-start bg-white shadow-md rounded-lg p-6">
            <div className="text-blue-600 text-4xl mr-4">
              <i className="fas fa-users"></i> {/* Replace with an icon */}
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-2">
                Strengthened Community Ties
              </h3>
              <p className="text-gray-600">
                Build lasting relationships through mutual support and shared values.
              </p>
            </div>
          </div>

          {/* Benefit 4 */}
          <div className="flex items-start bg-white shadow-md rounded-lg p-6">
            <div className="text-blue-600 text-4xl mr-4">
              <i className="fas fa-comments"></i> {/* Replace with an icon */}
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-2">
                Parenting Resources and Discussions
              </h3>
              <p className="text-gray-600">
                Gain access to parenting resources and participate in active community discussions.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CommunityBenefits;
