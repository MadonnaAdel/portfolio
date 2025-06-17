import { useState } from "react";
import { motion } from "framer-motion";
import Linkes from "./linkes/Linkes";
import style from "./sidebar.module.scss";
import ToggleBtn from "./ToggleBtn/ToggleBtn";
export default function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);
  const variants = {
    open: {
      clipPath: "circle(600px at 100px 100px)",
      transition: {
        duration: 0.5,
        type: "spring",
        stiffness: 200,
        damping: 50
      }
    },
    closed: {
      clipPath: "circle(0px at 50px 50px)",
      transition: {
        duration: 0.5,
        type: "spring",
        stiffness: 100,
        damping: 20

      }
    }
  }
  return (
    <motion.aside className={style.sidebar} animate={isOpen ? "open" : "closed"} >
      <motion.div className={style.bg} variants={variants} >
        <Linkes />
      </motion.div>
      <ToggleBtn setIsOpen={setIsOpen} />
    </motion.aside>
  );
}
