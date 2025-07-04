import AnimatedText from "../components/AnimatedText";
import Layout from "../components/Layout";
import Head from "next/head";
import Image from "next/image";
import React, { useEffect, useRef } from "react";
import profilePic from "../../public/images/profile/profile-pic.png";
import { useInView, useMotionValue, useSpring } from "framer-motion";
import Skills from "../components/Skills";
import Experience from "../components/Experience";
import Education from "../components/Education";
import TransitionEffect from "../components/TransitionEffect";

const AnimatedNumbers = ({ value }) => {
    const ref = useRef(null);

    const motionValue = useMotionValue(0);
    const springValue = useSpring(motionValue, {
        duration: 3000,
    });
    const isInView = useInView(ref);
    useEffect(() => {
        if (isInView) {
            motionValue.set(value);
        }
    }, [isInView, value, motionValue]);

    useEffect(() => {
        springValue.on("change", (latest) => {
            if (ref.current && latest.toFixed(0) <= value) {
                ref.current.textContent = latest.toFixed(0);
            }
        });
    }, [springValue]);

    return <span ref={ref}></span>;
};

const about = () => {
    return (
        <>
            <Head>
                <title> Kent | About Page</title>
                <meta name="description" content="About Kent" />
            </Head>
            <TransitionEffect />
            <main className="flex w-full flex-col items-center justify-center dark:text-light">
                <Layout className="pt-16">
                    <AnimatedText
                        text="Verneil Kent Batiller"
                        className="mb-16 lg:!text-7xl sm:mb-8 sm:!text-6xl xs:!text-4xl"
                    />
                    <div className="grid w-full grid-cols-8 gap-16 sm:gap-8">
                        <div className="col-span-3 flex flex-col items-start justify-start xl:col-span-4 md:order-2 md:col-span-8">
                            <h2 className="mb-4 text-lg font-bold uppercase text-dark/75 dark:text-light/75 ">
                                Biography
                            </h2>
                            <p className="font-medium">
                                As a Bachelor of Science in Computer Science
                                Graduate, Magna Cum Laude from Holy Angel
                                University, I have consistently earned recognition
                                as a Dean&apos;s and President&apos;s Lister.
                                My passion for Game Development and Artificial
                                Intelligence drives me to innovate and contribute
                                to transformative technologies. Although Game
                                Development was not part of my formal curriculum,
                                I pursued it independently, developing proficiency in
                                tools such as Python and the Unreal Editor for Fortnite
                                to bring interactive and engaging experiences to life.
                            </p>
                            <p className="font-medium my-4">
                                Notable projects include Angelite Forecast, a
                                machine learning-based forecasting system, and
                                Invocation, a blockchain-powered NFT card gacha
                                and marketplace. These projects showcase my
                                skills in AI, blockchain development, and
                                backend programming. I have also excelled in
                                competitions, earning the highest individual
                                score in my school&apos;s Capture the Flag event
                                and succeeding in LOOP&apos;s Code to Death
                                programming competition.
                            </p>
                            <p className="font-medium">
                                Through badges and certificates in AI, machine
                                learning, cybersecurity, and cloud computing
                                from AWS Academy, Cisco Networking Academy, and
                                DataCamp, I demonstrate a commitment to
                                continuous learning. I aim to build impactful
                                software solutions and explore opportunities
                                that push the boundaries of technology.
                            </p>
                        </div>
                        <div
                            className="
                                col-span-3 relative h-max rounded-2xl border-2 border-solid border-dark bg-light
                                dark:bg-dark dark:border-light p-8 xl:col-span-4 md:order-1 md:col-span-8
                            "
                        >
                            <div className="absolute top-0 -right-3 -z-10 w-[102%] h-[103%] bg-dark rounded-[2rem] dark:bg-light" />
                            <Image
                                src={profilePic}
                                alt="Kent"
                                className="w-full h-auto rounded-2xl"
                                priority
                                sizes="
                                    (max-width: 768px) 100vw,
                                    (max-width: 1200px) 50vw,
                                    33vw
                                "
                            />
                        </div>
                        <div
                            className="
                                col-span-2 flex flex-col items-end justify-between xl:col-span-8 xl:flex-row xl:items-center md:order-3
                              
                            "
                        >
                            <div className="flex flex-col items-end justify-center xl:items-center">
                                <span className="inline-block text-7xl font-bold md:text-6xl sm:text-5xl xs:text-4xl">
                                    <AnimatedNumbers value={7} />
                                </span>
                                <h2
                                    className="
                                        text-xl font-medium capitalize text-dark/75 text-right dark:text-light/75 xl:text-center
                                        md:text-lg sm:text-base xs:text-sm
                                    "
                                >
                                    Credly Badges
                                </h2>
                            </div>

                            <div className="flex flex-col items-end justify-center xl:items-center">
                                <span className="inline-block text-7xl font-bold md:text-6xl sm:text-5xl xs:text-4xl">
                                    <AnimatedNumbers value={5} />
                                </span>
                                <h2
                                    className="
                                        text-xl font-medium capitalize text-dark/75 text-right dark:text-light/75 xl:text-center
                                        md:text-lg sm:text-base xs:text-sm
                                    "
                                >
                                    Projects Completed
                                </h2>
                            </div>

                            <div className="flex flex-col items-end justify-center xl:items-center">
                                <span className="inline-block text-7xl font-bold md:text-6xl sm:text-5xl xs:text-4xl">
                                    <AnimatedNumbers value={4} />
                                </span>
                                <h2
                                    className="
                                        text-xl font-medium capitalize text-dark/75 text-right dark:text-light/75 xl:text-center
                                        md:text-lg sm:text-base xs:text-sm
                                    "
                                >
                                    Years of Computer Science
                                </h2>
                            </div>
                        </div>
                    </div>
                    <Skills />
                    {/* No Experience */}
                    {/* <Experience /> */}
                    <Education />
                </Layout>
            </main>
        </>
    );
};

export default about;
