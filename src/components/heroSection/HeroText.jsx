import TypeWriter from '../TypeWriter';
import { motion } from 'framer-motion';

const HeroText = () => {
    const titles = [
        "Software Developer",
        "Frontend Developer", 
        "UI/UX Enthusiast"
    ];

    return (
        <div className="flex flex-col gap-6 h-full justify-center md:text-left sm:text-center">
            <motion.h1 
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="md:text-[2.8rem] lg:text-6xl sm:text-4xl font-bold font-special text-[#2d38de] dark:text-blue-400 transition-colors duration-300"
            >
                Thai Tran Minh Quan
            </motion.h1>
            
            <motion.div 
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="lg:text-2xl md:text-xl sm:text-lg min-h-[4rem] flex items-center md:justify-start sm:justify-center"
            >
                <div className="flex items-center flex-wrap md:justify-start sm:justify-center">
                    <span className="text-[#5f616b] dark:text-gray-300 font-medium mr-3 lg:text-2xl md:text-xl sm:text-lg">
                        I'm a
                    </span>
                    <TypeWriter 
                        texts={titles}
                        speed={80}
                        deleteSpeed={40}
                        pauseTime={2500}
                        className="text-gradient-animated font-bold uppercase tracking-wide lg:text-3xl md:text-2xl sm:text-xl"
                    />
                </div>
            </motion.div>
            
            <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 1.0 }}
                className="text-lg mt-2 dark:text-gray-300 text-gray-700 leading-relaxed transition-colors duration-300"
            >
                A Passionate Web Developer with over 3 years of experience
                <br /> Specializing in creating modern, responsive, and user-friendly web applications with clean code <br/> and scalable solutions.
            </motion.p>
        </div>
    )
}

export default HeroText