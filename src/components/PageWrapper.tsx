import { motion } from "framer-motion";
import { ReactNode } from "react";

type Props = {
  children: ReactNode;
};

const PageWrapper = ({ children }: Props) => {
  return (
    <motion.div
      initial={{ rotateY: 90, opacity: 0 }}
      animate={{
        rotateY: 0,
        opacity: 1,
        transition: { duration: 0.6, ease: "easeInOut" },
      }}
      exit={{
        rotateY: -90,
        opacity: 0,
        transition: { duration: 0.6, ease: "easeInOut" },
      }}
      style={{
        perspective: 1000,
        transformStyle: "preserve-3d",
        backfaceVisibility: "hidden",
      }}
    >
      {children}
    </motion.div>
  );
};

export default PageWrapper;
