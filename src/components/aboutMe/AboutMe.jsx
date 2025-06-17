import { motion } from 'framer-motion';
import style from './about.module.scss';
import SkillsSlider from '../skills/skills';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFileLines } from '@fortawesome/free-solid-svg-icons';
const sectionVariants = {
  initial: { opacity: 0, y: 50 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.8, staggerChildren: 0.2 } }
};

const itemVariants = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 }
};

export default function AboutMe() {
  return (
    <> <motion.div
      className={style.aboutSection}
      variants={sectionVariants}
      initial="initial"
      whileInView="animate"
      viewport={{ once: true, amount: 0.3 }}
    >
      <div className={`container ${style.aboutContainer}`}>


        <div className={style.contentLayout}>
          <motion.div variants={itemVariants} className={style.whoIAm}>
            <h2>Who I Am</h2>
            <p>
              I’m a self-driven junior front-end developer who loves creating beautiful, responsive web apps using React.js.
              I come from an engineering background, and I’ve recently graduated from a competitive government tech scholarship where I built a solid foundation in web development.
            </p>
            <p>
              I'm constantly growing—learning new tools, improving my code quality, and paying close attention to the user experience.
              I believe in the power of clean code, thoughtful design, and building things that make people’s lives easier.
            </p>
            <a href="https://drive.google.com/drive/u/0/folders/1oH_Yh7_qvLEj6qxDHpVlKHKTXm_FUF38" target="_blank" rel="noopener noreferrer" className={style.cvButton}>
              <FontAwesomeIcon icon={faFileLines} style={{ marginRight: "8px" }} />
              View My CV
            </a>
          </motion.div>
          <div className={style.rightColumn}>
            <motion.div variants={itemVariants} className={style.education}>
              <h2><i className="fas fa-graduation-cap"></i> Education</h2>
              <div className={style.item}>
                <h3>Information Technology Institute (ITI)</h3>
                <p>Web and UI Track</p>
              </div>
              <div className={style.item}>
                <h3>Faculty of Commerce, Assiut University</h3>
                <p>Bachelor's Degree in Commerce</p>
              </div>
              <div className={style.mySkills}>
                <h2>My Skills</h2>
                <img src="/public/arrow.svg" alt="arrow" width={70} />
              </div>
            </motion.div>

            {/* If you have any professional experience, uncomment and fill this section */}
            {/* <motion.div variants={itemVariants} className={style.experience}>
    <h2><i className="fas fa-briefcase"></i> Experience</h2>
    <div className={style.item}>
      <h3>[Your Company Name 1] - [Your Title 1]</h3>
      <p>[Start Date] - [End Date]</p>
      <ul>
        <li>Developed and maintained responsive user interfaces using React.js and SCSS.</li>
        <li>Collaborated with design and backend teams to implement new features.</li>
        <li>Optimized web application performance for enhanced user experience.</li>
      </ul>
    </div>
    <div className={style.item}>
      <h3>[Your Company Name 2] - [Your Title 2]</h3>
      <p>[Start Date] - [End Date]</p>
      <ul>
        <li>Built interactive components and pages from Figma designs.</li>
        <li>Contributed to code reviews and ensured code quality.</li>
      </ul>
    </div>
  </motion.div> */}
          </div>
        </div>
      </div>
      <SkillsSlider />
    </motion.div>
    </>
  );
}