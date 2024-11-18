import AnimatedText from "../components/AnimatedText";
import { GithubIcon } from "../components/Icons";
import Layout from "../components/Layout";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import React, { useState, useRef, useEffect } from "react";
import blockchainConf from "../../public/images/certificates/blockchain-conference-blurred.jpg";
import ctd1st from "../../public/images/certificates/CtD-1st-blurred.jpg";
import ctd2nd from "../../public/images/certificates/CtD-2nd.jpg";
import cybersecurityConf from "../../public/images/certificates/cybersecurity-conference-blurred.png";
import dataScraping from "../../public/images/certificates/data-scraping.png";
import enigma from "../../public/images/certificates/enigma.png";
import gdscPerennial from "../../public/images/certificates/gdsc-perennial.png";
import hextechFifth from "../../public/images/certificates/hextech-fifth-place-blurred.png";
import stackleagueChiefs from "../../public/images/certificates/stackleague-codingchiefs-blurred.png";
import stackleagueGold from "../../public/images/certificates/stackleague-gold.png";
import stackleagueSilver from "../../public/images/certificates/stackleague-silver.png";
import tahakTech1 from "../../public/images/certificates/tahak-tech-day1-blurred.png";
import tahakTech2 from "../../public/images/certificates/tahak-tech-day2-blurred.png";
import tahakTech3 from "../../public/images/certificates/tahak-tech-day3-blurred.png";
import tahakTech4 from "../../public/images/certificates/tahak-tech-day4-blurred.png";
import taraML1 from "../../public/images/certificates/taraml-day1-blurred.png";
import taraML2 from "../../public/images/certificates/taraml-day2-blurred.png";
import taraML3 from "../../public/images/certificates/taraml-day3-blurred.png";
import cloudFoundations from "../../public/images/badges/cloud-foundations.png";
import cyberopsAssociate from "../../public/images/badges/cyberops-associate.png";
import cybersecurityIntro from "../../public/images/badges/cybersecurity-intro.png";
import deepracer from "../../public/images/badges/deepracer.png";
import iotIntro from "../../public/images/badges/iot-intro.png";
import networkIntroCcna from "../../public/images/badges/network-intro-ccna.png";
import python1 from "../../public/images/badges/python-1.png";
import { motion } from "framer-motion";
import TransitionEffect from "../components/TransitionEffect";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import "swiper/css/autoplay";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import Lightbox from "yet-another-react-lightbox";
import Zoom from "yet-another-react-lightbox/plugins/zoom";
import "yet-another-react-lightbox/styles.css";

const FramerImage = motion(Image);

const ImageModal = ({ image, title, issuer, date, onClose }) => {
    return (
        <Lightbox
            open={true}
            close={onClose}
            slides={[{ src: image.src || image }]}
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
                            {issuer && (
                                <p className="text-primary dark:text-primaryDark">
                                    {issuer}
                                </p>
                            )}
                            <p className="text-dark/60 dark:text-light/60 text-sm">
                                {date}
                            </p>
                        </div>
                    </>
                ),
            }}
        />
    );
};

const Certificate = ({ title, issuer, date, img, setSelectedImage }) => {
    return (
        <article className="w-full flex flex-col items-center justify-between rounded-2xl border border-solid border-dark bg-light p-6 relative dark:bg-dark dark:text-light dark:border-light xs:p-4">
            <div className="absolute top-0 -right-3 -z-10 w-[100.8%] h-[102.5%] rounded-[2rem] bg-dark rounded-br-3xl dark:bg-light md:-right-2 md:w-[99.8%] md:h-[101.5%] md:rounded-[1.5rem]" />

            <div
                onClick={() =>
                    setSelectedImage({ src: img, title, issuer, date })
                }
                className="w-full cursor-pointer overflow-hidden rounded-lg"
            >
                <FramerImage
                    src={img}
                    alt={title}
                    className="w-full h-auto"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.2 }}
                    priority
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 50vw"
                />
            </div>

            <div className="w-full flex flex-col items-start justify-between mt-4">
                <h2 className="my-2 w-full text-left text-2xl font-bold lg:text-xl md:text-lg">
                    {title}
                </h2>
                {issuer && (
                    <p className="text-primary dark:text-primaryDark text-lg md:text-base">
                        {issuer}
                    </p>
                )}
                <p className="text-dark dark:text-light text-sm">{date}</p>
            </div>
        </article>
    );
};

