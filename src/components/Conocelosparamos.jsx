import HandScroll from "./HandScroll";

const Conocelosparamos = () => {
  return (
    <div className="conoce absolute w-full h-full z-[1] flex">
      <div className=" responsiveReverse  relative w-full h-full paddingComponentes">
        <div
          style={{ backgroundImage: "url(/Conoce/fondoConoce.webp)" }}
          className="BoxConoceImg BoxesImgStart bg-center"
        >
          <div className="montaña hidden w-full h-full relative  sm:bg-gradient-to-r bg-gradient-to-b from-[#0073ab] to-[#b0f8f5]">
            <img
              src="/Conoce/m4.png"
              className=" m4 scale-[1.3] right-0 h-auto absolute bottom-0 z-40"
            />
            <img
              src="/Conoce/m-1Mobile.webp"
              className=" m4 scale-[1.3] right-0 h-auto absolute bottom-0 z-40 lg:hidden xl:hidden 2xl:hidden"
            />

            <img
              src="/Conoce/m1.png"
              className=" m1 h-auto absolute bottom-0 z-30"
            />
            <img
              src="/Conoce/m-2Mobile.webp"
              className=" m1 h-auto absolute bottom-0 z-30 lg:hidden xl:hidden 2xl:hidden"
            />

            <img
              src="/Conoce/m2.png"
              className=" m2 right-0 h-auto opacity-0 absolute bottom-0 z-20"
            />
            <img
              src="/Conoce/m-3Mobile.webp"
              className=" m2 right-0 h-auto opacity-0 absolute bottom-0 z-20 lg:hidden xl:hidden 2xl:hidden"
            />

            <img
              src="/Conoce/m3.png"
              className=" m3 scale-[1.3] opacity-0  left-0 h-auto absolute bottom-0"
            />
            <img
              src="/Conoce/m-4Mobile.webp"
              className=" m3 scale-[1.3] opacity-0  left-0 h-auto absolute bottom-0 lg:hidden xl:hidden 2xl:hidden"
            />

            <p className=" titulo1 z-40 tracking-widest font-bold text-4xl absolute top-[7vh] left-[7vw] text-white">
              EL ORIGEN
              <br />
              DE LOS
              <br />
              PÁRAMOS
            </p>

            <p className=" titulo2 z-40 tracking-widest opacity-0 font-bold text-4xl absolute top-[7vh] left-[7vw] text-white">
              EL MUNDO ELEVADO
              <br />
              DE LOS PÁRAMOS
            </p>
            <p className=" titulo3 z-40 tracking-widest opacity-0 font-bold text-4xl absolute top-[7vh] left-[7vw] text-white">
              EL CICLO VITAL
              <br />
              DEL AGUA
            </p>
            <p className=" titulo4 z-40 tracking-widest opacity-0 font-bold text-4xl absolute top-[7vh] left-[7vw] text-white">
              GUARDIANES
              <br />
              DE LA
              <br />
              BIODIVERSIDAD
            </p>

            <img
              src="/Conoce/circulo1.png"
              className="circulo1 absolute top-[40%] left-[65%] w-[25px] cursor-pointer z-[70]"
            />
            <img
              src="/Conoce/lineapunteaguda1.svg"
              className="LineaUnoMontaña absolute top-[14%] left-[6%] w-[57%] z-50"
            />
            <p className="textoUnoLosParamos text-[13px] absolute top-[10vh] left-[38vw] text-white w-[500px] z-50">
              Es resultado de complejas interacciones geológicas y climáticas,
              <br /> incluyendo actividad volcánica y extensos ciclos glaciales
              e<br /> interglaciales durante el Pleistoceno.
            </p>

            <img
              src="/Conoce/circulo1.png"
              className="circulo2 hidden absolute top-[57%] left-[42%] w-[25px] cursor-pointer z-[60]"
            />
            <img
              src="/Conoce/lineapunteaguda2.svg"
              className={` LineaDosMontaña absolute top-[14%] left-[7%] w-[38%] z-20`}
            />
            <p
              className={`textoDosLosParamos text-[13px] absolute top-[10vh] left-[35vw] text-white w-[500px] z-50`}
            >
              Los páramos se encuentran
              <br />
              generalmente entre 3,000 y 4,000
              <br /> metros sobre el nivel del mar.
            </p>

            <img
              src="/Conoce/circulo1.png"
              className="circulo3 hidden absolute top-[80%] left-[70%] w-[25px] cursor-pointer z-[60]"
            />
            <img
              src="/Conoce/lineapunteaguda3.svg"
              className={` LineaTresMontaña absolute top-[53%] left-[73%] w-[15%] z-50`}
            />
            <p
              className={`textoTresLosParamos  text-[13px] absolute top-[35vh] left-[52vw] text-white w-[500px] z-50`}
            >
              Son un ecosistema montañoso
              <br />
              intertropical y se caracterizan por
              <br /> su clima frío y su importante
              <br />
              biodiversidad y recursos hídricos.
            </p>

            <img
              src="/Conoce/circulo1.png"
              className="circulo4 hidden absolute top-[55%] left-[70%] w-[25px] cursor-pointer z-50"
            />
            <HandScroll
              customstyle={`moveTwo absolute w-12 z-[100] top-[44%] left-[64%] `}
            />

            <img
              src="/Conoce/lneapunteaguda4.svg"
              className={` LineaCuatroMontaña absolute top-[10%] left-[7%] w-[57%] z-10`}
            />
            <p
              className={`textoCuatroLosParamos  text-[13px] absolute top-[10vh] left-[30vw] text-white w-[500px] z-50`}
            >
              Los páramos actúan como esponjas
              <br />
              naturales, regulando el flujo de ríos
              <br />
              y quebradas que son esenciales
              <br /> para la vida.
            </p>

            <img
              src="/Conoce/circulo1.png"
              className="circulo5 hidden absolute top-[73%] left-[43%] w-[25px] cursor-pointer z-[70]"
            />
            <img
              src="/Conoce/lineapunteagudaCinco.svg"
              className={` LineaCincoMontaña absolute top-[74%] left-[32%] w-[12%] z-50`}
            />
            <p
              className={`textoCincoLosParamos  text-1xl absolute top-[52vh] left-[9vw] text-white w-[500px] z-50`}
            >
              El 70% del agua de las
              <br />
              grandes ciudades, proviene
              <br />
              de este lugar sagrado.
            </p>
            <img
              src="/Conoce/circulo1.png"
              className="circulo6 hidden absolute top-[42%] left-[33%] w-[25px] cursor-pointer z-50"
            />
            <img
              src="/Conoce/lineapunteaguda6.svg"
              className={` LineaSeisMontaña absolute top-[18%] left-[6%] w-[25%] z-10`}
            />
            <p
              className={`textoSeisLosParamos  text-[13px] absolute top-[12vh] left-[32vw] text-white w-[500px] z-50`}
            >
              Los páramos son sagrados para las
              <br />
              comunidades indígenas y locales por
              <br />
              sus recursos y belleza.
            </p>

            <img
              src="/Conoce/circulo1.png"
              className="circulo7 hidden absolute top-[70%] left-[70%] w-[25px] cursor-pointer z-[60]"
            />
            <img
              src="/Conoce/lineapunteaguda7.svg"
              className={` LineaSieteMontaña absolute top-[35%] left-[57%] w-[12%] z-50`}
            />
            <p
              className={`textoSieteLosParamos  text-[13px] absolute top-[22vh] left-[34vw] text-white w-[500px] z-50`}
            >
              Alberga plantas y animales
              <br />
              adaptados al frío que terminan siendo
              <br />
              valiosos para el equilibrio ecológico.
            </p>
          </div>
        </div>
        <div className="BoxConoceText BoxesTextEnd flex-center">
          <p className="conoceTexto font-bold uppercase tamanoTitulos tracking-widest whitespace-nowrap">
            PÁRAMOS,
            <br />
            EL MILAGRO DE
            <br />
            LOS GLACIALES
            <br />
            Y LOS
            <br />
            MOVIMIENTOS
            <br />
            VOLCÁNICOS.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Conocelosparamos;
