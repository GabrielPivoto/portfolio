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
                className="absolute top-30 right-95 w-70 h-70 rounded-full border-4 border-white z-50"
                variants={variants}
                initial="hidden"
                animate="visible"
                transition={{ delay: 2.0 }}
            />
        </section>
    )
}

export default Hero