const Button = ({ handleClick, text }) => {
  return (
    <button
      onClick={handleClick}
      className="btnconoce tracking-[0.3em] flex items-center justify-center font-normal absolute translate-y-[400%] m-8 w-[50%] h-14 flex-center-col text-center text-2xl border-2 rounded-lg  border-[#B78B67] text-black"
    >
      {text}
    </button>
  );
};

export default Button;
