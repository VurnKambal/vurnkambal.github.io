import React from "react";
import { motion } from "framer-motion";

const Skill = ({ name, x, y }) => {
    return (
        <motion.div
            className="
                flex items-center justify-center rounded-full font-semibold bg-dark text-light
                py-3 px-6 shadow-dark shadow-2xl cursor-pointer absolute dark:bg-light dark:text-dark
                dark:shadow-light 
                lg:py-2 lg:px-4 md:text-sm md:py-1.5 md:px-3 xs:bg-transparent xs:dark:bg-transparent 
                xs:text-dark xs:dark:text-light xs:font-bold xs:shadow-none xs:dark:shadow-none
            "
            whileHover={{ scale: 1.05 }}
            initial={{ x: 0, y: 0 }}
            whileInView={{ x: x, y: y, transition: { duration: 1.5 } }}
            viewport={{ once: true }}
        >
            {name}
        </motion.div>
    );
};
const Skills = () => {
    return (
        <>
            <h2 className="font-bold text-8xl mt-64 w-full text-center md:text-6xl md:mt-32">
                Skills
            </h2>
            <div
                className="
                    w-full h-screen relative flex items-center justify-center rounded-full bg-circularLight dark:bg-circularDark
                    lg:h-[80vh] sm:h-[60vh] xs:h-[50vh]
                    lg:bg-circularLightLg lg:dark:bg-circularDarkLg
                    md:bg-circularLightMd md:dark:bg-circularDarkMd
                    sm:bg-circularLightSm sm:dark:bg-circularDarkSm
                "
            >
                <motion.div
                    className="
                        flex items-center justify-center rounded-full font-semibold bg-dark text-light
                        p-8 shadow-dark cursor-pointer dark:text-dark dark:bg-light dark:shadow-light

                        lg:p-6 md:p-4 xs:text-xs xs:p-2
                    "
                >
                    App
                </motion.div>
                <Skill name="Python" x="10vw" y="10vw" />

                <Skill name="Flutter" x="20vw" y="20vw" />

                <Skill name="React" x="-20vw" y="20vw" />

                <Skill name="Blockchain" x="0" y="-20vw" />

                <Skill name="Game Development" x="20vw" y="-20vw" />

                <Skill name="AI" x="-20vw" y="-20vw" />

                <Skill name="Cloud Computing" x="0" y="20vw" />
            </div>
        </>
    );
};

export default Skills;
