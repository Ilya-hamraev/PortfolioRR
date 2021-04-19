import { css } from "@emotion/css";

import { color } from "helpers/constants";

export const container = css`
  max-width: 800px;
  margin: 0 auto;
  padding: 0 20px;
  height: 100%;
  padding-top: 100px;
  box-sizing: border-box;
`;

export const beetwen = css`
  display: flex;
`;

export const left = css`
  padding-top: 50px;
`;

export const text = css`
  padding-left: 50px;
`;

export const avatar_box = css`
  width: 200px;
  height: 200px;
  position: relative;
  overflow: hidden;
  border-radius: 50%;
  margin: 0 auto;
  border: 1px solid ${color.gray};

  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
`;

export const about_title = css`
  font-size: 1.5em;
  margin-bottom: 20px;
`;
