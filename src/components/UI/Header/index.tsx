import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link, useLocation } from "react-router-dom";
import clx from "classnames";

import { socials, navigation } from "helpers";
import Logo from "components/UI/Logo";
import * as styles from "components/UI/Header/styles";

const Header = () => {
  const currentPath = useLocation().pathname;

  return (
    <header className={styles.header}>
      <div className={styles.center}>
        <ul className={styles.links}>
          {navigation.map((link) => (
            <li key={link.name} className={styles.links_item}>
              <Link
                className={clx({ active: link.url === currentPath })}
                to={link.url}
              >
                {link.name}
              </Link>
            </li>
          ))}
        </ul>
        <div className={styles.logo}>
          <Logo />
        </div>
        <div className={styles.socials}>
          {socials.map((i, idx) => (
            <a
              key={`${i.name}_${idx}`}
              target="_blank"
              rel="noreferrer"
              href={i.link}
            >
              <FontAwesomeIcon icon={i.iconName} />
            </a>
          ))}
        </div>
      </div>
    </header>
  );
};

export default Header;
