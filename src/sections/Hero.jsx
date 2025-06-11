import { motion } from 'motion/react'

import HeroText from "../components/HeroText"
import ParallaxBackground from "../components/ParallaxBackground"

const Hero = () => {

    const variants = {
        hidden: { opacity: 0, x: -50 },
        visible: { opacity: 1, x: 0 }
    }

    return (
        <section className="flex items-start justify-center md:items-start md:justify-start min-h-screen overflow-hidden c-space">
            <HeroText />
            <ParallaxBackground />
            <motion.img
                src="https://avatars.githubusercontent.com/u/65688445?v=4"
                alt="profilePicture"
                className="absolute top-8 right-8 w-24 h-24 md:top-16 md:right-16 md:w-40 md:h-40 rounded-full border-4 border-white z-50"
                variants={variants}
                initial="hidden"
                animate="visible"
                transition={{ delay: 2.0 }}
            />
        </section>
    )
}

export default Hero