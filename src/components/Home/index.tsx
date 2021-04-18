import * as styles from "components/Home/styles";

import preview_video from "assets/video/preview.mp4";

const Home = () => {
  const hotbod = document.querySelector("body");

  function doStuff() {
    if (hotbod !== undefined && hotbod !== null) {
      hotbod.className += " animate";
    }
  }

  window.onload = function () {
    doStuff();
  };

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

        <div className={styles.content}>olol</div>
      </div>
    </div>
  );
};

export default Home;
