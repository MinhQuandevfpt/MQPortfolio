const AboutMeText = () => {
  return (
    <div className="flex flex-col md:items-start sm:items-center md:text-left sm:text-center dark:text-white ">
         <h2 className="text-6xl text-[#3348fd] mb-10  ">About Me</h2>
         <p>
         I'm Thai Tran Minh Quan, a web development enthusiast with a strong focus on front-end technologies. I specialize in React and enjoy creating intuitive, user-friendly interfaces. Passionate about learning and sharing, I aim to help others grow in their tech journey by building meaningful projects and exploring the latest in web development. Outside of coding, I’m dedicated to self-improvement and inspiring others to reach their full potential in the digital world.
      </p>
      <button className="  border border-[#f07a20] rounded-full py-2 px-4 text-lg flex gap-2 items-center mt-16 hover:bg-orange transition-all duration-500 cursor-pointer md:self-start sm:self-center">
        My Project
      </button>

    </div>
  )
}

export default AboutMeText