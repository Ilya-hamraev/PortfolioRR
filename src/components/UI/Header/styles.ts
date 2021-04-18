import { css } from "@emotion/css";

import { color } from "helpers/constants";

export const header = css`
  padding: 15px 30px;
  background: ${color.black};
  color: ${color.white};
`;

export const center = css`
  display: grid;
  grid-template-columns: 3fr 6fr 3fr;
  grid-gap: 10px;
  max-width: 1200px;
  width: 100%;
  margin: 0 auto;
`;

export const links = css`
  display: flex;
  align-items: center;
  font-size: 1em;
  font-family: "ProximaNova-Regular", sans-serif;
`;

export const links_item = css`
  margin-right: 12px;

  &:last-child {
    margin-right: 0;
  }

  a {
    transition: color 0.4s;
    color: ${color.hover_white};
    text-decoration: none;
    position: relative;

    &.active {
      color: ${color.white};

      &:before {
        background: ${color.white};
      }
    }

    &:hover {
      color: ${color.white};
    }

    &:before {
      transition: 0.4s;
      position: absolute;
      left: 0;
      right: 0;
      bottom: -2px;
      content: "";
      background: transition;
      height: 2px;
    }
  }
`;

export const logo = css`
  margin: 0 auto;
`;

export const socials = css`
  display: flex;
  justify-content: flex-end;
  align-items: center;

  a {
    font-size: 1.3em;
    transition: color 0.4s;
    color: ${color.white};
    margin-left: 20px;

    &:first-child {
      margin-left: 0px;
    }

    &:focus {
      outline: none;
    }

    &:hover {
      color: ${color.hover_white};
    }
  }
`;
