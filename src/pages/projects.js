import AnimatedText from "../components/AnimatedText";
import { GithubIcon } from "../components/Icons";
import Layout from "../components/Layout";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import thesisInput from "../../public/images/projects/thesis-input.png";
import blockchainInvocation from "../../public/videos/projects/blockchain-invocation-marketplace.mp4";
import { motion } from "framer-motion";
import TransitionEffect from "../components/TransitionEffect";

const FramerImage = motion(Image);

const FeaturedProject = ({ type, title, summary, img, link, github }) => {
    return (
        <article
            className="
                w-full flex items-center justify-between rounded-br-2xl
                rounded-3xl border border-solid border-dark bg-light shadow-2xl
                p-12 relative dark:bg-dark dark:text-light dark:border-light
                flex-col lg:p-8 xs:rounded-2xl xs:rounded-br-3xl xs:p-4
            "
        >
            <div
                className="
                    absolute top-0 -right-3 -z-10 w-[100.8%] h-[102.5%] rounded-[2.5rem]
                    bg-dark dark:bg-light rounded-br-3xl 
                    xs:-right-2 xs:w-[99.8%] sm:h-[101.5%] xs:rounded-[2rem]
                "
            />
            <Link
                href={link}
                target="_blank"
                className=" cursor-pointer overflow-hidden rounded-lg w-full"
            >
                {typeof img === "string" && img.endsWith(".mp4") ? (
                    <video
                        autoPlay
                        loop
                        muted
                        playsInline
                        className="w-full h-auto rounded-lg"
                    >
                        <source src={img} type="video/mp4" />
                        Your browser does not support the video tag.
                    </video>
                ) : (
                    <FramerImage
                        src={img}
                        alt={title}
                        className="w-full h-auto"
                        whileHover={{ scale: 1.05 }}
                        transition={{ duration: 0.2 }}
                        priority
                        sizes="
                            (max-width: 768px) 100vw,
                            (max-width: 1200px) 50vw,
                            50vw
                        "
                    />
                )}
            </Link>

            <div className="flex flex-col items-start justify-between w-full pl-0 pt-6">
                <span className="text-primary font-medium capitalize text-xl dark:text-primaryDark xs:text-base">
                    {type}
                </span>
                <Link
                    href={link}
                    target="_blank"
                    className="hover:underline underline-offset-2"
                >
                    <h2 className="my-2 w-full text-left text-4xl font-bold capitalize xs:text-sm">
                        {title}
                    </h2>
                </Link>

                <p className="my-2 font-medium sm:text-sm">{summary}</p>
                <div className="mt-2 flex items-center">
                    <Link href={github} target="_blank" className="w-10">
                        <GithubIcon />
                    </Link>
                    <Link
                        href={link}
                        target="_blank"
                        className="
                            ml-4 rounded-lg bg-dark text-light p-2 px-6 text-lg font-semibold capitalize
                            dark:bg-light dark:text-dark
                            sm:px-4 sm:text-base
                        "
                    >
                        Visit Project
                    </Link>
                </div>
            </div>
        </article>
    );
};

const Project = ({ type, title, img, link, github }) => {
    return (
        <article
            className="
                w-full flex flex-col items-center justify-between
                rounded-2xl border border-solid border-dark bg-light
                p-6 relative dark:bg-dark dark:text-light dark:border-light
                xs:p-4
            "
        >
            <div
                className="
                    absolute top-0 -right-3 -z-10 w-[100.8%] h-[102.5%] rounded-[2rem]
                    bg-dark rounded-br-3xl dark:bg-light
                    md:-right-2 md:w-[99.8%] md:h-[101.5%] md:rounded-[1.5rem]
                "
            />
            <Link
                href={link}
                target="_blank"
                className="w-full cursor-pointer overflow-hidden rounded-lg"
            >
                {typeof img === "string" && img.endsWith(".mp4") ? (
                    <video
                        autoPlay
                        loop
                        muted
                        playsInline
                        className="w-full h-auto rounded-lg"
                    >
                        <source src={img} type="video/mp4" />
                        Your browser does not support the video tag.
                    </video>
                ) : (
                    <FramerImage
                        src={img}
                        alt={title}
                        className="w-full h-auto"
                        whileHover={{ scale: 1.05 }}
                        transition={{ duration: 0.2 }}
                        priority
                        sizes="
                            (max-width: 768px) 100vw,
                            (max-width: 1200px) 50vw,
                            50vw
                        "
                    />
                )}
            </Link>

            <div className="w-full flex flex-col items-start justify-between mt-4">
                <span className="text-primary font-medium capitalize text-xl dark:text-primaryDark lg:text-lg md:text-base">
                    {type}
                </span>
                <Link
                    href={link}
                    target="_blank"
                    className="hover:underline underline-offset-2"
                >
                    <h2 className="my-2 w-full text-left text-3xl font-bold capitalize lg:text-2xl md:text-xl">
                        {title}
                    </h2>
                </Link>

                <div className="w-full mt-2 flex items-center justify-between">
                    <Link
                        href={link}
                        target="_blank"
                        className="text-lg font-semibold capitalize underline underline-offset-2 md:text-base"
                    >
                        Visit
                    </Link>
                    <Link href={github} target="_blank" className="w-8 md:w-6">
                        <GithubIcon />
                    </Link>
                </div>
            </div>
        </article>
    );
};
const Projects = () => {
    return (
        <>
            <Head>
                <title> Kent | Projects Page</title>
                <meta name="description" content="Projects Kent" />
            </Head>
            <TransitionEffect />
            <main className="w-full mb-16 flex flex-col items-center justify-center">
                <Layout className="pt-16">
                    <AnimatedText
                        text="Projects"
                        className="mb-16 lg:!text-7xl sm:mb-8 sm:!text-6xl xs:!text-4xl"
                    />

                    <div className="grid grid-cols-12 gap-24 gap-y-32 xl:gap-x-16 lg:gap-x-8 md:gap-y-24 sm:gap-x-0">
                        <div className="col-span-6 sm:col-span-12">
                            <FeaturedProject
                                type="Machine Learning"
                                title="Angelite Forecast"
                                summary="
                                    A machine learning system that predicts university enrollment trends by analyzing 
                                    historical data and economic indicators like inflation rates and consumer price index
                                "
                                img={thesisInput}
                                link="https://www.google.com"
                                github="https://www.github.com/vurnkambal/AngeliteForecast/tree/master"
                            />
                        </div>
                        {/* <div className="col-span-6 sm:col-span-12 sm:col-span-12">
                            <Project
                                type="Featured Project"
                                title="Project 2"
                                img={project1}
                                link="https://www.google.com"
                                github="https://www.github.com/vurnkambal"
                            />
                        </div>
                        <div className="col-span-6 sm:col-span-12">
                            <Project
                                type="Featured Project"
                                title="Project 3"
                                img={project1}
                                link="https://www.google.com"
                                github="https://www.github.com/vurnkambal"
                            />
                        </div> */}

                        <div className="col-span-6 sm:col-span-12">
                            <FeaturedProject
                                type="Blockchain"
                                title="Invocation NFT"
                                summary="
                                    A blockchain educational project featuring an NFT gacha system and marketplace 
                                    inspired by Genshin Impact's TCG Invocation. Built with Hardhat, Vite, and 
                                    MetaMask integration, utilizing Genius Invokation TCG assets for learning purposes.
                                "
                                img={blockchainInvocation}
                                link="https://www.google.com"
                                github="https://www.github.com/vurnkambal"
                            />
                        </div>
                    </div>
                </Layout>
            </main>
        </>
    );
};

export default Projects;
