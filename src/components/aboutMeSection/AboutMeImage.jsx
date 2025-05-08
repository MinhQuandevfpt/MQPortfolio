import Lottie from 'lottie-react';
import aboutMeAnimation from '../../assets/animation/programmer.json'; 

const AboutMeImage = () => {
  return (
    <div className="h-[500px] w-[300px] relative sm:h-[500px] sm:w-[300px]">
      <div className="h-[500px] w-[300px] rounded-[100px] absolute overflow-hidden translate-y-0 sm:-translate-y-28 lg:translate-y-1 transition-all duration-300 ">
        <Lottie
          animationData={aboutMeAnimation}
          loop={true}
          style={{ height: '100%', width: '100%' }}
        />
      </div>
      <div className="h-[500px] w-[250px] bg-orange absolute bottom-[-30px] left-[-30px] rounded-bl-[120px] rounded-tr-[120px] rounded-br-[20px] rounded-tl-[20px] -z-10"></div>
    </div>
  );
};

export default AboutMeImage;
