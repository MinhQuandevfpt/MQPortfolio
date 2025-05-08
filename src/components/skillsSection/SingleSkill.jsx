const SingleSkill = ({ imgSvg, text }) => {
    return (
      <div className="hover:-translate-y-10 transition-all duration-500">
        <div className="flex flex-col items-center gap-2 relative">
          <div className="bg-white h-[100px] w-[100px] flex items-center justify-center rounded-full hover:scale-105 transform transition-all duration-500 text-6xl border-4 border-orange-400">
            {imgSvg}
          </div>
          <p className="dark:text-white font-bold mt-2">{text}</p>
        </div>
      
      </div>
    );
  };
  
  export default SingleSkill;
  