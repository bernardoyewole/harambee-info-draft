import Navbar from "./Navbar";

const Hero = () => {
    return (
        <section className="h-[80%]">
            <div className="bg-hero bg-cover h-full">
                <div className="bg-black/40 h-full">
                    <div className="my-container h-full">
                        <Navbar />
                        <section className="h-[calc(100%-80px)] flex items-center justify-center">
                            <div className="text-center text-white">
                                <h1 className="text-4xl font-bold">
                                    Building <span>Communities</span> for <span>Child Care</span>
                                </h1>
                                <p className="text-lg mt-4">
                                    Connect, collaborate, and support each other with a point-based system for child-minding.
                                </p>
                                <button className="mt-6 px-6 py-4 bg-yellow-500 font-semibold text-white rounded">
                                    Learn More
                                </button>
                            </div>
                        </section>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
