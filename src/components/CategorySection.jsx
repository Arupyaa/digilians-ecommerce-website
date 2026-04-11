import CategoryCard from "./CategoryCard";
import gpuImage from "../assets/gpu.jpg"
import monitorImage from "../assets/monitor.jpg"
import keyboardImage from "../assets/keyboard.jpg"

function CategorySection() {
    return (
        <div className="mx-auto w-[90%] md:w-[78%] grid grid-cols-1 md:grid-cols-3 gap-[20px] md:gap-[40px] py-[30px] md:py-[60px]">
            <CategoryCard backgroundImage={gpuImage} categoryName="Browse GPUs"/>
            <CategoryCard backgroundImage={monitorImage} categoryName="Browse Monitors"/>
            <CategoryCard backgroundImage={keyboardImage} categoryName="Browse PC Accessories"/>
        </div>
    );
}

export default CategorySection;