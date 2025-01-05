import inspiration from '/images/inspiration.jpg';

const About = () => {
  return (
    <section id="about" className="bg-[#F9FBFC] py-10">
      <div className="my-container flex gap-10 py-6 items-center">
        <div className='w-[50%]'>
          <img src={inspiration} className='rounded-full' />
        </div>
        <div className='w-[50%]'>
          <h2 className="text-[40px] leading-[1] pb-2 font-semibold">Our <span className='text-purple-700'>story,</span></h2>
          <h2 className="text-[40px] leading-[1] font-semibold">your <span className='text-purple-700'>inspiration</span></h2>
          <p className="my-6 text-gray-600 leading-[2]">
            Our mission is to connect families seeking community-based child-minding support through a trusted and collaborative platform.
            Using a point-based rewards system, families can provide and receive assistance while fostering meaningful relationships.
          </p>
          <button className="px-6 py-4 bg-yellow-500 text-white font-semibold rounded">
            Read More
          </button>
        </div>
      </div>
    </section>
  );
};

export default About;
