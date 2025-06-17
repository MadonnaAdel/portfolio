import { motion } from 'framer-motion';
import style from './skillsSlider.module.scss'; 

const skillIcons = [
    { src: "https://user-images.githubusercontent.com/25181517/192158954-f88b5814-d510-4564-b285-dff7d6400dad.png", alt: "HTML", title: "HTML" },
    { src: "https://raw.githubusercontent.com/isocpp/logos/master/cpp_logo.png", alt: "C++", title: "C++" },
    { src: "https://getbootstrap.com/docs/5.3/assets/brand/bootstrap-logo-shadow.png", alt: "bootstrap", title: "Bootstrap" },
    { src: "https://raw.githubusercontent.com/github/explore/c700f6f5bb68a850405eef411cf878162ff34b59/topics/angular/angular.png?size=48", alt: "Angular", title: "Angular" },
    { src: "https://user-images.githubusercontent.com/25181517/183898674-75a4a1b1-f960-4ea9-abcb-637170a00a75.png", alt: "CSS", title: "CSS" },
    { src: "https://user-images.githubusercontent.com/25181517/183890598-19a0ac2d-e88a-4005-a8df-1ee36782fde1.png", alt: "TypeScript", title: "TypeScript" },
    { src: "https://user-images.githubusercontent.com/25181517/117447155-6a868a00-af3d-11eb-9cfe-245df15c9f3f.png", alt: "JavaScript", title: "JavaScript" },
    { src: "https://user-images.githubusercontent.com/25181517/183897015-94a058a6-b86e-4e42-a37f-bf92061753e5.png", alt: "React", title: "React" },
    { src: "https://user-images.githubusercontent.com/25181517/187896150-cc1dcb12-d490-445c-8e4d-1275cd2388d6.png", alt: "Redux", title: "Redux" },
    { src: "https://user-images.githubusercontent.com/25181517/202896760-337261ed-ee92-4979-84c4-d4b829c7355d.png", alt: "Tailwind CSS", title: "Tailwind CSS" },
    { src: "https://user-images.githubusercontent.com/25181517/183568594-85e280a7-0d7e-4d1a-9028-c8c2209e073c.png", alt: "Node.js", title: "Node.js" },
    { src: "https://user-images.githubusercontent.com/25181517/183859966-a3462d8d-1bc7-4880-b353-e2cbed900ed6.png", alt: "Express", title: "Express" },
    { src: "https://user-images.githubusercontent.com/25181517/186711335-a3729606-5a78-4496-9a36-06efcc74f800.png", alt: "Swagger", title: "Swagger" },
    { src: "https://user-images.githubusercontent.com/25181517/192108372-f71d70ac-7ae6-4c0d-8395-51d8870c2ef0.png", alt: "Git", title: "Git" },
    { src: "https://user-images.githubusercontent.com/25181517/189715289-df3ee512-6eca-463f-a0f4-c10d94a06b2f.png", alt: "Figma", title: "Figma" },
    { src: "https://sass-lang.com/assets/img/logos/logo.svg", alt: "SCSS", title: "SCSS" },
];

const sliderVariants = {
    initial: {
        x: "0%",
    },
    animate: {
        x: "-100%",
        transition: {
            repeat: Infinity, 
            repeatType: "loop", 
            duration: 40, 
            ease: "linear", 
        },
    },
};

export default function SkillsSlider() {
    const duplicatedIcons = [...skillIcons, ...skillIcons];

    return (
        <div className={style.sliderContainer}>
            <motion.div
                className={style.sliderTrack}
                variants={sliderVariants}
                initial="initial"
                animate="animate"
            >
                {duplicatedIcons.map((icon, index) => (
                    <div className={style.skillItem} key={index}>
                        <img src={icon.src} alt={icon.alt} title={icon.title} />
                        <span className={style.skillName}>{icon.title}</span>
                    </div>
                ))}
            </motion.div>
        </div>
    );
}