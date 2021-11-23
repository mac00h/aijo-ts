const HomeVariants = {
  buttonVariants: {
    hover: {
      scale: 1.1,
      textShadow: "0px 0px  8px rgb(255, 255, 255)",
      boxShadow: "0px 0px  8px rgb(255, 255, 255)",
      transition: {
        yoyo: Infinity,
      },
    },
  },

  containerVariants: {
    hidden: {
      x: "-100vw",
    },
    visible: {
      x: 0,
      transition: {
        delay: 0.7,
      },
    },
    exit: {
      x: "-100vw",
      transition: {
        ease: "easeInOut",
      },
    },
  },

  isValid: {
    hidden: {
      opacity: 0,
    },
    visible:{
      opacity: 1,
      transition: {
        delay: 0.5,
        duration: 0.67
      }
    },
  }
};

export default HomeVariants;
