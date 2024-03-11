const Button = ({ handleClick, text }) => {
  return (
    <button
      onClick={handleClick}
      className="btnconoce tracking-[0.3em] flex items-center justify-center font-normal absolute lg:translate-y-[350%] xs:translate-y-[310%] m-8 px-4 lg:h-14 xs:h-10 flex-center-col text-center lg:text-2xl xs:text-xs border-2 rounded-lg  border-[#B78B67] text-black"
    >
      {text}
    </button>
  );
};

export default Button;
