import { motion } from 'motion/react'
import { useEffect, useState } from 'react'

import HeroText from "../components/HeroText"
import ParallaxBackground from "../components/ParallaxBackground"

const Hero = () => {

    const variants = {
        hidden: { opacity: 0, x: -50 },
        visible: { opacity: 1, x: 0 }
    }

    return (
        <section className="flex items-start justify-center md:items-start md:justify-start min-h-screen overflow-hidden c-space" id="home">
            <HeroText />
            <ParallaxBackground />
        </section>
    )
}

export default Hero