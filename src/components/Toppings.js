import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { buttonVariant } from './Home';

const Toppings = ({ addTopping, pizza, setShowModal }) => {
  let toppings = ['mushrooms', 'peppers', 'onions', 'olives', 'extra cheese', 'tomatoes'];

  useEffect(() => {
    setShowModal(false)
  })

  return (
    <div className="toppings container">
      
      <h3>Step 2: Choose Toppings</h3>
      <ul>
        {toppings.map(topping => {
          let spanClass = pizza.toppings.includes(topping) ? 'active' : '';
          return (
            <motion.li key={topping} onClick={() => addTopping(topping)}
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
              <span className={spanClass}>{ topping }</span>
            </motion.li>
          )
        })}
      </ul>

      <Link to="/order">
        <motion.button
          variants={buttonVariant}
          whileHover="hover"
        >
          Order
        </motion.button>
      </Link>

    </div>
  )
}

export default Toppings;