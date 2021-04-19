import clx from "classnames";

import * as styles from "components/Works/styles";

interface Props {
  second?: boolean;
  id: number;
  name: string;
  description: string;
  img: string;
}

const Work = ({ name, id, description, img, second = false }: Props) => {
  return (
    <div className={clx(styles.section, { active: second })} key={id}>
      <div className={styles.section_box}>
        <img className={styles.preview_photo} src={img} alt="preview" />
        <span className={styles.description}>
          <div className={styles.background} />
          <div className={styles.wrapper_desc}>
            <div>
              <p className={styles.name_work}>{name}</p>
              <p className={styles.text}>{description}</p>
            </div>
            <button className={styles.show}>See full</button>
          </div>
        </span>
      </div>
    </div>
  );
};

export default Work;
