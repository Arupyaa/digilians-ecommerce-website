

function CategoryCard({backgroundImage,categoryName}){
    return(
        <div className="relative w-[400px]">
            <img className="w-full aspect-[5/3] block z-1 rounded-md" src={backgroundImage} alt="gpu image" />
            <div className="absolute rounded-md inset-0 bg-gradient-to-t from-black/70 to-transparent" />
            <h3 className="text-white z-10 text-2xl absolute bottom-6 left-10 font-bold">{categoryName}</h3>
        </div>
    );
}

export default CategoryCard;