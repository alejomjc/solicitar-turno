export const imagenVariants = {
  hidden: {
    opacity: 0,
    // scale: 0.5,
    x: 200,
  },
  visible: {
    opacity: 1,
    // scale: 1,
    x: 0,
    transition: {
      duration: 1,
    },
  },
};
export const formCreateStoreVariants = {
  hidden: {
    opacity: 0,
    // x: -10,
  },
  visible: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
    },
  },

  exit: {
    // x: "-100vw",
    x: 10,
    opacity: 0,
    transition: {
      duration: 0.5,
    },
  },
};
export const itemVariants = {
  hidden: {
    x: -30,
    opacity: 0,
  },
  visible: ({ delay }) => ({
    x: 0,
    opacity: 1,
    transition: {
      delay: delay * 0.3,
      duration: 0.5,
    },
  }),
};

export const flotarVariants = {
  hidden: { y: 0 },
  visible: {
    y: -25,
    transition: {
      repeat: Infinity,
      duration: 4,
      repeatType: "reverse",
    },
  },
  exit: {},
};

export const nubeVariants = {
  hidden: { x: 0 },
  visible: {
    x: 200,
    transition: {
      repeat: Infinity,
      duration: 30,
      repeatType: "reverse",
    },
  },
};

export const logoCabeceraVariants = {
  hidden: { x: -50, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 1,
    },
  },
};
