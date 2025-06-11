import { FlipWords } from './FlipWords'
import { motion } from 'motion/react'

const HeroText = () => {

    const greeting = "Howdy! I'm Gabriel 🤠"
    const words = ["Secure", "Modern", "Scalable"]
    const solutions = "Solutions"
    const variants = {
        hidden: { opacity: 0, x: -50 },
        visible: { opacity: 1, x: 0 }
    }

    return (
        <div className="z-10 mt-20 md:mt-40 rounded-3xl bg-clip-text">
            <div className="flex flex-col md:flex-row items-center md:items-start gap-8">
                <div className="text-center md:text-left">
                    <motion.h1 className="text-4xl font-medium"
                        variants={variants}
                        initial="hidden"
                        animate="visible"
                        transition={{ delay: 1 }}>{greeting}</motion.h1>
                    <motion.p className="text-5xl font-medium text-neutral-300 mt-4"
                        variants={variants}
                        initial="hidden"
                        animate="visible"
                        transition={{ delay: 1.2 }}>A Developer Dedicated to Crafting</motion.p>
                    <motion.div
                        variants={variants}
                        initial="hidden"
                        animate="visible"
                        transition={{ delay: 1.5 }}>
                        <FlipWords words={words} className="font-black text-white text-6xl md:text-8xl mt-4" />
                    </motion.div>
                    <motion.p className="text-4xl font-medium text-neutral-300 mt-4"
                        variants={variants}
                        initial="hidden"
                        animate="visible"
                        transition={{ delay: 1.8 }}>{solutions}</motion.p>
                </div>
                <motion.img
                    src="https://avatars.githubusercontent.com/u/65688445?v=4"
                    alt="profilePicture"
                    className="w-40 h-40 md:w-60 md:h-60 rounded-full border-4 border-white z-50 mt-8 md:mt-0"
                    variants={variants}
                    initial="hidden"
                    animate="visible"
                    transition={{ delay: 2.0 }}
                />
            </div>
        </div>
    )
}

export default HeroText