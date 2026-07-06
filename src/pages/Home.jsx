import Hero from "../components/home/Hero";
import TrustBar from "../components/home/TrustBar";
import CategoryList from "../components/home/CategoryList";
import FeaturedProducts from "../components/home/FeaturedProducts";
import FeaturedCollections from "../components/home/FeaturedCollections";
import PromoBanner from "../components/home/PromoBanner";
import Testimonials from "../components/home/Testimonials";
import Newsletter from "../components/home/Newsletter";

function Home() {
  return (
    <>
      <Hero />
      <TrustBar />
      <CategoryList />
      <FeaturedProducts />
      <FeaturedCollections />
      <PromoBanner />
      <Testimonials />
      <Newsletter />
    </>
  );
}

export default Home;
