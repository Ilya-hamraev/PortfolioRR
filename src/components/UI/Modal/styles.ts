import { css } from "@emotion/css";

import { color } from "helpers/constants";

export const modal = css`
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.7);
`;

export const modal_content = css`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  width: 80vw;
  max-width: 1000px;
  height: 70vh;
  background: ${color.white};
  border-radius: 5px;

  p {
    padding: 20px;
    height: -webkit-fill-available;
    overflow: auto;
    line-height: 24px;
  }
`;

export const close_btn = css`
  display: block;
  width: 16px;
  height: 16px;
  background: none;
  position: absolute;
  right: 0px;
  top: -25px;
  border: none;
  padding: 0;
  z-index: 10;
  cursor: pointer;

  &:after {
    content: "";
    position: absolute;
    width: 20px;
    height: 2px;
    background: ${color.white};
    left: -2px;
    top: 7px;
    transform: rotate(45deg);
    border-radius: 2px;
  }

  &:before {
    content: "";
    position: absolute;
    width: 20px;
    height: 2px;
    background: ${color.white};
    left: -2px;
    top: 7px;
    transform: rotate(-45deg);
    border-radius: 2px;
  }

  &:focus {
    outline: none;
  }
`;
