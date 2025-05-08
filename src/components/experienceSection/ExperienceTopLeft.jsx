import ExperienceInfo from "./ExperienceInfo";

const ExperienceTopLeft = () => {
  return (
    <div className="flex flex-col gap-6 w-[300px]">
      <p className="text-[#c55228] font-bold uppercase text-3xl font-special text-center">
        Since 2023
      </p>
      <div className="flex justify-center items-center gap-4">
        <ExperienceInfo number="2" text="Years" />
        <p className="font-bold text-6xl text-gray-800">-</p>
        <ExperienceInfo number="15" text="Websites" />
      </div>
      <p className="text-center dark:text-white">
        With 3 years of experience building dynamic and user-friendly web
        applications.
      </p>
      <ExperienceInfo number="$100k" text="Max Budget" />
    </div>
  );
};

export default ExperienceTopLeft;
