import React, { useRef } from "react";
import { useScroll, motion } from "framer-motion";
import LiIcon from "./LiIcon";

const Details = ({ type, time, place, info }) => {
    const ref = useRef(null);
    return (
        <li
            ref={ref}
            className="
                my-8 first:mt-0 last:mb-0 w-[60%] ml-[100px] flex flex-col items-start justify-between
                md:w-[80%] md:ml-[70px] xs:w-[90%] xs:ml-[50px]
            "
        >
            <LiIcon reference={ref} />
            <motion.div
                initial={{ y: 50 }}
                whileInView={{ y: 0 }}
                transition={{ duration: 0.5, type: "spring" }}
                className="w-full"
            >
                <h3 className="capitalize font-bold text-2xl sm:text-xl xs:text-lg">
                    {type}
                </h3>
                <span className="capitalize font-medium text-dark/75 dark:text-light/75 xs:text-sm">
                    {time} | {place}
                </span>
                <p className="font-medium w-full md:text-sm">{info}</p>
            </motion.div>
        </li>
    );
};

const Education = () => {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start end", "center start"],
    });

    return (
        <div className="my-64">
            <h2 className="font-bold text-8xl mb-32 w-full text-center md:text-6xl xs:text-4xl md:mb-16">
                Education
            </h2>

            <div
                ref={ref}
                className="w-[75%] mx-auto relative lg:w-[90%] md:w-full"
            >
                <motion.div
                    className="
                        absolute left-9 top-0 w-[4px] h-full bg-dark origin-top dark:bg-light
                        md:w-[2px] md:left-[30px] xs:left-[20px]
                        "
                    style={{ scaleY: scrollYProgress }}
                />
                <ul className="w-full flex flex-col items-start justify-between">
                    <Details
                        type="Bachelor of Science in Computer Science"
                        time="2021-2025"
                        place="Holy Angel University"
                        info="Programming Theory, Data Structures and Algorithms, Computer Organization and Architecture, Operating Systems, Database Systems, Software Engineering, Artificial Intelligence, Computer Networks, and Cybersecurity"
                    />
                    <Details
                        type="High School"
                        time="2015-2021"
                        place="Holy Family Academy"
                    />
                    <Details
                        type="Elementary School"
                        time="2009-2015"
                        place="Holy Family Academy"
                    />
                </ul>
            </div>
        </div>
    );
};

export default Education;
