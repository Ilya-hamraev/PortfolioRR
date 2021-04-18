import { css } from "@emotion/css";

export const container = css`
  display: flex;
  flex-direction: column;
  height: calc(100vh - 140px);
  overflow: hidden;
`;

export const section = css`
  min-height: calc(100vh - 140px);
  height: calc(100vh - 140px);
`;

export const box = css`
  height: 100%;
  transform: translate3d(0, 0, 0);
  transition: 1s;

  &:nth-child(even) {
    background: red;
  }

  &:nth-child(odd) {
    background: blue;
  }
`;
