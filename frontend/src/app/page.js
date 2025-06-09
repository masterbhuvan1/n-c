import Footer from "../components/Footer.jsx";
import FourthSection from "../components/FourthSection.jsx";
import Header from "../components/header.jsx";
import HeroWithScroll from "../components/Hero.jsx";
import SecondSection from "../components/SecondSection.jsx";
import ThirdSection from "../components/ThirdSection.jsx";


export default function Home() {
  return (
    <main className="flex overflow-x-hidden bg-white min-h-screen flex-col items-center justify-between pb-10">
      <Header />
      <HeroWithScroll/>
      <SecondSection />
      <ThirdSection />
      <FourthSection />
      <Footer/>
    </main>
  );
}
