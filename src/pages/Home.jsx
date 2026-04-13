import CategorySection from "../components/CategorySection";
import FeaturedProducts from "../components/FeaturedProducts";
import Hero from "../components/Hero";

function Home() {
    const rows = 2;
    const count = 6;
    return (
        <>
            <Hero />
            <CategorySection/>
            <FeaturedProducts productCount={count} productRow={rows}/>
        </>
    )
}

export default Home;