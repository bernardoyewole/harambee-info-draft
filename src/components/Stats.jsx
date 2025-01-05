const AppShowcaseStats = () => {
    return (
        <div className=" text-gray-800 h-[160px] bg-[#f3f7f9] flex items-center">
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
                <div>
                    <h2 className="text-4xl font-bold">10K+</h2>
                    <p className="text-md mt-2">Families Connected</p>
                </div>
                <div>
                    <h2 className="text-4xl font-bold">5K+</h2>
                    <p className="text-md mt-2">Trusted Networks Built</p>
                </div>
                <div>
                    <h2 className="text-4xl font-bold">50K+</h2>
                    <p className="text-md mt-2">Child-Minding Hours Exchanged</p>
                </div>
                <div>
                    <h2 className="text-4xl font-bold">1M+</h2>
                    <p className="text-md mt-2">Coins Exchanged</p>
                </div>
            </div>
        </div>
    );
};

export default AppShowcaseStats;
