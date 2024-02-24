import React, { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Imag from "./Imag";
import { scrollEffects } from "../animations/gsap";

gsap.registerPlugin(ScrollTrigger);

const PrimerSection = () => {
  const component = useRef(null);
  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      const tl = scrollEffects(component);

      tl.from(".dog-1", { opacity: 0, x: -500, duration: 2 });
      tl.from(".dog-2", { opacity: 0, x: -500, duration: 2 });
    }, component);

    return () => ctx.revert(); // cleanup!
  }, []);
  return (
    <>
      <section
        ref={component}
        className="section--blue relative h-[200vh]  bg-emerald-800"
      >
        <img
          src={"/imagen1.jpg"}
          alt=""
          className="absolute top-0 dog-1 w-1/2"
        />
        <Imag />
      </section>
    </>
  );
};

export default PrimerSection;
