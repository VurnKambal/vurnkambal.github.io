import AnimatedText from "../components/AnimatedText";
import { GithubIcon } from "../components/Icons";
import Layout from "../components/Layout";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import thesisInput from "../../public/images/projects/thesis-input.png";
import blockchainInvocation from "../../public/videos/projects/blockchain-invocation-marketplace.mp4";
import cloudInvocation from "../../public/videos/projects/cloudcomp-invocation-gacha.mp4";
import { motion } from "framer-motion";
import TransitionEffect from "../components/TransitionEffect";
import Lightbox from "yet-another-react-lightbox";
import Zoom from "yet-another-react-lightbox/plugins/zoom";
import "yet-another-react-lightbox/styles.css";

const FramerImage = motion(Image);

const ImageModal = ({ image, title, summary, onClose }) => {
    const videoRef = React.useRef(null);
    const isVideo = typeof image === "string" && image.endsWith(".mp4");

    // Set the current time when the video element is loaded
    React.useEffect(() => {
        if (isVideo && videoRef.current && image.currentTime) {
            videoRef.current.currentTime = image.currentTime;
        }
    }, [isVideo, image]);

    return (
        <Lightbox
            open={true}
            close={onClose}
            slides={[
                {
                    type: isVideo ? "video" : "image",
                    src: typeof image === "string" ? image : image.src,
                    width: 1280,
                    height: 720,
                },
            ]}
            plugins={[Zoom]}
            carousel={{ finite: true }}
            animation={{ fade: 0 }}
            zoom={{
                maxZoomPixelRatio: 5,
                scrollToZoom: true,
                wheelZoomDistanceFactor: 100,
                pinchZoomDistanceFactor: 100,
                doubleClickMaxStops: 2,
                doubleClickDelay: 300,
            }}
            styles={{
                container: { backgroundColor: "rgba(0, 0, 0, 0.9)" },
                root: { "--yarl__color_backdrop": "rgba(0, 0, 0, 0.9)" },
                slide: {
                    padding: "0 0 6rem 0",
                },
            }}
            render={{
                iconNext: () => null,
                iconPrev: () => null,
                buttonNext: () => null,
                buttonPrev: () => null,
                slide: ({ slide }) => {
                    if (slide.type === "video") {
                        return (
                            <video
                                ref={videoRef}
                                autoPlay
                                loop
                                muted
                                playsInline
                                controls
                                className="w-full h-auto max-h-[80vh]"
                                style={{ maxWidth: "90vw" }}
                            >
                                <source src={slide.src} type="video/mp4" />
                                Your browser does not support the video tag.
                            </video>
                        );
                    }
                    return null; // Let the default renderer handle images
                },
                slideContainer: ({ children }) => (
                    <>
                        <div className="relative h-full">
                            <div className="h-full flex items-center justify-center">
                                {children}
                            </div>
                        </div>

                        <div className="absolute bottom-0 left-0 right-0 bg-light/90 dark:bg-dark/90 p-4 text-center">
                            <h2 className="text-xl font-bold text-dark dark:text-light">
                                {title}
                            </h2>
                            <p className="text-dark/60 dark:text-light/60 text-sm">
                                {summary}
                            </p>
                        </div>
                    </>
                ),
            }}
        />
    );
};

