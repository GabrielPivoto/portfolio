import { useRef } from 'react'

import Card from "../components/Card"
import { Frameworks } from '../components/Frameworks'

const About = () => {

    const grid2Container = useRef()

    return (
        <section className="c-space mb-20" id="about">
            <h2 className="text-heading">About me</h2>
            <div className="grid grid-cols-1 gap-4 md:grid-cols-6 md:auto-rows-[18rem] mt-12">
                <div className="flex items-end grid-black-color grid-1">
                    <img
                        src="assets/coding-pov.png"
                        className="absolute scale-[1.75] -right-[5rem] -top-[1rem] md:scale-[3] md:left-50 md:inset-y-10 lg:scale-[2.5]"
                    />
                    <div className="z-10">
                        <p className="headtext">Hi, I'm Gabriel Pivoto</p>
                        <p className="subtext">
                            A developer with solid experience in Java and Spring Boot.
                            I have worked on large and scalable systems, contributing to the design and optimization of robust APIs and services.
                            I also have experience collaborating with international team members from Canada, India, and Sweden
                        </p>
                    </div>
                    <div className="absolute inset-x-0 pointer-events-none -bottom-4 -h-1/2 sm:h-1/3 bg-gradient-to-t from-indigo" />
                </div>
                <div className="grid-default-color grid-2">
                    <div ref={grid2Container} className="flex items-center justify-center w-full h-full">
                        <p className="flex items-end text-5xl text-gray-500">CODE IS CRAFT</p>
                        <Card style={{ rotate: "75deg", top: "30%", left: "5%" }} text="SOLID" containerRef={grid2Container} />
                        <Card style={{ rotate: "-30deg", top: "10%", left: "45%" }} text="Design Patterns" containerRef={grid2Container} />
                        <Card style={{ rotate: "90deg", top: "30%", left: "70%" }} text="Clean Code" containerRef={grid2Container} />
                        <Card style={{ rotate: "-45deg", top: "55%", left: "30%" }} text="Design Principles" containerRef={grid2Container} />
                        <Card style={{ rotate: "-20deg", top: "80%", left: "30%" }} image="assets/logos/javascript.svg" containerRef={grid2Container} />
                        <Card style={{ rotate: "-10deg", top: "25%", left: "60%" }} image="assets/logos/java-icon.svg" containerRef={grid2Container} />
                        <Card style={{ rotate: "-5deg", top: "43%", left: "1%" }} image="assets/logos/spring-icon.svg" containerRef={grid2Container} />
                    </div>
                </div>
                <div className="grid-special-color grid-3">
                    <div className="z-10 w-[50%]">
                        <p className="headtext">Tech Stack</p>
                        <p className="subtext">I specialize in a variety of languages, frameworks and tools that allow me to build robust and scalable applications</p>
                    </div>
                    <div className="absolute inset-y-0 md:inset-y-9 w-full h-full start-[50%] md:scale-125">
                        <Frameworks />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About