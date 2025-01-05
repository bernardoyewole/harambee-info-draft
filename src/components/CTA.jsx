import React from "react";

const CTA = () => {
  return (
    <section className="py-12 text-center">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold">Ready to Join Our Community?</h2>
        <p className="mt-4">Start your journey with us today. Sign up and explore the benefits!</p>
        <a
          href="#contact"
          className="mt-6 inline-block px-8 py-3 bg-white text-blue-600 font-bold rounded hover:bg-gray-100"
        >
          Contact Us
        </a>
      </div>
    </section>
  );
};

export default CTA;
