import { Link } from "react-router-dom";

export const BtnOmitir = ({ inicio }) => {
  return (
    <div className="maxW xl:w-[80%] xs:w-[80%] xl:h-[80%] xl:max-h-[874px] xs:h-[80%] fixed top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%]">
      <Link
        to={"/paramo"}
        className={`fadeIn btn-cards ${
          inicio >= 10 ? "btn-siguiente" : ""
        } absolute border border-[#bd8661] min-w-fit right-0 top-0 xs: translate-y-[-120%] text-center letterSpacing xl:text-xs xs:text-[0.6rem] max-xl:min-w-fit`}
      >
        {inicio < 10 ? "OMITIR" : "SIGUIENTE"}
      </Link>
    </div>
  );
};
