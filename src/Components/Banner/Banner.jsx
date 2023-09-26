

const Banner = () => {
    return (
        <div className=" mt-6">
            <div className="hero h-[70vh]">
                <div className="hero-overlay bg-opacity-60"></div>
                <div className=" flex flex-col gap-8">
                    <div className=" max-w-5xl">
                    <h1 className=" text-black text-4xl font-serif font-medium">I Grow By Helping People In Need</h1>
                    </div>
                    <div className="flex">
                    <input type="text" placeholder="Type here" className="py-2 w-full rounded-s-lg ps-2" /><button className=" text-center text-white text-xl bg-red-600 px-4 py-2 rounded-e-lg">Search</button>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Banner;