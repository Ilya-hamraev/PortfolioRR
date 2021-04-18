import { css } from "@emotion/css";
import { Link } from "react-router-dom";

import { color } from "helpers/constants";

const logo = css`
  display: inline-block;
  padding: 0 10px;
`;

const logo_name = css`
  font-size: 2.5em;
  cursor: default;
  font-family: sans-serif;
  padding: 2px 7px;
  border: 1px solid ${color.white};
  color: ${color.white};
  text-decoration: none;
  cursor: pointer;
  font-family: "ProximaNova-Semibold", sans-serif;
`;

const Logo = () => (
  <div className={logo}>
    <Link className={logo_name} to="/">
      RR
    </Link>
  </div>
);

export default Logo;
