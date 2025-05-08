import Lottie from "lottie-react";
import laptopAnimation from "../../assets/animation/Laptop.json"; // hoặc điều chỉnh lại path nếu cần

const ExperienceTopMiddle = () => {
  return (
    <div className="lg:w-[35%] md:w-[50%] sm:w-[80%]">
      <Lottie animationData={laptopAnimation} loop={true} />
    </div>
  );
};

export default ExperienceTopMiddle;
