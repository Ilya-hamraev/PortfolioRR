import React, { useEffect, useState, useRef } from "react";
import clx from "classnames";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPaperPlane,
  faSignature,
  faComment,
  faAt,
} from "@fortawesome/free-solid-svg-icons";

import * as styles from "components/Contacts/styles";

interface FormInterface {
  name: string;
  email: string;
  message: string;
}

let initialState: FormInterface = {
  name: "",
  email: "",
  message: "",
};

const Contacts = () => {
  const inputRef = useRef<HTMLInputElement>(null);
  const [form, setForm] = useState(initialState);

  useEffect(() => {
    if (inputRef !== null && inputRef.current) {
      inputRef.current.focus();
    }
  }, [inputRef]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleChangeMessage = (event: React.ChangeEvent<HTMLTextAreaElement>) =>
    setForm({ ...form, message: event.target.value });

  const handleClearField = (e: React.MouseEvent<HTMLButtonElement>) =>
    setForm({ ...form, [e.currentTarget.name]: "" });

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Contact</h1>
      <div>
        <p className={styles.sub_text}>
          If you want to contact me or send me any suggestion, please write.
        </p>
        <form className={styles.main_form}>
          <div className={styles.main_form__block}>
            <label className={styles.main_form__label} htmlFor="Name">
              <div className={styles.label_form}>
                Name
                <span>
                  <FontAwesomeIcon icon={faSignature} />
                </span>
                *
              </div>
              <div className={styles.input_box}>
                <input
                  placeholder="Your Name"
                  className={styles.form_input}
                  onChange={handleChange}
                  ref={inputRef}
                  value={form.name}
                  name="name"
                  type="text"
                  required
                />
                {form.name !== "" && (
                  <button
                    onClick={handleClearField}
                    className={styles.input_clear}
                    name="name"
                  />
                )}
              </div>
            </label>
          </div>
          <div className={styles.main_form__block}>
            <label className={styles.main_form__label} htmlFor="Email">
              <div className={styles.label_form}>
                Email Address
                <span>
                  <FontAwesomeIcon icon={faAt} />
                </span>
                *
              </div>
              <div className={styles.input_box}>
                <input
                  placeholder="Your Email Address"
                  className={styles.form_input}
                  onChange={handleChange}
                  value={form.email}
                  type="email"
                  name="email"
                  required
                />
                {form.email !== "" && (
                  <button
                    onClick={handleClearField}
                    className={styles.input_clear}
                    name="email"
                  />
                )}
              </div>
            </label>
          </div>
          <div className={styles.main_form__block}>
            <label className={styles.main_form__label} htmlFor="Message">
              <div className={styles.label_form}>
                Message
                <span>
                  <FontAwesomeIcon icon={faComment} />
                </span>
                *
              </div>
              <div className={styles.input_box}>
                <textarea
                  placeholder="Your Message..."
                  className={styles.form_input}
                  onChange={handleChangeMessage}
                  value={form.message}
                  name="message"
                  rows={3}
                  required
                />
                {form.message !== "" && (
                  <button
                    onClick={handleClearField}
                    className={styles.input_clear}
                    name="message"
                  />
                )}
              </div>
            </label>
          </div>
          <button
            // onSubmit={handleSubmit}
            className={clx(styles.send_from, {
              show:
                form.name.length !== 0 &&
                form.email.length !== 0 &&
                form.message.length !== 0,
            })}
            type="submit"
          >
            Send
            <span>
              <FontAwesomeIcon icon={faPaperPlane} />
            </span>
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contacts;
