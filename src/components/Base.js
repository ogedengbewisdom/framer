import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from "framer-motion";
import { buttonVariant } from './Home';


export const containerVariants = {
  initial: {
    opacity: 0,
    x: "100vw"
  },
  animate: {
    opacity: 1,
    x: 0,
    transition: {
      type: "spring",
      stiffness: 50
    }
  }
}

const nextVariants = {
  initial: {
    opacity: 0,
    x: "-100vw"
  },
  animate: {
    opacity: 1,
    x: 0,
    transition: {
      type: "spring",
      stiffness: 50
    }
  }
}

const Base = ({ addBase, pizza }) => {
  const bases = ['Classic', 'Thin & Crispy', 'Thick Crust'];

  return (
    <motion.div className="base container"
      variants={containerVariants}
      initial="initial"
      animate="animate"
    >

      <h3>Step 1: Choose Your Base</h3>
      <ul>
        {bases.map(base => {
          let spanClass = pizza.base === base ? 'active' : '';
          return (
            <motion.li key={base} onClick={() => addBase(base)}
              whileHover={{
                scale: 1.3,
                originX: 0,
                color: "yellow"
              }}

              transition={{
                type: "spring",
                stiffness: 300
              }}
            >
              <span className={spanClass}>{ base }</span>
            </motion.li>
          )
        })}
      </ul>

      {pizza.base && (
        <motion.div className="next" 
          variants={nextVariants}
        >
          <Link to="/toppings">
            <motion.button 
              variants={buttonVariant}
              whileHover="hover"
            >Next</motion.button>
          </Link>
        </motion.div>
      )}

    </motion.div>
  )
}

export default Base;