import { motion } from "framer-motion";
import style from "../sidebar.module.scss";

const variants = {
    open: {
        transition: {
            staggerChildren: 0.1,
            staggerDirection: 1,
        },
    },
    closed: {
        transition: {
            staggerChildren: 0.1,
            staggerDirection: -1,
        },
    },
};

const variantsItem = {
    open: {
        y: 0,
        opacity: 1,
        transition: {
            y: { type: "spring", stiffness: 300, damping: 24 },
            opacity: { duration: 0.2 },
        },
    },
    closed: {
        y: 40,
        opacity: 0,
        transition: {
            duration: 0.2,
        },
    },
};

export default function Linkes() {
    const links = [
        { href: "#home", tabTitle: "Home" },
        { href: "#about-me", tabTitle: "About" },
        { href: "#portfolio", tabTitle: "Portfolio" },
        { href: "#contact-me", tabTitle: "Contact" },
    ];

    return (
        <motion.div className={style.links} variants={variants} >
            {links.map((link, index) => (
                <motion.a key={index} href={link.href} variants={variantsItem} whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }} >
                    {link.tabTitle}
                </motion.a>
            ))}
        </motion.div>
    );
}
