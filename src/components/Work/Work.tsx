import React from "react";
import styles from "./Work.module.css";
import { Fade } from "react-awesome-reveal";

export const Work = () => {
  return (
    <>
    <Fade cascade delay={150} damping={0.2} duration={1500}>
      <div className={styles.WorkContain}>
        <h2 className={styles.workTitle}>Experience</h2>
        <p className={styles.workText}>
          I began my formal experience at{" "}
          <a href="https://www.grupodot.com/" target="_blank">
            Grupodot
          </a>{" "}
          as a UX/UI Webmaster for Colfondos, a pension company in Colombia, in
          2020. In this role, I engaged in front-end development using Liferay
          and designed various interfaces, including the "
          <a
            href="https://www.colfondos.com.co/dxp/web/guest/personas/pensiones-voluntarias/avanza"
            target="_blank"
          >
            Avanza
          </a>
          " page. Additionally, I executed advertising and marketing projects
          for Colombian companies such as Marlon Becerra. I also provided data
          visualization support for clients.
        </p>
        <p>
          Currently, I am employed at{" "}
          <a href="https://www.makata.tv/" target="_blank">
            Makata Studio
          </a>{" "}
          as a front-end developer and Project Manager for the development team.
          Together, we have created interactive 3D websites for clients like{" "}
          <a href="https://zenly.com/" target="_blank">
            Zenly
          </a>{" "}
          and{" "}
          <a
            href="http://usualapp.s3-website-us-east-1.amazonaws.com/"
            target="_blank"
          >
            Usual
          </a>
          . Furthermore, we have developed web-based games using Unity and
          mobile apps for both Android and iOS platforms.
        </p>
      </div>
      <div className={styles.container}>
        <div className={styles.row}>
          <div className={`${styles.card_project} ${styles.alternate_card}`}>
            <div className={`${styles.wrapper} ${styles.bg1}`}>
              <div className={styles.date}>
                <span className={styles.day}>Makata Studio Website</span>
              </div>
              <div className={styles.data}>
                <div className={styles.content}>
                  <span className={styles.type}>Front-End Dev</span>
                  <h1 className={styles.title}>
                    <a href="https://www.makata.tv/" target="_blank">
                      Visit Website
                    </a>
                  </h1>
                  <p className={styles.text}>
                    <u>Technologies:</u> React, HTML, CSS, Json, JavaScript,
                    GitHub.
                  </p>
                  <ul>
                      <li>🔹 Development of interactions</li>
                      <li>🔹 Prototype layout</li>
                      <li>🔹 Implementation of code-based animations</li>
                      <li>🔹 Development of mobile and desktop versions</li>
                      <li>🔹 Site optimization</li>
                    </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className={styles.row}>
          <div className={`${styles.card_project} ${styles.alternate_card}`}>
            <div className={`${styles.wrapper} ${styles.bg2}`}>
              <div className={styles.date}>
                <span className={styles.day}>WeMoms App</span>
              </div>
              <div className={styles.data}>
                <div className={styles.content}>
                  <span className={styles.type}>Front-End Dev & PM</span>
                  <h1 className={styles.title}>
                    <a
                      href="https://apps.apple.com/us/app/wemoms-pregnancy-baby-app/id938845147"
                      target="_blank"
                    >
                      ⬇️ IOs App{" "}
                    </a>
                    <a
                      href="https://play.google.com/store/apps/details?id=fr.wemoms&hl=en_US"
                      target="_blank"
                    >
                      ⬇️ Android App
                    </a>
                  </h1>
                  <p className={styles.text}>
                    <u>Technologies:</u> xCode, sceneKit, Kotlin, Swift,
                    AndroidStudio, GitHub,.
                  </p>
                  <ul>
                      <li>🔹 Team management</li>
                      <li>🔹 Project planning for the dev team</li>
                      <li>🔹 Communication with the client</li>
                      <li>🔹 Development of mobile interactions</li>
                      <li>🔹 iOS and Android development</li>
                      <li>🔹 Implementation of 3D models</li>
                      <li>🔹 Coding of lights and shadows</li>
                      <li>🔹 VFX (Visual Effects)</li>
                    </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className={styles.row}>
          <div className={`${styles.card_project} ${styles.alternate_card}`}>
            <div className={`${styles.wrapper} ${styles.bg3}`}>
              <div className={styles.date}>
                <span className={styles.day}>Usual Website</span>
              </div>
              <div className={styles.data}>
                <div className={styles.content}>
                  <span className={styles.type}>Front-End Dev & PM</span>
                  <h1 className={styles.title}>
                    <a
                      href="http://usualapp.s3-website-us-east-1.amazonaws.com/"
                      target="_blank"
                    >
                      Live Demo
                    </a>
                  </h1>
                  <p className={styles.text}>
                    <u>Technologies:</u> React, React Three drei, AWS, Next.js,
                    GitHub, Typescript.
                  </p>
                  <ul>
                      <li>🔹 Team management</li>
                      <li>🔹 Project planning for the dev team</li>
                      <li>🔹 Communication with the client Dev team</li>
                      <li>🔹 Optimization for loading</li>
                      <li>🔹 3D implementation</li>
                      <li>🔹 PNG sequence implementation</li>
                      <li>🔹 Particle development</li>
                      <li>🔹 Post-processing & lighting coding</li>
                      <li>🔹 UI layout</li>
                    </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      </Fade>
    </>
  );
};
