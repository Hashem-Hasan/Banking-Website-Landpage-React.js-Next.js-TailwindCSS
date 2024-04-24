import Image from "next/image";
import Navbar from "./Components/Navbar";
import Header from "./Components/Header";
import AchievementsSection from "./Components/AchievementsSection";
import Companies from "./Components/Companies";
import Wdwo from "./Components/Wdwo";
import Header2 from "./Components/Header2";
import Header3 from "./Components/Header3";
import Cards from "./Components/Cards";
import FAQs from "./Components/FAQs";
import Download from "./Components/Download";
import Footer from "./Components/Footer";

export default function Home() {
  return (
    <main  className="flex min-h-screen flex-col items-center text-white">
     <div class="background-image"></div>

        <Navbar />
        <Header />
        <AchievementsSection />
        <Companies />
        <Wdwo />
        <Header2 />
        <Header3 />
        <Cards />
        <FAQs />  
        <Download />
        <Footer />
    </main>
  );
}
