import { Link } from "react-router-dom";

import * as styles from "components/404/styles";

const page404 = () => (
  <div className={styles.container}>
    <div className={styles.not_found_box}>
      <h1 className={styles.title}>Page not found</h1>
      <p className={styles.text}>Woops, it looks like you're lost!</p>
      <div className={styles.error}>404</div>
    </div>

    <span className={styles.go_home}>
      <Link to="/">Go Home</Link>
    </span>
  </div>
);

export default page404;
