import CategoryCard from "./CategoryCard";

function CategorySection() {
    return (
        <div className="mx-auto w-[90%] md:w-[78%] grid grid-flow-col grid-col-1 md:grid-col-3 md:gap-[40px] py-[30px] md:py-[80px]">
            <CategoryCard/>
        </div>
    );
}

export default CategorySection;