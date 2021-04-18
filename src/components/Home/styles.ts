import { css } from "@emotion/css";

export const container = css`
  width: 100%;
  height: 100%;
`;

export const bg_video = css`
  width: 100%;
  height: 100%;
  position: relative;
  overflow: hidden;

  &:after {
    content: "";
    left: 0;
    top: 0;
    right: 0;
    bottom: 0;
    position: absolute;
    background: rgba(0, 0, 0, 0.4); // TO-DO change opacity to 0.8
    width: 100%;
    height: 100%;
  }
`;

export const bg_video_preview = css`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
`;

export const content = css`
  z-index: 1;
  position: relative;
  height: 100%;
`;
