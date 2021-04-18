import { useRef } from "react";

import * as styles from "components/UI/Modal/styles";

interface ModalInterface {
  onClose: (e: React.MouseEvent) => void;
}

const Modal = ({ onClose }: ModalInterface) => {
  const myRef = useRef<HTMLDivElement>(null);

  return (
    <div ref={myRef} className={styles.modal}>
      <div className={styles.modal_content}>
        <button onClick={onClose} className={styles.close_btn} />
        <p>
          Сайт рыбатекст поможет дизайнеру, верстальщику, вебмастеру
          сгенерировать несколько абзацев более менее осмысленного текста рыбы
          на русском языке, а начинающему оратору отточить навык публичных
          выступлений в домашних условиях. При создании генератора мы
          использовали небезизвестный универсальный код речей. Текст
          генерируется абзацами случайным образом от двух до десяти предложений
          в абзаце, что позволяет сделать текст более привлекательным и живым
          для визуально-слухового восприятия.
        </p>
      </div>
    </div>
  );
};

export default Modal;
