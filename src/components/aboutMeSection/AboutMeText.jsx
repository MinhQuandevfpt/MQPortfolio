import { useState, useEffect } from 'react';

const AboutMeText = () => {
  const [showMore, setShowMore] = useState(false);

  useEffect(() => {
    console.log('showMore state changed to:', showMore);
  }, [showMore]);

  const toggleShowMore = () => {
    console.log('Button clicked, current showMore:', showMore); // Debug log
    setShowMore(prevState => {
      console.log('Previous state:', prevState, 'New state:', !prevState);
      return !prevState;
    });
  };

  return (
    <div className="relative flex flex-col md:items-start sm:items-center md:text-left sm:text-center dark:text-white">
         <h2 className="text-6xl text-[#3348fd] mb-10  ">About Me</h2>
         <div className="space-y-4" id="about-text-more" aria-live="polite">
           <p>
             I'm Thai Tran Minh Quan, a passionate frontend developer with a strong enthusiasm for building modern, engaging, and user-friendly digital experiences. My journey into web development began with a simple curiosity about how websites work, and over the years, that curiosity has evolved into a dedicated career path. I thrive on transforming ideas into interactive products that not only function well but also bring value to users through intuitive design and smooth experiences.
           </p>
           
           {showMore && (
             <>
               <p>
                 With over 3 years of hands-on experience, I specialize in React.js and modern frontend technologies. I take pride in writing clean, maintainable, and scalable code while paying close attention to responsive design, accessibility, and performance optimization. My skill set also extends to working with state management, component-based architecture, and integrating APIs to build seamless web applications. I'm particularly passionate about UI/UX design, ensuring that every interface is both visually appealing and user-focused.
               </p>
               
               <p>
                 What excites me most about web development is its continuous evolution. I actively keep up with new frameworks, tools, and best practices, because I believe that adaptability and a growth mindset are essential in tech. My approach is not only about writing code, but also about solving problems creatively, improving workflows, and making products that have a real impact.
               </p>
               
               <p>
                 Beyond the technical side, I highly value collaboration and teamwork. I enjoy working in dynamic environments where ideas are shared openly, and where each project is a chance to learn from others while contributing my own strengths. I see every challenge as an opportunity to grow and every project as a step forward in becoming a more well-rounded developer.
               </p>
               
               <p>
                 Outside of coding, I'm committed to personal development and continuous learning. I enjoy reading, exploring new perspectives, and drawing inspiration from different fields to apply in my work. I also aspire to inspire others in the tech community, encouraging them to pursue their goals and unlock their full potential in the digital era.
               </p>
             </>
           )}
         </div>
         
         <button 
           type="button"
           onClick={toggleShowMore}
           aria-expanded={showMore}
           aria-controls="about-text-more"
           className="relative z-10 border border-[#3348fd] rounded-full py-2 px-6 text-lg flex gap-2 items-center mt-8 hover:bg-[#3348fd] hover:text-white transition-all duration-300 cursor-pointer md:self-start sm:self-center focus:outline-none focus:ring-2 focus:ring-[#3348fd] focus:ring-offset-2 pointer-events-auto"
         >
           <span>{showMore ? 'Show Less' : 'Show More'}</span>
         </button>

    </div>
  )
}

export default AboutMeText