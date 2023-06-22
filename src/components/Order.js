import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
// import {containerVariants} from "./Base"


const containerVariants = {
  initial: {
    opacity: 0,
    x: "100vw"
  },
  animate: {
    opacity: 1,
    x: 0,
    transition: {
      type: "spring",
      mass: 0.4,
      damping: 8,
      staggerChildren: 0.4,
      when: "beforeChildren"
    }
  }
}

const childVariants = {
  initial: {
    opacity: 0
  },
  animate: {
    opacity: 1
  }
}

const Order = ({ pizza, setShowModal }) => {
  const [show, setShow] = useState(true)
  
  useEffect( () => {
    setTimeout(() => {
      setShow(false)
      setShowModal(true)
    },4000)
  },[setShowModal])
  return (
    <motion.div className="container order"
      variants={containerVariants}
      initial="initial"
      animate="animate"
    >
      <AnimatePresence>
        {
          show && 
          <motion.h2
            exit={{y: -1000}}
            transition={{duration: 3}}
          >
            Thank you for your order :)
          </motion.h2>}
      </AnimatePresence>
      <motion.p variants={childVariants}>You ordered a {pizza.base} pizza with:</motion.p>
      <motion.div
        variants={childVariants}
      >
        {pizza.toppings.map(topping => <div key={topping}>{topping}</div>)}
      </motion.div>
    </motion.div>
  )
}

export default Order;