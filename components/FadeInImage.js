import React from "react";
import { motion, useAnimation } from "framer-motion";
// import Image from "next/image";

const FadeInImage = (props) => {
  const [loaded, setLoaded] = React.useState(false);
  const animationControls = useAnimation();
  const animationVariants = {
    visible: { opacity: 1 },
    hidden: { opacity: 0 },
  };

  React.useEffect(() => {
    if (loaded) {
      animationControls.start("visible");
    }
  }, [loaded]);

  return (
    <motion.div
      initial={"hidden"}
      animate={animationControls}
      variants={animationVariants}
      transition={{ ease: [0.215, 0.61, 0.355, 1], duration: 1.5 }}
    >
      {/* eslint-disable-next-line jsx-a11y/alt-text */}
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img {...props} onLoad={() => setLoaded(true)} />
    </motion.div>
  );
};

export default FadeInImage;
