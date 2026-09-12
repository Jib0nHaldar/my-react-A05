import BannerImage from '../assets/banner-stack.png'

const Banner = () => {
    return (
        <>
            <section className="flex flex-col items-center justify-center gap-30 py-5 px-6 md:flex-row">
                <div>
                    <h2 className="text-5xl font-bold text-gray-800">Build Your Ideal <br />
                        <span className=" text-transparent bg-clip-text bg-linear-to-r from-[#FF5722] via-[#D81B7E] to-[#7C3AED]">Development Stack</span></h2>

                    <p className='text-gray-600 pt-6 pb-8'>Explore frontend, backend, database, and tooling options, <br />
                        compare them side by side, and put together the stack that fits your <br />
                        next project.</p>
                    <div className="flex gap-4">
                        <button className="bg-linear-to-r from-[#FF5722] to-[#D81B7E] text-white py-3 px-6 rounded-md hover:opacity-90 transition duration-300">Explore Technologies</button>
                        <button className="border border-[#FF5722] text-[#FF5722] py-3 px-6 rounded-md hover:bg-[#FF5722] hover:text-white transition duration-300">Learn More</button>
                    </div>
                </div>

                <div className="flex gap-4 items-center mt-8">
                    <img src={BannerImage} alt="Banner" className="w-120 h-110 mt-8 mx-auto" />
                </div>
            </section>
        </>

    )
}

export default Banner;