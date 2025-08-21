import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

// Component wrapper để tạo hiệu ứng fade in từ dưới lên
export const FadeInUp = ({ children, delay = 0, duration = 0.6, className = "" }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, threshold: 0.1, margin: "0px 0px -100px 0px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 60 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 60 }}
      transition={{ duration, delay, ease: "easeOut" }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

// Component wrapper để tạo hiệu ứng fade in từ trái sang
export const FadeInLeft = ({ children, delay = 0, duration = 0.6, className = "" }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, threshold: 0.1, margin: "0px 0px -100px 0px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: -60 }}
      animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -60 }}
      transition={{ duration, delay, ease: "easeOut" }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

// Component wrapper để tạo hiệu ứng fade in từ phải sang
export const FadeInRight = ({ children, delay = 0, duration = 0.6, className = "" }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, threshold: 0.1, margin: "0px 0px -100px 0px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: 60 }}
      animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 60 }}
      transition={{ duration, delay, ease: "easeOut" }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

// Component wrapper để tạo hiệu ứng scale up
export const ScaleIn = ({ children, delay = 0, duration = 0.6, className = "" }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, threshold: 0.1, margin: "0px 0px -100px 0px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, scale: 0.8 }}
      animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
      transition={{ duration, delay, ease: "easeOut" }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

// Component wrapper để tạo hiệu ứng stagger cho danh sách items
export const StaggerContainer = ({ children, className = "" }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, threshold: 0.1, margin: "0px 0px -50px 0px" });

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={{
        hidden: {},
        visible: {
          transition: {
            staggerChildren: 0.15,
            delayChildren: 0.1
          }
        }
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

// Component item cho stagger effect
export const StaggerItem = ({ children, className = "" }) => {
  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, y: 30, scale: 0.9 },
        visible: { 
          opacity: 1, 
          y: 0, 
          scale: 1,
          transition: { 
            duration: 0.6,
            ease: "easeOut"
          }
        }
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

// Hiệu ứng slide in với direction tùy chọn
export const SlideIn = ({ children, direction = "up", delay = 0, duration = 0.6, className = "" }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, threshold: 0.1, margin: "0px 0px -100px 0px" });

  const directionOffset = {
    up: { y: 50 },
    down: { y: -50 },
    left: { x: -50 },
    right: { x: 50 }
  };

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, ...directionOffset[direction] }}
      animate={isInView ? { opacity: 1, x: 0, y: 0 } : { opacity: 0, ...directionOffset[direction] }}
      transition={{ duration, delay, ease: "easeOut" }}
      className={className}
    >
      {children}
    </motion.div>
  );
};
