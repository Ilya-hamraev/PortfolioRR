import React, { useRef } from "react";
import { throttle } from "lodash";
import clx from "classnames";

import Work from "components/Works/Work";
import { Portfolio } from "helpers";
import * as styles from "components/Works/styles";

const Works = () => {
  const listRef = useRef<HTMLDivElement>(null);
  let inScroll = false;

  const scrollToSection = (idxEq: number) => {
    let position = 0;
    position = idxEq * 100;

    if (listRef.current) {
      if (!inScroll) {
        inScroll = true;

        const list = Array.from(listRef.current.children);

        for (let sibling of list) {
          sibling.classList.remove("active");
        }
        listRef.current.children[idxEq].classList.add("active");
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
    <div onWheel={onScroll} className={styles.container}>
      <div ref={listRef} className={styles.box}>
        {Portfolio.map((el, idx) => (
          <Work
            id={el.id}
            second={idx === 0 ? true : false}
            name={el.name}
            description={el.description}
            img={el.img}
          />
        ))}
      </div>
      {/* <ul className={styles.fixed_menu}>
        {Portfolio.map((el, idx) => (
          <li>
            <a className={styles.fixed_item_link} href="" />
          </li>
        ))}
      </ul> */}
    </div>
  );
};

export default Works;
