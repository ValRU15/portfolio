import React from "react";
import styles from "./Bio.module.css";
import { Fade } from "react-awesome-reveal";

export const Bio = () => {
  return (
    <>
      <div className={styles.bioContainer}>
        <div className={styles.row}>
          <div className={styles.column_1}>
            <Fade delay={200} duration={2500}>
              <p>
                I'm <u>Valentina Ramirez</u>, a 26-year-old{" "}
                <u>Multimedia Engineer</u> from Colombia. I graduated from
                Universidad de San Buenaventura Bogotá and have gained{" "}
                <u>4 years of diverse experience</u> in game development,
                graphic design, and interactive media.
              </p>
              <p>
                My professional philosophy centers on moral values like respect,
                teamwork, and leadership. I believe in{" "}
                <u>fostering a respectful team culture</u>, recognizing the
                strength of collaboration, and leading with a blend of
                inspiration and guidance.
              </p>
              <p>
                Looking forward, my goal is to establish my own{" "}
                <u>serious games company</u>. I aim to create games that not
                only entertain but also incorporate ethical and educational
                elements, making a <u>positive impact on society</u>. My vision
                is grounded in integrity, innovation, and a commitment to
                meaningful multimedia contributions.
              </p>
              <h3>Technologies:</h3>
              <ul className={styles.tooltip_list}>
                <li className={styles.tooltip_list_item}>
                  <span className={styles.tooltip_wrapper}>
                    HTML
                    <span className={styles.tooltip}>High lvl</span>
                  </span>
                </li>
                <li className={styles.tooltip_list_item}>
                  <span className={styles.tooltip_wrapper}>
                    CSS
                    <span className={styles.tooltip}>High lvl</span>
                  </span>
                </li>
                <li className={styles.tooltip_list_item}>
                  <span className={styles.tooltip_wrapper}>
                    JS
                    <span className={styles.tooltip}>Mid lvl</span>
                  </span>
                </li>
                <li className={styles.tooltip_list_item}>
                  <span className={styles.tooltip_wrapper}>
                    React
                    <span className={styles.tooltip}>Mid lvl</span>
                  </span>
                </li>
                <li className={styles.tooltip_list_item}>
                  <span className={styles.tooltip_wrapper}>
                    TS
                    <span className={styles.tooltip}>Basic lvl</span>
                  </span>
                </li>
                <li className={styles.tooltip_list_item}>
                  <span className={styles.tooltip_wrapper}>
                    Unity
                    <span className={styles.tooltip}>Mid lvl</span>
                  </span>
                </li>
                <li className={styles.tooltip_list_item}>
                  <span className={styles.tooltip_wrapper}>
                    Node
                    <span className={styles.tooltip}>Mid lvl</span>
                  </span>
                </li>
                <li className={styles.tooltip_list_item}>
                  <span className={styles.tooltip_wrapper}>
                    xCode
                    <span className={styles.tooltip}>Basic lvl</span>
                  </span>
                </li>
                <li className={styles.tooltip_list_item}>
                  <span className={styles.tooltip_wrapper}>
                    AndroidStudio
                    <span className={styles.tooltip}>Basic lvl</span>
                  </span>
                </li>
                <li className={styles.tooltip_list_item}>
                  <span className={styles.tooltip_wrapper}>
                    UX / UI
                    <span className={styles.tooltip}>High lvl</span>
                  </span>
                </li>
                <li className={styles.tooltip_list_item}></li>
                <li className={styles.tooltip_list_item}>
                  <span className={styles.tooltip_wrapper}>
                    Adobe Suite
                    <span className={styles.tooltip}>High lvl</span>
                  </span>
                </li>
              </ul>
            </Fade>
          </div>
          <div className={styles.column_2}>
            <Fade delay={200} duration={2500}>
              <img
                src="https://cdn.glitch.global/33076b07-3ba2-42bf-bfe7-f74e5f3e1ce1/BioImage.jpeg?v=1700177139962"
                alt="Valentina Ramirez"
                className={styles.bioImg}
              />
            </Fade>
          </div>
        </div>
      </div>
    </>
  );
};
