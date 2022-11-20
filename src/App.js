import Hero from "./Components/Hero";
import Recommendation from "./Components/Recommendation";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ReadyToSell from "./Components/ReadyToSell";
import Testimonials from "./Components/Testimonials";
import TipsAndTricks from "./Components/TipsAndTricks";
import Subscribe from "./Components/Subscribe";
import Footer from "./Components/Footer";

function App() {
  return (
    <div className="w-full relative px-6 overflow-hidden">
      <Hero />
      <Recommendation />
      <ReadyToSell />
      <Testimonials />
      <TipsAndTricks />
      <Subscribe />
      <Footer />
      <div className="sm:w-[500px] w-40 blur-[60px] bg-[#B9FF82] absolute h-[500px] -bottom-[116px] right-0 -z-10 opacity-30 rotate-90"></div>
      <div className="sm:w-[500px] w-40 blur-[60px] bg-[#82BBFF] absolute h-[500px] bottom-0 -right-[200px] -z-10 opacity-30 rotate-90"></div>
    </div>
  );
}

export default App;
