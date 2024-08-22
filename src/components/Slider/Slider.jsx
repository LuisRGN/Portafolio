/* eslint-disable react/prop-types */
import styles from "./Slider.module.css"

const technologies = [
    { name: "JavaScript", img: "/javascript.svg" },
    { name: "CSS3", img: "/css.svg" },
    { name: "HTML5", img: "/html.svg" },
    { name: "NODE.js", img: "/node.svg" },
    { name: "TypeORM", img: "/typeorm.svg" },
    { name: "Next.js", img: "/next.svg" },
    { name: "PostgreSQL", img: "/postgresql.svg" },
    { name: "React.js", img: "/react.svg" },
    { name: "TailwindCSS", img: "/tailwind.svg" },
    { name: "TypeScript", img: "/type.svg" },
    { name: "Express.js", img: "/express.svg" },
    { name: "GitHub", img: "/github.svg" },
    { name: "Vercel", img: "/vercel.svg" },
    { name: "Vue.js", img: "/vue.svg" },
];

const Slice = ({ colorText }) => {
    return (
        <div className={styles.div}>
            <div className={styles.container}>
                <h1 className={colorText}>TECNOLOGÍAS</h1>
                <div className={styles.inner}>
                    {technologies.map((tech, index) => (
                        <div className={styles.tag} key={index}>
                            <img src={tech.img} alt={tech.name} />
                            <span className={styles.name}>{tech.name}</span>
                        </div>
                    ))}
                    {technologies.map((tech, index) => (
                        <div className={styles.tag} key={index}>
                            <img src={tech.img} alt={tech.name} />
                            <span className={styles.name}>{tech.name}</span>
                        </div>
                    ))}
                    <div className={styles.fade}></div>
                </div>
            </div>
        </div>
    )
}

export default Slice;
