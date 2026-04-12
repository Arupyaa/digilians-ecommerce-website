import CategorySection from "../components/CategorySection";
import Header from "../components/Header";
import Hero from "../components/Hero";
import ProductSection from "../components/ProductSection";

function Home() {
    return (
        <>
            <Header />
            <Hero />
            <CategorySection/>
            <ProductSection productCount={6} productRow={2} productCategory="case"/>
        </>
    )
}

export default Home;