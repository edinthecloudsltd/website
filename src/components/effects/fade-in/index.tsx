import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const FadeIn: React.FC = ({ children }) => {
  const { ref, inView } = useInView({ threshold: 0.3 });

  const variants = {
    hidden: {
      opacity: 0,
      y: 100,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <motion.div ref={ref} variants={variants} initial="hidden" animate={inView && 'visible'}>
      {children}
    </motion.div>
  );
};

export default FadeIn;
