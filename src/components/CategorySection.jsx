import CategoryCard from "./CategoryCard";
import gpuImage from "../assets/gpu.jpg"
import monitorImage from "../assets/monitor.jpg"
import keyboardImage from "../assets/keyboard.jpg"

function CategorySection() {
    return (
        <div className="mx-auto w-[90%] md:w-[78%] flex flex-col md:flex-row gap-[20px] md:gap-[40px] py-[30px] md:py-[60px] md:justify-between">
            <CategoryCard backgroundImage={gpuImage} categoryName="Browse GPUs" category={"gpu"} />
            <CategoryCard backgroundImage={monitorImage} categoryName="Browse Monitors" category={"monitor"} />
            <CategoryCard backgroundImage={keyboardImage} categoryName="Browse PC Accessories" category={"keyboard"} />
        </div>
    );
}

export default CategorySection;