import { motion } from 'framer-motion';

const SingleSkill = ({ imgSvg, text }) => {
    return (
      <motion.div 
        className="hover:-translate-y-10 transition-all duration-500"
        whileHover={{ 
          scale: 1.05,
          y: -10,
          transition: { duration: 0.3 }
        }}
        whileTap={{ scale: 0.95 }}
      >
        <div className="flex flex-col items-center gap-2 relative">
          <motion.div 
            className="bg-white h-[100px] w-[100px] flex items-center justify-center rounded-full border-4 border-orange-400"
            whileHover={{ 
              rotate: [0, -10, 10, -10, 0],
              transition: { duration: 0.5 }
            }}
          >
            {imgSvg}
          </motion.div>
          <p className="dark:text-white font-bold mt-2">{text}</p>
        </div>
      
      </motion.div>
    );
  };
  
  export default SingleSkill;
  