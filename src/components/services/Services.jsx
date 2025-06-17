import { useRef } from 'react';
import style from './services.module.scss';
import { motion } from 'framer-motion';
export default function Services() {
    const variants = {
        initial: {
            x: -500,
            y: 100,
            opacity: 0,
        },
        animate: {
            x: 0,
            opacity: 1,
            y: 0,
            transition: {
                duration: 1,
                staggerChildren: 0.1,
            },
        }
    }
    const ref = useRef();

    return (
        <motion.div className={style.services} >
            <motion.div className={`container ${style.mainContainer}`} variants={variants}
                initial="initial" animate="animate" ref={ref}>
                <motion.div className={style.contTitle} variants={variants}>
                    <motion.p>
                        I focus on helping your brand grow
                        <motion.br />
                        and move forward
                    </motion.p>
                    <motion.hr />
                </motion.div>
                <motion.div className={style.contText} variants={variants}>
                    <motion.div className={style.title}>
                        <motion.img src=" /people.webp" alt="people" width="400px" />
                        <motion.h1>
                            <motion.b whileHover={{ color: "orange" }}>Unique</motion.b> Ideas
                        </motion.h1>
                    </motion.div>
                    <motion.div className={style.title}>
                        <motion.h1>
                            <motion.b whileHover={{ color: "orange" }}>For Your</motion.b> Business.
                        </motion.h1>
                        <motion.button> WHAT WE DO?</motion.button>
                    </motion.div>
                </motion.div>
                <motion.div className={style.servicesList} variants={variants}>
                    <motion.div className={style.service}>
                        <motion.h2>Branding</motion.h2>
                        <motion.p>
                            We create unique and memorable brand identities that resonate with your target audience.
                        </motion.p>
                        <button>Go</button>
                    </motion.div>
                    <motion.div className={style.service}>
                        <motion.h2>Web Design</motion.h2>
                        <motion.p>
                            Our web design services focus on creating user-friendly and visually appealing websites.
                        </motion.p>
                        <button>Go</button>

                    </motion.div>
                    <motion.div className={style.service}>
                        <motion.h2>Digital Marketing</motion.h2>
                        <motion.p>
                            We help you reach your audience through effective digital marketing strategies.
                        </motion.p>
                        <button>Go</button>

                    </motion.div>
                </motion.div>
            </motion.div>
        </motion.div >
    )
}
