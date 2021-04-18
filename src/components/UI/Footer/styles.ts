import { css } from "@emotion/css";

import { color } from "helpers/constants";

export const footer = css`
  width: 100%;
  height: 70px;
  padding: 20px 30px;
  border-top: 1px solid ${color.black};
  box-sizing: border-box;
  background: ${color.black};
  color: ${color.white};
  font-size: 0.8em;
`;

export const center = css`
  max-width: 1200px;
  margin: 0 auto;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const copyRight = css`
  cursor: default;
`;

export const rights = css`
  text-transform: uppercase;
  position: relative;
  cursor: pointer;
  transition: color 0.4s;

  &:after {
    content: "";
    position: absolute;
    left: 0;
    bottom: -3px;
    background: ${color.white};
    right: 0;
    height: 1px;
  }

  &:hover {
    color: ${color.hover_white};
  }
`;
