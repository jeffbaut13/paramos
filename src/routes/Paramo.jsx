import { useEffect, useRef, useState } from "react";
import Origen from "../components/Origen";
import gsap from "gsap";
import { scrollEffects } from "../animations/gsap";
import Dosmilfrailejones from "../components/Dosmilfrailejones";

function App() {
  const main = useRef(null);
  const [imageBg, setImageBg] = useState("/360/360.webp");
  useEffect(() => {
    let ctx = gsap.context(() => {
      const tl = scrollEffects(main);

      tl.fromTo(
        ".BoxOrigenText",
        { width: "50%" },
        { width: "0", duration: 2 },
        0
      );
      tl.fromTo(
        ".BoxOrigenImg",
        { width: "50%" },
        { width: "100%", duration: 2 },
        0
      );
      tl.from(".blurParamos", { opacity: 0 }, 2);
      tl.from(".embeded", { opacity: 0 }, 2);
      tl.to(".origen", { padding: 0 }, 2);
      tl.to(".blurParamos", { opacity: 0 });
      tl.to(".origen", { opacity: 0 }, 2.6);
      tl.to(".origen", { display: "none" }, 2.7);
      tl.fromTo(
        ".dosmilFrailejones",
        { display: "none", opacity: 0 },
        { display: "", opacity: 1 }
      );
      tl.fromTo(".BoxDosmilImage", { width: "-100vw" }, { width: "50%" });
      tl.fromTo(
        ".BoxDosmilTexto",
        { x: "-100%", width: "0" },
        { x: "0", width: "50%" }
      );
    });

    return () => ctx.revert(); // cleanup!
  }, [main]);

  return (
    <div ref={main} className="h-[200vh]">
      <img className="fixed" src={imageBg} alt="" />
      <div className="blurParamos fixed top-0 left-0 bg2 z-10 w-full h-full"></div>
      <div className="mainParamos  z-50 rounded-3xl overflow-hidden bg-white fixed top-1/2 translate-y-[-50%] left-1/2 translate-x-[-50%] xl:w-[80%] xs:w-[85%] xl:h-[80%] xl:max-h-[874px] xs:h-[70%] ">
        <Origen />
        <Dosmilfrailejones />
      </div>
    </div>
  );
}

export default App;