const CredlyBadge = ({
    title,
    issuer,
    date,
    img,
    badgeId,
    setSelectedImage,
}) => {
    return (
        <article className="w-full flex flex-col items-center justify-between rounded-2xl border border-solid border-dark bg-light p-6 relative dark:bg-dark dark:text-light dark:border-light xs:p-4">
            <div className="absolute top-0 -right-3 -z-10 w-[100.8%] h-[102.5%] rounded-[2rem] bg-dark rounded-br-3xl dark:bg-light md:-right-2 md:w-[99.8%] md:h-[101.5%] md:rounded-[1.5rem]" />

            <div
                onClick={() => setSelectedImage({ src: img, title })}
                className="w-40 h-40 cursor-pointer overflow-hidden"
            >
                <FramerImage
                    src={img}
                    alt={title}
                    className="w-full h-full"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.2 }}
                    priority
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 50vw"
                />
            </div>

            <div className="w-full flex flex-col items-center justify-between mt-4 text-center">
                <h2 className="my-2 w-full text-xl font-bold lg:text-lg md:text-base">
                    {title}
                </h2>
                <p className="text-primary dark:text-primaryDark text-lg md:text-base">
                    {issuer}
                </p>
                <p className="text-dark dark:text-light text-sm">{date}</p>
                <a
                    href={`https://www.credly.com/badges/${badgeId}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-3 text-lg font-semibold underline underline-offset-2"
                >
                    Verify
                </a>
            </div>
        </article>
    );
};

const CertificateSeries = ({ title, certificates, setSelectedImage }) => {
    return (
        <article className="w-full flex flex-col items-center justify-between rounded-2xl border border-solid border-dark bg-light p-6 relative dark:bg-dark dark:text-light dark:border-light xs:p-4">
            <div className="absolute top-0 -right-3 -z-10 w-[100.8%] h-[102.5%] rounded-[2rem] bg-dark rounded-br-3xl dark:bg-light md:-right-2 md:w-[99.8%] md:h-[101.5%] md:rounded-[1.5rem]" />

            <Swiper
                modules={[Autoplay, Pagination, Navigation]}
                pagination={{ clickable: true }}
                navigation
                loop={true}
                autoplay={{
                    delay: 3000,
                    disableOnInteraction: false,
                    pauseOnMouseEnter: true,
                }}
                className="w-full cursor-pointer overflow-hidden rounded-lg"
                spaceBetween={30}
                slidesPerView={1}
            >
                {certificates.map((cert, index) => (
                    <SwiperSlide key={index}>
                        <Link
                            href={cert.link}
                            target="_blank"
                            className="w-full cursor-pointer overflow-hidden rounded-lg"
                        >
                            <FramerImage
                                src={cert.img}
                                alt={cert.title}
                                className="w-full h-auto"
                                whileHover={{ scale: 1.05 }}
                                transition={{ duration: 0.2 }}
                                priority
                                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 50vw"
                            />
                        </Link>
                    </SwiperSlide>
                ))}
            </Swiper>

            <div className="w-full flex flex-col items-start justify-between mt-4">
                <span className="text-primary font-medium text-xl dark:text-primaryDark lg:text-lg md:text-base">
                    {title}
                </span>
            </div>
        </article>
    );
};

const Certificates = () => {
    const [selectedImage, setSelectedImage] = useState(null);

    // Add useEffect to handle body scroll locking
    useEffect(() => {
        if (selectedImage) {
            // Lock scrolling
            document.body.style.overflow = "hidden";
            // Add padding to prevent content shift when scrollbar disappears
            document.body.style.paddingRight = `${
                window.innerWidth - document.documentElement.clientWidth
            }px`;
        } else {
            // Restore scrolling
            document.body.style.overflow = "";
            document.body.style.paddingRight = "";
        }

        // Cleanup function
        return () => {
            document.body.style.overflow = "";
            document.body.style.paddingRight = "";
        };
    }, [selectedImage]);

    return (
        <>
            <Head>
                <title>Kent | Certificates & Achievements</title>
                <meta
                    name="description"
                    content="Kent's Certificates and Achievements"
                />
            </Head>
            <TransitionEffect />
            <main className="w-full mb-16 flex flex-col items-center justify-center">
                <Layout className="pt-16">
                    <AnimatedText
                        text="Certificates & Achievements"
                        className="mb-16 lg:!text-7xl sm:mb-8 sm:!text-6xl xs:!text-4xl"
                    />

                    <div className="grid grid-cols-2 gap-12 lg:gap-8 md:grid-cols-1">
                        <Certificate
                            title="1st Regional Blockchain Conference"
                            // issuer="Conference Organizer"
                            date="July 2024"
                            img={blockchainConf}
                            link="#"
                            setSelectedImage={setSelectedImage}
                        />

                        <Certificate
                            title="Code to Death 2021 Champion"
                            // issuer="Competition Organizer"
                            date="2021"
                            img={ctd1st}
                            link="#"
                            setSelectedImage={setSelectedImage}
                        />

                        <Certificate
                            title="Code to Death 2022 Champion"
                            // issuer="Competition Organizer"
                            date="2022"
                            img={ctd2nd}
                            link="#"
                            setSelectedImage={setSelectedImage}
                        />

                        <Certificate
                            title="2nd Regional Cybersecurity Conference"
                            // issuer="Conference Organizer"
                            date="2024"
                            img={cybersecurityConf}
                            link="#"
                            setSelectedImage={setSelectedImage}
                        />

                        <Certificate
                            title="Data Scraping Workshop"
                            // issuer="Workshop Organizer"
                            date="2024"
                            img={dataScraping}
                            link="#"
                            setSelectedImage={setSelectedImage}
                        />

                        <Certificate
                            title="Through The Eyes of Enigma"
                            // issuer="Organization"
                            date="January 2022"
                            img={enigma}
                            link="#"
                            setSelectedImage={setSelectedImage}
                        />

                        <Certificate
                            title="Perennial"
                            // issuer="Google Developer Student Clubs"
                            date="2024"
                            img={gdscPerennial}
                            link="#"
                            setSelectedImage={setSelectedImage}
                        />

                        <Certificate
                            title="Tech Careerscape - 5th Place"
                            // issuer="Competition Organizer"
                            date="2024"
                            img={hextechFifth}
                            link="#"
                            setSelectedImage={setSelectedImage}
                        />

                        <Certificate
                            title="StackLeague x CodingChiefs"
                            // issuer="StackLeague"
                            date="2024"
                            img={stackleagueChiefs}
                            link="#"
                            setSelectedImage={setSelectedImage}
                        />

                        <Certificate
                            title="StackLeague Gold Achievement"
                            // issuer="StackLeague"
                            date="2024"
                            img={stackleagueGold}
                            link="#"
                            setSelectedImage={setSelectedImage}
                        />

                        <CertificateSeries
                            title="Tahak Tech Series"
                            certificates={[
                                {
                                    title: "Tahak Tech",
                                    // issuer: "Tahak Tech",
                                    date: "2024",
                                    img: tahakTech1,
                                    link: "#",
                                },
                                {
                                    title: "Tahak Tech",
                                    // issuer: "Tahak Tech",
                                    date: "2024",
                                    img: tahakTech2,
                                    link: "#",
                                },
                                {
                                    title: "Tahak Tech",
                                    // issuer: "Tahak Tech",
                                    date: "2024",
                                    img: tahakTech3,
                                    link: "#",
                                },
                                {
                                    title: "Tahak Tech",
                                    // issuer: "Tahak Tech",
                                    date: "2024",
                                    img: tahakTech4,
                                    link: "#",
                                },
                            ]}
                            setSelectedImage={setSelectedImage}
                        />

                        <CertificateSeries
                            title="TaraML Workshop Series"
                            certificates={[
                                {
                                    title: "TaraML Workshop",
                                    // issuer: "TaraML",
                                    date: "2024",
                                    img: taraML1,
                                    link: "#",
                                },
                                {
                                    title: "TaraML Workshop",
                                    // issuer: "TaraML",
                                    date: "2024",
                                    img: taraML2,
                                    link: "#",
                                },
                                {
                                    title: "TaraML Workshop",
                                    // issuer: "TaraML",
                                    date: "2024",
                                    img: taraML3,
                                    link: "#",
                                },
                            ]}
                            setSelectedImage={setSelectedImage}
                        />
                    </div>

                    <AnimatedText
                        text="Digital Badges"
                        className="my-16 lg:!text-7xl sm:mb-8 sm:!text-6xl xs:!text-4xl"
                    />

                    <div className="grid grid-cols-3 gap-12 lg:gap-8 md:grid-cols-2 sm:grid-cols-1">
                        <CredlyBadge
                            title="AWS Cloud Foundations"
                            issuer="AWS Educate"
                            date="2024"
                            img={cloudFoundations}
                            badgeId="b212682a-0bab-476a-935f-cbc9e1ecc4aa"
                            setSelectedImage={setSelectedImage}
                        />

                        <CredlyBadge
                            title="CyberOps Associate"
                            issuer="Cisco"
                            date="2024"
                            img={cyberopsAssociate}
                            badgeId="54572a26-6fde-4019-8093-8f68e2b4466b"
                            setSelectedImage={setSelectedImage}
                        />

                        <CredlyBadge
                            title="Introduction to Cybersecurity"
                            issuer="Cisco"
                            date="2024"
                            img={cybersecurityIntro}
                            badgeId="54985b9c-e78e-4690-a123-1979ff74dec1"
                            setSelectedImage={setSelectedImage}
                        />

                        <CredlyBadge
                            title="Machine Learning - DeepRacer"
                            issuer="AWS Educate"
                            date="2024"
                            img={deepracer}
                            badgeId="ee93bac2-06e8-4aff-bd07-6973aaac23c0"
                            setSelectedImage={setSelectedImage}
                        />

                        <CredlyBadge
                            title="Introduction to IoT"
                            issuer="Cisco"
                            date="2024"
                            img={iotIntro}
                            badgeId="e448e991-ab7f-4e4a-97de-662777e0f23e"
                            setSelectedImage={setSelectedImage}
                        />

                        <CredlyBadge
                            title="CCNA: Introduction to Networks"
                            issuer="Cisco"
                            date="2024"
                            img={networkIntroCcna}
                            badgeId="45af9748-0c36-476a-a93e-7375a53aa6b7"
                            setSelectedImage={setSelectedImage}
                        />

                        <CredlyBadge
                            title="Python Essentials 1"
                            issuer="Cisco"
                            date="2024"
                            img={python1}
                            badgeId="4a5982b9-40fd-4ac4-b6ff-547dc17e373c"
                            setSelectedImage={setSelectedImage}
                        />
                    </div>
                </Layout>
            </main>
            {selectedImage && (
                <ImageModal
                    image={selectedImage.src}
                    title={selectedImage.title}
                    issuer={selectedImage.issuer}
                    date={selectedImage.date}
                    onClose={() => setSelectedImage(null)}
                />
            )}
        </>
    );
};

export default Certificates;
