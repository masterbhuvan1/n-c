import Footer from "../components/Footer";
import FourthSection from "../components/FourthSection";
import Header from "../components/header.jsx";
import HeroWithScroll from "../components/Hero";
import SecondSection from "../components/secondSection";
import ThirdSection from "../components/ThirdSection";


export default function Home() {
  return (
    <main className="flex bg-white min-h-screen flex-col items-center justify-between pb-10">
      <Header />
      <HeroWithScroll/>
      <SecondSection />
      <ThirdSection />
      <FourthSection />
      <Footer/>
    </main>
  );
}
