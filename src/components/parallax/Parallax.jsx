import { useRef } from 'react';
import style from './parallax.module.scss';
import { motion, useScroll, useTransform } from "framer-motion";
export default function Parallax({ type }) {
  const ref = useRef();
  const { scrollYProgress } = useScroll({
    offset: ["start end", "end start"],
    target: ref
  });
  const yText = useTransform(scrollYProgress, [0, 1], ["-100%", "200%"]);
  const yBg = useTransform(scrollYProgress, [0, 1], ["-100%", "100%"]);
  return (
    <div
      className={style.parallax}
      ref={ref}
      style={{
        background: `linear-gradient(${type === "aboutMe"
          ? "180deg, rgba(29, 24, 51, 0.548), rgba(249, 214, 157, 0.283)"
          : "180deg,rgba(249, 214, 157, 0.283) ,rgba(29, 24, 51, 0.548) "})`,
      }}
    >
      <motion.h1 style={{ y: yText }}>{type === "aboutMe" ? "Who I Am?" : "What We Did?"}</motion.h1>
      <motion.div className={style.mountain}>

      </motion.div>
      <motion.div className={style.plants} style={{ backgroundImage: `url(/${type === "aboutMe" ? "sun" : "planets"}.png)`, y: yBg }}>

      </motion.div>
      <motion.div className={style.stars} style={{ x: yBg }}>

      </motion.div>
    </div>
  )
}
