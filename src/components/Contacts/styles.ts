import { css } from "@emotion/css";

import { color } from "helpers/constants";

export const container = css`
  max-width: 740px;
  margin: 0 auto;
  padding: 0 20px;
  height: 100%;
  padding-top: 50px;
  box-sizing: border-box;
`;

export const title = css`
  text-align: center;
  margin-bottom: 20px;
`;

export const sub_text = css`
  line-height: 22px;
  margin-bottom: 25px;
  letter-spacing: 0.4px;
  text-align: center;
`;

export const main_form = css`
  max-width: 400px;
  margin: 0 auto;
  padding: 20px;
`;

export const main_form__block = css`
  margin-bottom: 14px;
`;

export const main_form__label = css`
  display: flex;
  flex-direction: column;
  font-family: "ProximaNova-Regular", sans-serif;
  font-size: 1.1em;
  letter-spacing: 0.5px;
`;

export const label_form = css`
  display: flex;
  align-items: center;

  span {
    margin-left: 5px;
    margin-right: 3px;
    font-size: 0.7em;
  }
`;

export const input_box = css`
  width: 100%;
  position: relative;

  input {
    width: -webkit-fill-available;
  }

  textarea {
    width: -webkit-fill-available;
    min-height: 16px;
  }
`;

export const input_clear = css`
  display: block;
  width: 16px;
  height: 16px;
  background: none;
  position: absolute;
  right: 10px;
  top: 16px;
  border: none;
  padding: 0;
  z-index: 10;

  &:after {
    content: "";
    position: absolute;
    width: 20px;
    height: 2px;
    background: ${color.black};
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
    background: ${color.black};
    left: -2px;
    top: 7px;
    transform: rotate(-45deg);
    border-radius: 2px;
  }
`;

export const send_from = css`
  margin: 0 auto;
  font-family: "ProximaNova-Regular", sans-serif;
  background: none;
  font-size: 1em;
  padding: 5px 12px;
  border: 1px solid ${color.black};
  border-radius: 5px;
  display: flex;
  align-items: center;
  opacity: 0;
  transition: 0.4s;
  visibility: hidden;
  cursor: pointer;

  span {
    margin-left: 5px;
    font-size: 1em;
  }

  &:focus {
    outline: none;
  }

  &.show {
    visibility: visible;
    opacity: 1;
  }
`;

export const form_input = css`
  border-radius: 5px;
  border: 1px solid ${color.black};
  margin-top: 5px;
  padding: 10px;
  font-size: 0.9em;
  font-family: "ProximaNova-Regular", sans-serif;
  transition: 0.4s;

  &::placeholder {
    color: #d8d6d6;
  }

  &:focus {
    outline: none;
    border-color: #0000ff;
  }
`;
