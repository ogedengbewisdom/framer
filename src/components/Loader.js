import {motion, useCycle} from "framer-motion"
import React, { Fragment } from "react"

const Loader = () => {
    const loaderVariants = {
        animateOne: {
            x: [20, -20],
            y: [0, -30],
            transition: {
                x: {
                    yoyo: Infinity,
                    duration: 0.5
                },
                y: {
                    yoyo: Infinity,
                    duration: 0.25,
                    ease: "easeOut"
                }
            }
        },
        animateTwo: {
            y: [0, -40],
            x: 0,
            transition: {
                y: {
                    yoyo: Infinity,
                    duration: 0.25,
                    ease: "easeOut"
                }
            }
        }
    }

    const [animation, cycleAnimation] = useCycle("animateOne", "animateTwo")

    return (
        <Fragment>
        <motion.div className="loader"
        variants={loaderVariants}
        animate={animation}
        >
        </motion.div>
        <div onClick={() => cycleAnimation()}>Cycle</div>
        </Fragment>
    )
}

export default Loader