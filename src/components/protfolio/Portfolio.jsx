import { useRef, useEffect, useState } from 'react';
import style from './portfolio.module.scss';
import { motion, useScroll, useSpring, useTransform } from 'framer-motion';

const items = [
    {
        id: 1,
        title: "Careers App",
        img: "/careers.png",
        desc: "A modern job portal application featuring intuitive job search, filtering capabilities, and responsive design to connect job seekers with employers.",
        link: "https://careers--psi.vercel.app/",
    },
    {
        id: 2,
        title: "Trading Stars Academy",
        img: "/Trading (1).png",
        desc: "A high-performance blog platform built with react, offering SEO optimization, fast page loads, and a clean content management experience.",
        link: "https://www.tradingstarsacademy.com/",
    },
    {
        id: 3,
        title: "Dashboard App",
        img: "/dashboard.png",
        desc: "An interactive admin dashboard with data visualization, user management, and responsive design - built with React typescript and modern UI libraries.",
        link: "https://react-dashboard-one-flax.vercel.app/",
    },
    {
        id: 4,
        title: "Siemon",
        img: "/simone (1).png",
        desc: "A modern, minimalist UI design with elegant typography, smooth animations and a cohesive color scheme. Features clean layouts, intuitive navigation and attention to visual hierarchy for optimal user experience.",
        link: "https://madonnaadel.github.io/Siemon/",
    }
];

const DESKTOP_BREAKPOINT = 1024; 

const PortfolioItem = ({ item }) => {
    const ref = useRef();
    const [isDesktop, setIsDesktop] = useState(false); 

    useEffect(() => {
        const checkScreenSize = () => {
            setIsDesktop(window.innerWidth >= DESKTOP_BREAKPOINT);
        };

        checkScreenSize(); 
        window.addEventListener('resize', checkScreenSize); 

        return () => window.removeEventListener('resize', checkScreenSize);
    }, []);

    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start end", "end start"],
    });

    const y = useTransform(scrollYProgress, [0, 1],
        isDesktop ? [800, -800] : [0, 0] 
    );
    const opacity = useTransform(scrollYProgress, [0, 0.5], [0, 1]); 

    return (
        <section className={style.portfolioItem}>
            <div className={`container ${style.portfolioContainer}`}>
                <motion.div className={style.itemImage} ref={ref}>
                    <img src={item.img} alt={item.title} />
                </motion.div>
                <motion.div
                    className={style.itemDetails}
                    style={{ y, opacity }}
                >
                    <h2>{item.title}</h2>
                    <p>{item.desc}</p>
                    {item.link && <a href={item.link}>Live Demo</a>}
                </motion.div>
            </div>
        </section>
    );
};

export default function Portfolio() {
    const ref = useRef();
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["end end", "start start"],
    });
    const scaleX = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
    });
    return (
        <div className={style.portfolio} ref={ref}>
            <div className={style.progress}>
                <h1> Featured Works</h1>
                <motion.div className={style.progressLine} style={{ scaleX }}></motion.div>
            </div>
            {
                items.map((item) => (
                    <PortfolioItem key={item.id} item={item} />
                ))
            }
        </div>
    );
}