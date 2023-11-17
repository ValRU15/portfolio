import styles from "./Education.module.css";
import { Fade } from "react-awesome-reveal";

export const Education = () => {
  return (
    <>
      <div className={styles.cardsContain} id="Edu">
        <Fade cascade delay={200} damping={0.2} duration={2500}>
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
        <div >
            <h3>Other courses</h3>

		<div className={styles.cards}>

			<div className={styles.card}>
				<div className={`${styles.card_header} ${styles.bg1}`}>
				</div>
				<div className={styles.card_content}>
					<h2 className={styles.card_title}>Professional Skills and Digital Change Management</h2>
					<a className={styles.card_more} href="https://accounts.iebschool.com/mi-diploma/deebba5b69e834a2c546c47c276a1ab3/">Show credential</a>
				</div>
			</div>

			<div className={styles.card}>
				<div className={`${styles.card_header} ${styles.bg2}`}>
				</div>
				<div className={styles.card_content}>
					<h2 className={styles.card_title}>EF SET Certificate</h2>
					<a className={styles.card_more} href="https://www.efset.org/cert/xN7N7i">Show credential</a>
				</div>
			</div>

			<div className={styles.card}>
				<div className={`${styles.card_header} ${styles.bg3}`}>
				</div>
				<div className={styles.card_content}>
					<h2 className={styles.card_title}>User Research</h2>
					<a className={styles.card_more} href="https://platzi.com/p/valru97/curso/1742-user-research/diploma/detalle/">Show credential</a>
				</div>
			</div>

			<div className={styles.card}>
				<div className={`${styles.card_header} ${styles.bg3}`}>
				</div>
				<div className={styles.card_content}>
					<h2 className={styles.card_title}>How to Be a Product Designer</h2>
					<a className={styles.card_more} href="https://platzi.com/p/valru97/curso/2432-course/diploma/detalle/">Show credential</a>
				</div>
			</div>

			<div className={styles.card}>
				<div className={`${styles.card_header} ${styles.bg3}`}>
				</div>
				<div className={styles.card_content}>
					<h2 className={styles.card_title}>User Centered Design</h2>
					<a className={styles.card_more} href="https://platzi.com/p/valru97/curso/1562-diseno-usuario/diploma/detalle/">Show credential</a>
				</div>
			</div>

			<div className={styles.card}>
				<div className={`${styles.card_header} ${styles.bg3}`}>
				</div>
				<div className={styles.card_content}>
					<h2 className={styles.card_title}>Idea Validation: Successful Prototypes and Testing</h2>
					<a className={styles.card_more} href="https://platzi.com/p/valru97/curso/1970-prototipos-testing/diploma/detalle/">Show credential</a>
				</div>
			</div>
			<div className={styles.card}>
				<div className={`${styles.card_header} ${styles.bg3}`}>
				</div>
				<div className={styles.card_content}>
					<h2 className={styles.card_title}>Design Thinking with Minds Garage</h2>
					<a className={styles.card_more} href="https://platzi.com/p/valru97/curso/1210-design-thinking/diploma/detalle/">Show credential</a>
				</div>
			</div>

			<div className={styles.card}>
				<div className={`${styles.card_header} ${styles.bg3}`}>
				</div>
				<div className={styles.card_content}>
					<h2 className={styles.card_title}>Digital Market Research</h2>
					<a className={styles.card_more} href="https://platzi.com/p/valru97/curso/2049-investigacion-mercados/diploma/detalle/">Show credential</a>
				</div>
			</div>

			<div className={styles.card}>
				<div className={`${styles.card_header} ${styles.bg3}`}>
				</div>
				<div className={styles.card_content}>
					<h2 className={styles.card_title}>Practical SQL and MySQL Course</h2>
					<a className={styles.card_more} href="https://platzi.com/p/valentinaramirezumana/curso/1272-sql-mysql/diploma/detalle/">Show credential</a>
				</div>
			</div>

		</div>
        </div>
      </div>
    </>
  );
};
