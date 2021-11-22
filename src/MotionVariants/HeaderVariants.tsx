const HeaderVariants = {
  title: {
    hidden: {
      y: -250,
    },
    visible: {
      y: -10,
      transition: {
        delay: 0.2,
        type: "spring",
        stiffness: 120,
      },
    },
  },

  link: {
    hover: {
      scale: 1.08,
      textShadow: "0px 0px  8px rgb(255, 255, 255)",
      transition: {
        yoyo: Infinity,
      },
    },
  },
};

export default HeaderVariants;