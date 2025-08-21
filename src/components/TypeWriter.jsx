import { useState, useEffect } from 'react';

const TypeWriter = ({ 
  texts = [], 
  speed = 80, 
  deleteSpeed = 40, 
  pauseTime = 2500,
  className = ""
}) => {
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [currentText, setCurrentText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [showCursor, setShowCursor] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => {
      const fullText = texts[currentTextIndex];
      
      if (!isDeleting) {
        // Typing
        if (currentText.length < fullText.length) {
          setCurrentText(fullText.substring(0, currentText.length + 1));
        } else {
          // Finished typing, wait then start deleting
          setTimeout(() => setIsDeleting(true), pauseTime);
        }
      } else {
        // Deleting
        if (currentText.length > 0) {
          setCurrentText(fullText.substring(0, currentText.length - 1));
        } else {
          // Finished deleting, move to next text
          setIsDeleting(false);
          setCurrentTextIndex((prev) => (prev + 1) % texts.length);
        }
      }
    }, isDeleting ? deleteSpeed : speed);

    return () => clearTimeout(timeout);
  }, [currentText, currentTextIndex, isDeleting, texts, speed, deleteSpeed, pauseTime]);

  // Cursor blinking effect
  useEffect(() => {
    const cursorInterval = setInterval(() => {
      setShowCursor(prev => !prev);
    }, 500);

    return () => clearInterval(cursorInterval);
  }, []);

  return (
    <div className="flex items-center">
      <span className={className}>
        {currentText}
      </span>
      <span 
        className={`inline-block w-1 lg:h-10 md:h-8 sm:h-7 ml-2 bg-gradient-to-b from-[#2d38de] via-[#7c3aed] to-[#5f616b] dark:from-blue-400 dark:via-purple-400 dark:to-gray-300 ${showCursor ? 'opacity-100' : 'opacity-0'} transition-opacity duration-100 rounded-full shadow-lg`}
      />
    </div>
  );
};

export default TypeWriter;
