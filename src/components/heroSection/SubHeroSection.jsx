import { FadeInUp } from '../AnimationWrapper';

const SubHeroSection = () => {
  return (
    <FadeInUp delay={0.6}>
      <div className="w-full border-y border-[#777444] dark:text-white flex justify-around uppercase xl:text-4xl md:text-2xl sm:text-4xl py-8 md:flex-row sm:flex-col items-center gap-4 ">
        <p className="md:block sm:hidden dark:text-white">Fast Learner</p>
        <p className="md:block sm:hidden dark:text-white">Team Work</p>
        <p className="dark:text-white">Details Master</p>
      </div>
    </FadeInUp>
  );
};

export default SubHeroSection;
