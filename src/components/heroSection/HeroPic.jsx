import { PiHexagonThin } from "react-icons/pi";

const HeroPic = () => {
  return (
    <div className=" h-full flex items-center justify-center ">
      <img
        src="/images/Images_BG.png"
        alt="Thái Trần Minh Quân"
        className="max-h-[350px] w-auto"
      />
      <div className="absolute -z-10 flex justify-center items-center animate-pulse">
        <PiHexagonThin className="md:h-[90%] sm:h-[120%] min-h-[550px] w-auto text-[#2962ff] drop-shadow-[0_0_20px_#2962ff] blur-sm animate-[spin_20s_linear_infinite]" />
      </div>
    </div>
  )
}

export default HeroPic