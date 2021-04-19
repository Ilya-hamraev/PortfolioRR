import { css } from "@emotion/css";

import { color } from "helpers/constants";

export const container = css`
  display: flex;
  flex-direction: column;
  height: calc(100vh - 140px);
  overflow: hidden;
  background: #fafafa;
`;

export const section = css`
  min-height: calc(100vh - 140px);
  height: calc(100vh - 140px);
  display: flex;
  align-items: center;
  padding: 50px;
  box-sizing: border-box;
`;

export const section_box = css`
  width: 100%;
  max-width: 1200px;
  height: 100%;
  margin: 0 auto;
  max-height: 500px;
  box-shadow: 0 5px 15px 0 rgb(0 0 0 / 50%), 0 15px 35px 0 rgb(0 0 0 / 5%);
  border-radius: 8px;
  overflow: hidden;
  position: relative;

  &:hover {
    span {
      right: 0%;
    }
  }
`;

export const preview_photo = css`
  position: absolute;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  width: 101%;
`;

export const description = css`
  transition: 0.7s;
  position: absolute;
  right: -100%;
  // right: 0%;
  top: 0;
  bottom: 0;
  width: 400px;
  padding: 25px;
  color: ${color.white};
`;

export const background = css`
  background: rgba(0, 0, 0, 0.4);
  filter: blur(5px);
  position: absolute;
  right: 0;
  top: 0;
  bottom: 0;
  left: 0;
`;

export const wrapper_desc = css`
  z-index: 1;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
`;

export const name_work = css`
  font-size: 1.6em;
  margin-bottom: 20px;
`;

export const text = css``;

export const show = css`
  background: ${color.white};
  display: inline-block;
  width: 200px;
  padding: 10px 20px;
  border-radius: 10px;
  border: none;
  font-size: 1em;
  cursor: pointer;
  transition: 0.5s;

  &:hover {
    background: ${color.hover_white};
  }
`;

export const box = css`
  height: 100%;
  transform: translate3d(0, 0, 0);
  transition: 1s;
`;

export const fixed_menu = css`
  position: fixed;
  top: 12%;
  right: 2%;
`;

export const fixed_item_link = css`
  content: "";
  position: relative;
  display: block;
  width: 7px;
  height: 7px;
  border-radius: 50%;
  background-color: ${color.black};
  margin-bottom: 15px;
  transition: 0.5s;

  &.active {
    content: "";
    display: block;
    position: absolute;
    top: -6px;
    left: -6px;
    width: 17px;
    height: 17px;
    border-radius: 50%;
    border: 1px solid ${color.black};
    background: none;
  }
`;
