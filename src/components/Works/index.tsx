import React, { useRef } from "react";
import { throttle } from "lodash";
import clx from "classnames";
import { css } from "@emotion/css";

const container = css`
  display: flex;
  flex-direction: column;
  height: calc(100vh - 140px);
  overflow: hidden;
`;

const section = css`
  min-height: calc(100vh - 140px);
  height: calc(100vh - 140px);
`;

const box = css`
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

const Works = () => {
  const listRef = useRef<HTMLDivElement>(null);
  let inScroll = false;

  const scrollToSection = (sectionEq: number) => {
    let position = 0;
    position = sectionEq * 100;

    if (listRef.current) {
      if (!inScroll) {
        inScroll = true;

        const list = Array.from(listRef.current.children);

        for (let sibling of list) {
          sibling.classList.remove("active");
        }
        listRef.current.children[sectionEq].classList.add("active");
        listRef.current.style.transform = `translate3d(0, -${position}%, 0)`;

        setTimeout(() => {
          inScroll = false;
        }, 1300);
      }
    }
  };

  const onWheel = (e: React.WheelEvent) => {
    const deltaY = e.deltaY;

    if (listRef && listRef.current) {
      const list = Array.from(listRef.current.children);
      const active = list.find((node) => node.classList.contains("active"));
      const prev = active && active.previousElementSibling;
      const next = active && active.nextElementSibling;

      if (deltaY > 0) {
        const idx = Array.prototype.indexOf.call(
          listRef.current.children,
          next !== null ? next : active
        );

        scrollToSection(idx);
      }

      if (deltaY < 0) {
        const idx = Array.prototype.indexOf.call(
          listRef.current.children,
          prev !== null ? prev : active
        );

        scrollToSection(idx);
      }
    }
  };

  const onScroll = throttle(onWheel, 100);

  return (
    <div onWheel={onScroll} className={container}>
      <div ref={listRef} className={box}>
        <div className={clx(section, "active")}>1</div>
        <div className={section}>2</div>
        <div className={section}>3</div>
        <div className={section}>4</div>
      </div>
    </div>
  );
};

export default Works;
