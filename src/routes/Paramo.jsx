import { useEffect, useRef, useState } from "react";
import Origen from "../components/Origen";
import gsap from "gsap";
import { scrollEffects } from "../animations/gsap";
import Dosmilfrailejones from "../components/Dosmilfrailejones";
import VideoComponent from "../components/videclud";
import { CapituloMoises } from "../components/CapituloMoises";
import Travesia from "../components/Travesia";
import Grilla from "../components/Grilla";
import Conocelosparamos from "../components/Conocelosparamos";
import Contacto from "../components/Contacto";
import Descargable from "../components/Descargable";
import { timeLine } from "../animations/timelineparamos";

const isMobile = window.innerWidth <= 1024;

function App() {
  const main = useRef(null);
  const [imageBg, setImageBg] = useState("/Conoce/fondoConoce.webp");
  const [numFrailejon, setNumFrailejon] = useState(0);
  const [travesiaReverse, setTravesiaReverse] = useState(false);

  useEffect(() => {
    if (!isMobile) {
      let ctx = gsap.context(() => {
        timeLine(main, setImageBg, setNumFrailejon, setTravesiaReverse);
      }, main);
      return () => ctx.revert(); // cleanup!
    }
  }, [main]);
  return (
    <div ref={main} className="maxW h-[3000vh]">
      {/* <Grilla /> */}
      <img className="fixed" src={imageBg} alt="" />
      <div className="blurParamos fixed top-0 left-0 bg2 z-10 w-full h-full"></div>
      <div className="maxW mainParamos  z-50 rounded-3xl overflow-hidden bg-white fixed top-1/2 translate-y-[-50%] left-1/2 translate-x-[-50%] xl:w-[80%] xs:w-[85%] xl:h-[80%] xl:max-h-[874px] xs:h-[70%] ">
        <Conocelosparamos />
        <Origen />
        <Dosmilfrailejones numFrailejon={numFrailejon} />
        <CapituloMoises />
        <Travesia travesiaReverse={travesiaReverse} setImageBg={setImageBg} />
        <Contacto />
        <Descargable />
      </div>
    </div>
  );
}

export default App;
