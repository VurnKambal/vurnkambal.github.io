import Link from "next/link";
import React, { useState } from "react";
import Logo from "./Logo";
import { useRouter } from "next/router";
import {
    TwitterIcon,
    GithubIcon,
    LinkedInIcon,
    SunIcon,
    MoonIcon,
} from "./Icons";
import { motion } from "framer-motion";
import useThemeSwitcher from "./hooks/useThemeSwitcher";

const CustomLink = ({ href, title, className = "" }) => {
    const router = useRouter();
    return (
        <Link href={href} className={`${className} relative group`}>
            {title}
            <span
                className={`
                    h-[2px] inline-block bg-dark absolute left-0 -bottom-0.5
                    group-hover:w-full transition-[width] ease duration-300
                    ${router.asPath === href ? "w-full" : "w-0"}
                    dark:bg-light
                `}
            >
                &nbsp;
            </span>
        </Link>
    );
};

const CustomMobileLink = ({ href, title, className = "", toggle }) => {
    const router = useRouter();

    const handleClick = () => {
        toggle();
        router.push(href);
    };
    return (
        <button
            onClick={handleClick}
            href={href}
            className={`${className} relative group my-2`}
        >
            {title}
            <span
                className={`
                    h-[2px] inline-block bg-light absolute left-0 -bottom-0.5
                    group-hover:w-full transition-[width] ease duration-300
                    ${router.asPath === href ? "w-full" : "w-0"}
                    dark:bg-dark
                `}
            >
                &nbsp;
            </span>
        </button>
    );
};
const NavBar = () => {
    const [mode, setMode] = useThemeSwitcher();
    const [isOpen, setIsOpen] = useState(false);

    const toggleNav = () => {
        setIsOpen(!isOpen);
    };
    return (
        <header
            className="
                w-full px-32 py-8 font-medium flex items-center justify-between
                dark:text-light relative z-10 lg:px-16 md:px-12 sm:px-8
            "
        >
            <button
                className="flex-col items-center justify-center hidden lg:flex"
                onClick={toggleNav}
            >
                <span
                    className={`bg-dark dark:bg-light block h-0.5 w-6 rounded-sm transition-all duration-300 ease-out ${
                        isOpen ? "rotate-45 translate-y-1" : "-translate-y-0.5"
                    }`}
                ></span>
                <span
                    className={`
                        bg-dark dark:bg-light block h-0.5 w-6 rounded-sm my-0.5 transition-all duration-300 ease-out ${
                            isOpen ? "opacity-0" : "opacity-100"
                        }
                    `}
                ></span>
                <span
                    className={`bg-dark dark:bg-light block h-0.5 w-6 rounded-sm transition-all duration-300 ease-out ${
                        isOpen ? "-rotate-45 -translate-y-1" : "translate-y-0.5"
                    }`}
                ></span>
            </button>
            <div className="w-full flex justify-between items-center lg:hidden">
                <nav>
                    <CustomLink href="/" title="Home" className="mr-4" />
                    <CustomLink
                        href="/projects"
                        title="Projects"
                        className="mx-4"
                    />
                    <CustomLink
                        href="/certificates"
                        title="Certificates"
                        className="mx-4"
                    />
                    <CustomLink href="/about" title="About" className="mx-4" />
                    {/* <CustomLink
                    href="/articles"
                    title="Articles"
                    className="ml-4"
                /> */}
                </nav>
                <nav className="flex items-center justify-center flex-wrap">
                    {/* <Link href="/" target={"_blank"}>
                    <TwitterIcon />
                </Link> */}
                    <motion.a
                        href="https://github.com/vurnkambal"
                        target={"_blank"}
                        className="w-6 mr-3"
                        whileHover={{ y: -2 }}
                        whileTap={{ scale: 0.9 }}
                    >
                        <GithubIcon />
                    </motion.a>
                    <motion.a
                        href="https://www.linkedin.com/in/verneil-kent-batiller/"
                        target={"_blank"}
                        className="w-6 ml-3"
                        whileHover={{ y: -2 }}
                        whileTap={{ scale: 0.9 }}
                    >
                        <LinkedInIcon />
                    </motion.a>
                    <button
                        onClick={() =>
                            setMode(mode === "light" ? "dark" : "light")
                        }
                        className={`
                        ml-3 flex items-center justify-center rounded-full p-1
                        `}
                    >
                        {mode === "dark" ? (
                            <SunIcon className={"fill-dark"} />
                        ) : (
                            <MoonIcon className={"fill-light"} />
                        )}
                    </button>
                </nav>
            </div>
            {isOpen && (
                <motion.div
                    initial={{ scale: 0, opacity: 0, x: "-50%", y: "-50%" }}
                    animate={{ scale: 1, opacity: 1 }}
                    exit={{ scale: 0, opacity: 0, x: "-50%", y: "-50%" }}
                    transition={{ duration: 0.2 }}
                    className="
                min-w-[70vw] flex flex-col justify-between items-center fixed top-1/2 left-1/2
                -translate-x-1/2 -translate-y-1/2 bg-dark/90 backdrop-blur-md z-50 py-32 rounded-lg text-light
                dark:bg-light/75 dark:text-dark
            "
                >
                    <nav className="flex flex-col items-center justify-center">
                        <CustomMobileLink
                            href="/"
                            title="Home"
                            toggle={toggleNav}
                        />
                        <CustomMobileLink
                            href="/projects"
                            title="Projects"
                            toggle={toggleNav}
                        />
                        <CustomMobileLink
                            href="/certificates"
                            title="Certificates"
                            toggle={toggleNav}
                        />
                        <CustomMobileLink
                            href="/about"
                            title="About"
                            toggle={toggleNav}
                        />

                        {/* <CustomMobileLink
                    href="/articles"
                    title="Articles"
                    className="ml-4"
                    toggle={toggleNav}
                /> */}
                    </nav>
                    <nav className="flex items-center justify-center flex-wrap mt-2">
                        {/* <Link href="/" target={"_blank"}>
                    <TwitterIcon />
                </Link> */}
                        <motion.a
                            href="https://github.com/vurnkambal"
                            target={"_blank"}
                            className="w-6 mr-3 sm:mx-1"
                            whileHover={{ y: -2 }}
                            whileTap={{ scale: 0.9 }}
                        >
                            <GithubIcon />
                        </motion.a>
                        <motion.a
                            href="https://www.linkedin.com/in/verneil-kent-batiller/"
                            target={"_blank"}
                            className="w-6 ml-3 sm:mx-1"
                            whileHover={{ y: -2 }}
                            whileTap={{ scale: 0.9 }}
                        >
                            <LinkedInIcon />
                        </motion.a>
                        <button
                            onClick={() =>
                                setMode(mode === "light" ? "dark" : "light")
                            }
                            className={`
                        ml-3 flex items-center justify-center rounded-full p-1 sm:mx-1
                        `}
                        >
                            {mode === "dark" ? (
                                <SunIcon className={"fill-dark"} />
                            ) : (
                                <MoonIcon className={"fill-light"} />
                            )}
                        </button>
                    </nav>
                </motion.div>
            )}
            <div className="absolute left-[50%] top-2 translate-x-[-50%]">
                <Logo />
            </div>
        </header>
    );
};

export default NavBar;
