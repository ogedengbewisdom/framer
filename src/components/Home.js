import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from "framer-motion"
import Loader from './Loader';

export const buttonVariant = {
  // animate: {
  //   x: [-20,20,-20,20,0],
  //   transition: {
  //     duration: 3
  //   }
  // },
  hover: {
    scale: 1.1,
    textShadow: "2px 2px 5px rgb(255, 255, 255)", 
    boxShadow: "2px 2px 5px rgb(255, 255, 255)",
    transition: {
      duration: 0.2,
      yoyo: Infinity
    }
  }
}

const Home = () => {
  return (
    <motion.div className="home container"
    initial={{opacity: 0}}
    animate={{opacity: 1}}
    transition={{delay: 0.5, duration: 3}}    
    >
      <motion.h2>
        Welcome to Pizza Joint
      </motion.h2>
      <Link to="/base">
        <motion.button
          variants={buttonVariant}
          animate="animate"
          whileHover="hover"
        >
          Create Your Pizza
        </motion.button>
      </Link>
      <Loader />
    </motion.div>
  )
}

export default Home;