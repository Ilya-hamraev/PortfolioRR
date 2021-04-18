import * as styles from "components/About/styles";
import avatar from "assets/images/avatar.png";

const About = () => (
  <div className={styles.container}>
    <div>
      <div className={styles.avatar_box}>
        <img src={avatar} alt="avatar" />
      </div>
      <p className={styles.about_title}>
        Hi everyone, my name is Robert Raudesepp.
      </p>
      <p>
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s, when an unknown printer took a galley of type and
        scrambled it to make a type specimen book. It has survived not only five
        centuries, but also the leap into electronic typesetting, remaining
        essentially unchanged. It was popularised in the 1960s with the release
        of Letraset sheets containing Lorem Ipsum passages, and more recently
        with desktop publishing software like Aldus PageMaker including versions
        of Lorem Ipsum.
      </p>
    </div>
  </div>
);

export default About;
