import { motion } from 'framer-motion';
import style from './hero.module.scss';

export default function Hero() {
    const textVariants = {
        initial: { opacity: 0, x: -500 },
        animate: { opacity: 1, x: 0, transition: { duration: 0.5, staggerChildren: 0.1 } },
        scrollBtn: { opacity: 0, y: 20, transition: { duration: 1.8, repeat: Infinity } },
    }
    const sliderVariants = {
        initial: {
            x: 0,
        },
        animate: {
            x: "-100%",
            transition: {
                repeat: Infinity,
                repeatType: "mirror",
                duration: 15,
            },
        },
    };

    return (

        <div className={style.hero}>
            <div className={`container ${style.heroContainer}`}>
                <motion.div className={style.heroText} initial="initial" animate="animate" variants={textVariants}>
                    <motion.span variants={textVariants}>MADONNA ADEL</motion.span>
                    <motion.h1 variants={textVariants}>Frontend Web Developer</motion.h1>
                    <motion.a href="#portfolio" variants={textVariants}>Explore my projects</motion.a>
                    <motion.a href="#contact-me" variants={textVariants}>Contact me</motion.a>

                    <motion.div className={style.scrollDown} variants={textVariants} animate="scrollBtn">
                        <motion.img src=" /scroll.png" alt="Scroll Down Arrow" variants={textVariants} animate="scrollBtn" />
                    </motion.div>

                </motion.div>
                <motion.div
                    className={style.slidingTextContainer}
                    variants={sliderVariants}
                    initial="initial"
                    animate="animate"
                >
                    Always learning, always growing as a programmer.
                </motion.div>
                <div className={style.heroImage}>
                    <img src="/hero.svg" alt="Hero" />
                </div>
            </div>

        </div>


    )
}
