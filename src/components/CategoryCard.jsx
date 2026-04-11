import gpuImage from "../assets/gpu.jpg"

function CategoryCard(){
    return(
        <div className="relative w-[360px]">
            <img className="w-full block z-1" src={gpuImage} alt="gpu image" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
            <h3 className="text-white z-10 text-2xl absolute bottom-6 left-10 font-bold">Browse GPUs</h3>
        </div>
    );
}

export default CategoryCard;