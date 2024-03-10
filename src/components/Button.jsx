const Button = ({ handleClick, text }) => {
  return (
    <button
      onClick={handleClick}
      className="btnconoce tracking-[0.3em] flex items-center justify-center font-normal absolute lg:translate-y-[400%] xs:translate-y-[220%] m-8 px-4 h-14 flex-center-col text-center lg:text-2xl xs:text-xs border-2 rounded-lg  border-[#B78B67] text-black"
    >
      {text}
    </button>
  );
};

export default Button;
