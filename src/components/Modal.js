import { motion, AnimatePresence } from "framer-motion"
import React from "react"
import { Link } from "react-router-dom"

const Modal = (props) => {

    const modalVariant = {
        hidden: {
            opacity: 0
        },
        visible: {
            opacity: 1
        },
        exit: {
            x: -1000,
            transition: {duration: 0.5, ease: "easeInOut"}
        }
    }

    const modal = {
        hidden: {
            y: "-100vh",
            opacity: 0
        },
        visible: {
            opacity: 1,
            y: "200px",
            transition: {duration: 1, ease: "easeInOut"}
        }
    }
    return (
        <AnimatePresence mode="wait">
            {props.showModal &&<motion.div className="backdrop" 
            variants={modalVariant}
            initial="hidden"
            animate="visible"
            exit="exit"
            >
                <motion.div className="modal"
                variants={modal}
                >
                    <p>Do you want to order another pizza?</p>
                    <Link to="/">
                        <button onClick={() => props.setShowModal(false)}>Start Again</button>
                    </Link>
                </motion.div>
            </motion.div>}
        </AnimatePresence>
    )
}

export default Modal