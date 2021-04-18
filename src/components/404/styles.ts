import { css } from "@emotion/css";
import { color } from "helpers/constants";

export const container = css`
  height: 100%;
  width: 100%;
  padding: 40px;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

export const not_found_box = css`
  position: relative;
  margin-bottom: 60px;
`;

export const title = css`
  margin-bottom: 20px;
`;

export const text = css`
  font-size: 1.5em;
  color: ${color.warning};
`;

export const error = css`
  position: absolute;
  right: -14px;
  font-size: 8em;
  top: 0px;
  z-index: -1;
  color: ${color.yellow};
`;

export const go_home = css`
  font-family: "ProximaNova-Regular", sans-serif;
  background: none;
  font-size: 1em;
  padding: 5px 12px;
  border: 1px solid ${color.black};
  border-radius: 5px;
  display: flex;
  align-items: center;
  transition: 0.4s;
  cursor: pointer;

  a {
    padding: 0;
    margin: 0;
    text-decoration: none;
    color: ${color.black};
  }
`;
