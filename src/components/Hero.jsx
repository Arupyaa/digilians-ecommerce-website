import heroImage from "../assets/hero-image.avif"
function Hero() {
    return (
        <div className="mx-auto w-[90%] md:w-[78%] grid grid-flow-col grid-rows-2 md:grid-rows-3 md:gap-[40px] py-[30px] md:py-[80px]">
            <div className="md:row-span-3 self-center order-2 md:order-1">
                <h1 className="text-6xl font-bold mb-4">Build the <span className="text-blue-500">Machine</span> You Deserve.</h1>
                <p>From processors to peripherals, we stock every component you need to build, upgrade, or customize your perfect PC — with expert picks, fast shipping, and prices that don't require a second mortgage.</p>
                <button className="mt-3 md:mt-5 text-blue-500 bg-transparent border border-blue-500 hover:bg-blue-500 hover:text-white focus:ring-4 focus:ring-blue-200 font-medium leading-5 rounded-md text-sm px-4 py-2.5 focus:outline-none">Explore products</button>
            </div>
            <div className="md:row-span-3 col-span-2 order-1 md:order-2">
                <img src={heroImage} alt="GPU hero image" className=" aspect-[3/2] min-w-[300px] rounded-md" />
            </div>
        </div>
    );
}

export default Hero;