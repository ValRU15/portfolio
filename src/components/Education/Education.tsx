import styles from "./Education.module.css";
import { Fade } from "react-awesome-reveal";

export const Education = () => {
  return (
    <>
      <div className={styles.cardsContain} id="Edu">
        <Fade cascade delay={600} damping={0.2} duration={2500}>
            <h2 className={styles.TitleEdu}>Education</h2>
          <div className={styles.blog_card}>
            <div className={styles.meta}>
              <div className={styles.photo}></div>
              <ul className={styles.details}>
                <li className={styles.author}>Started: June, 2015</li>
                <li className={styles.date}>Finished: June, 2020</li>
                <li className={styles.tags}>
                  <ul>
                    <li>Learn:</li>
                    <li>Code</li>
                    <li>HTML</li>
                    <li>CSS</li>
                    <li>JavaScript</li>
                    <li>React</li>
                    <li>3D Modeling</li>
                    <li>Game Design</li>
                    <li>Game Development</li>
                    <li>Graphic Design</li>
                    <li>More...</li>
                  </ul>
                </li>
              </ul>
            </div>
            <div className={styles.description}>
              <h1>Professional degree in Multimedia Engineering</h1>
              <h2>Universidad de San Buenaventura. Bogotá 🇨🇴</h2>
              <p>
                {" "}
                Multimedia Engineering is the ideal career to acquire and
                assimilate knowledge in 2D and 3D animation, virtual and
                augmented reality. Additionally, it promotes personal growth,
                leadership skills, and provides opportunities for
                entrepreneurship and business creation.
              </p>
              <p className={styles.read_more}>
                <a href="#">Diploma</a>
              </p>
            </div>
          </div>
          <div className={`${styles.blog_card} ${styles.alt}`}>
            <div className={styles.meta}>
              <div className={styles.photo1}></div>
              <ul className={styles.details}>
                <li className={styles.author}>Started: May, 2023</li>
                <li className={styles.date}>Finish: July, 2024</li>
                <li className={styles.tags}>
                  <ul>
                    <li>Learn:</li>
                    <li>Project management</li>
                    <li>Lean Startup</li>
                    <li>Digital Strategy</li>
                    <li>Scrum</li>
                    <li>UX & CX </li>
                    <li>Economic and Financial Viability</li>
                    <li>More...</li>
                  </ul>
                </li>
              </ul>
            </div>
            <div className={styles.description}>
              <h1>MBA in Project management</h1>
              <h2>IEBS Digital Business School. Barcelona 🇪🇸</h2>
              <p>
                The MBA in Project Management covers all the knowledge areas
                related to the direction and management of businesses adapted to
                the current business world, where innovation and change play
                crucial roles.
              </p>
              <p className={styles.read_more}>
                <a href="#">Diploma</a>
              </p>
            </div>
          </div>
        </Fade>
      </div>
    </>
  );
};