const FeaturedProject = ({
    type,
    title,
    summary,
    img,
    github,
    setSelectedImage,
}) => {
    const videoRef = React.useRef(null);

    return (
        <article
            className="
                w-full flex items-center justify-between rounded-br-2xl
                rounded-3xl border border-solid border-dark bg-light shadow-2xl
                p-12 relative dark:bg-dark dark:text-light dark:border-light
                flex-col lg:p-8 xs:rounded-2xl xs:rounded-br-3xl xs:p-4
                h-full
            "
        >
            <div
                className="
                    absolute top-0 -right-3 -z-10 w-[100.8%] h-[102.5%] rounded-[2.5rem]
                    bg-dark dark:bg-light rounded-br-3xl 
                    xs:-right-2 xs:w-[99.8%] sm:h-[101.5%] xs:rounded-[2rem]
                "
            />
            <div
                className="
                    cursor-pointer overflow-hidden rounded-lg w-full
                    flex items-center justify-center
                    mb-8
                "
                onClick={() => {
                    setSelectedImage({
                        src: img,
                        title,
                        summary,
                        currentTime: videoRef.current?.currentTime || 0,
                    });
                }}
            >
                {typeof img === "string" && img.endsWith(".mp4") ? (
                    <video
                        ref={videoRef}
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
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 50vw"
                    />
                )}
            </div>

            <div className="flex flex-col items-start justify-between w-full min-h-[250px]">
                <div>
                    <span className="text-primary font-medium capitalize text-xl dark:text-primaryDark xs:text-base">
                        {type}
                    </span>
                    <Link
                        href={github}
                        target="_blank"
                        className="hover:underline underline-offset-2"
                    >
                        <h2 className="my-2 w-full text-left text-4xl font-bold capitalize xs:text-sm">
                            {title}
                        </h2>
                    </Link>

                    <p className="my-2 font-medium sm:text-sm">{summary}</p>
                </div>

                <div className="mt-6 flex items-center">
                    <Link href={github} target="_blank" className="w-10">
                        <GithubIcon />
                    </Link>
                    <Link
                        href={github}
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
    const [selectedImage, setSelectedImage] = useState(null);

    useEffect(() => {
        console.log(selectedImage);
        if (selectedImage) {
            document.body.style.overflow = "hidden";
            document.body.style.paddingRight = `${
                window.innerWidth - document.documentElement.clientWidth
            }px`;
        } else {
            document.body.style.overflow = "";
            document.body.style.paddingRight = "";
        }

        return () => {
            document.body.style.overflow = "";
            document.body.style.paddingRight = "";
        };
    }, [selectedImage]);
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

                    <div className="grid grid-cols-12 gap-16 gap-y-24 xl:gap-x-16 lg:gap-x-8 md:gap-y-24 sm:gap-x-0">
                        <div className="col-span-12">
                            <FeaturedProject
                                type="Machine Learning"
                                title="Angelite Forecast"
                                summary="
                                    A machine learning system that predicts enrollment trends by analyzing 
                                    historical data and economic indicators, such as inflation rates and the consumer 
                                    price index. The system utilizes algorithms including Linear Regression, KNN, Random 
                                    Forest, XGBoost  DART, Simple Exponential Smoothing, Moving Average, and an 
                                    Ensemble model combining Random Forest, XGBoost DART, and Simple Exponential 
                                    Smoothing. These algorithms were compared with existing forecasting methods to 
                                    assess their effectiveness in predicting future enrollment patterns.
                                "
                                img={thesisInput}
                                github="https://www.github.com/vurnkambal/AngeliteForecast/tree/master"
                                setSelectedImage={setSelectedImage}
                            />
                        </div>

                        <div className="col-span-6 sm:col-span-12">
                            <FeaturedProject
                                type="Blockchain"
                                title="Invocation NFT"
                                summary="
                                    A blockchain educational project featuring an NFT gacha system and marketplace 
                                    inspired by Genshin Impact's TCG Invocation. Built with Hardhat, Vite, and 
                                    MetaMask integration. Assets are stored on IPFS via Pinata, utilizing Genius 
                                    Invokation TCG assets for learning purposes.
                                "
                                img={blockchainInvocation}
                                github="https://www.github.com/vurnkambal/Invocation/tree/master"
                                setSelectedImage={setSelectedImage}
                            />
                        </div>

                        <div className="col-span-6 sm:col-span-12">
                            <FeaturedProject
                                type="Cloud Computing"
                                title="Invocation Cloud"
                                summary="
                                    A cloud-based version of the Invocation gacha system, reimagined as a classic 
                                    non-blockchain application. Features YouTube API integration for ad implementation 
                                    and is deployed on AWS with DocumentDB (MongoDB) for data persistence. This project 
                                    demonstrates cloud architecture and deployment practices.
                                "
                                img={cloudInvocation}
                                github="https://www.github.com/vurnkambal/InvocationCloud/tree/master"
                                setSelectedImage={setSelectedImage}
                            />
                        </div>
                    </div>
                </Layout>
            </main>

            {selectedImage && (
                <ImageModal
                    image={selectedImage.src}
                    title={selectedImage.title}
                    summary={selectedImage.summary}
                    onClose={() => setSelectedImage(null)}
                />
            )}
        </>
    );
};

export default Projects;
