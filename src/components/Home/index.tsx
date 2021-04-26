import { useEffect } from "react";

import * as styles from "components/Home/styles";
import preview_video from "assets/video/preview.mp4";

const Home = () => {
  useEffect(() => {
    window.addEventListener("load", () => doStuff());
  }, []);

  const doStuff = () => {
    const hotbod = document.querySelector("body");

    if (hotbod !== undefined && hotbod !== null) {
      hotbod.className += " animate";
    }
  };

  const Slogan = (
    <div className="unbreakable-container">
      <div className="unbreakable">
        <span className="un">Wir haben</span>
        <span className="break"> dir nichts zu</span>
        <span className="able"> verkaufen</span>
      </div>
      <div className="ks">sondern erstellen</div>
    </div>
  );

  return (
    <div className={styles.container}>
      <div className={styles.bg_video}>
        <video
          className={styles.bg_video_preview}
          loop
          autoPlay
          muted
          playsInline
        >
          <source src={preview_video} type="video/mp4" />
        </video>

        <div className={styles.content}>{Slogan}</div>
      </div>
    </div>
  );
};

export default Home;
