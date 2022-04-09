// React
import { useContext, useEffect, useState } from "react";
// Markdown
import ReactMarkdown from "react-markdown";
// Components
import { CardContext } from "../Context";
// Styling
import styles from "./Code.module.css";

export const Code = () => {
  const { cardProps, imageProps } = useContext(CardContext);
  const [canCopy, setCanCopy] = useState(false);
  const [message, setMessage] = useState({ text: "", type: "" });
  const children = `
    <section class="card">
          <div class="header">
            <img src="${cardProps.userImage}" alt="User" class="profileImage" />
            <p class="username">${cardProps.username}</p>
            <p class="userTag">${cardProps.tag}</p>
            <p class="createDate"> &bull;${cardProps.createdDate}</p>
            <svg
              aria-hidden="true"
              focusable="false"
              data-prefix="fas"
              data-icon="angle-down"
              class="svg-inline--fa fa-angle-down carret"
              role="img"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 384 512"
            >
              <path
                fill="currentColor"
                d="M192 384c-8.188 
                0-16.38-3.125-22.62-9.375l-160-160c-12.5-12.5-12.5-32.75 
                0-45.25s32.75-12.5 45.25 0L192 306.8l137.4-137.4c12.5-12.5 
                32.75-12.5 45.25 0s12.5 32.75 0 45.25l-160 
                160C208.4 380.9 200.2 384 192 384z"
              ></path>
            </svg>
          </div>
          <section class="body">
            <p>${cardProps.text}</p>
            <div class="imageContainer">
              <img class="image" alt="Card" src="${imageProps.URL}" />
              <p class="imageTitle">${imageProps.title}</p>
              <p class="imageDescription">${imageProps.description}</p>
              <a href="${imageProps.URL}" target="_blank" rel="noreferrer">
                ${new URL(imageProps.URL).hostname.replace("www", "")}
              </a>
            </div>
            <div class="footer">
              <button class="footerButton">
                <svg
                  aria-hidden="true"
                  focusable="false"
                  data-prefix="fas"
                  data-icon="comment"
                  class="svg-inline--fa fa-comment "
                  role="img"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512 512"
                >
                  <path
                    fill="currentColor"
                    d="M256 32C114.6 32 .0272 125.1 
                    .0272 240c0 49.63 21.35 94.98 56.97 
                    130.7c-12.5 50.37-54.27 95.27-54.77 
                    95.77c-2.25 2.25-2.875 5.734-1.5 8.734C1.979 
                    478.2 4.75 480 8 480c66.25 0 115.1-31.76 
                    140.6-51.39C181.2 440.9 217.6 448 256 448c141.4 
                    0 255.1-93.13 255.1-208S397.4 32 256 32z"
                  ></path>
                </svg>
                2
              </button>
              <button class="footerButton">
                <svg
                  aria-hidden="true"
                  focusable="false"
                  data-prefix="fas"
                  data-icon="retweet"
                  class="svg-inline--fa fa-retweet "
                  role="img"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 640 512"
                >
                  <path
                    fill="currentColor"
                    d="M614.2 334.8C610.5 325.8 601.7 319.1 
                    592 319.1H544V176C544 131.9 508.1 96 464 
                    96h-128c-17.67 0-32 14.31-32 32s14.33 32 
                    32 32h128C472.8 160 480 167.2 480 
                    176v143.1h-48c-9.703 0-18.45 5.844-22.17 
                    14.82s-1.656 19.29 5.203 26.16l80 80.02C499.7 
                    445.7 505.9 448 512 448s12.28-2.344 
                    16.97-7.031l80-80.02C615.8 354.1 617.9 
                    343.8 614.2 334.8zM304 352h-128C167.2 352 
                    160 344.8 160 336V192h48c9.703 0 18.45-5.844 
                    22.17-14.82s1.656-19.29-5.203-26.16l-80-80.02C140.3 
                    66.34 134.1 64 128 64S115.7 66.34 111 71.03l-80 
                    80.02C24.17 157.9 22.11 168.2 25.83 177.2S38.3 
                    192 48 192H96V336C96 380.1 131.9 416 176 
                    416h128c17.67 0 32-14.31 32-32S321.7 352 304 352z"
                  ></path>
                </svg>
                47
              </button>
              <button class="footerButton">
                <svg
                  aria-hidden="true"
                  focusable="false"
                  data-prefix="fas"
                  data-icon="heart"
                  class="svg-inline--fa fa-heart "
                  role="img"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512 512"
                >
                  <path
                    fill="currentColor"
                    d="M0 190.9V185.1C0 115.2 50.52 55.58 
                    119.4 44.1C164.1 36.51 211.4 51.37 244 84.02L256 
                    96L267.1 84.02C300.6 51.37 347 36.51 392.6 
                    44.1C461.5 55.58 512 115.2 512 185.1V190.9C512 
                    232.4 494.8 272.1 464.4 300.4L283.7 469.1C276.2 
                    476.1 266.3 480 256 480C245.7 480 235.8 476.1 
                    228.3 469.1L47.59 300.4C17.23 272.1 .0003 232.4 
                    .0003 190.9L0 190.9z"
                  ></path>
                </svg>
                190
              </button>
              <button class="footerButton">
                <svg
                  aria-hidden="true"
                  focusable="false"
                  data-prefix="fas"
                  data-icon="envelope"
                  class="svg-inline--fa fa-envelope "
                  role="img"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512 512"
                >
                  <path
                    fill="currentColor"
                    d="M464 64C490.5 64 512 85.49 512 112C512 
                    127.1 504.9 141.3 492.8 150.4L275.2 313.6C263.8 
                    322.1 248.2 322.1 236.8 313.6L19.2 150.4C7.113 
                    141.3 0 127.1 0 112C0 85.49 21.49 64 48 
                    64H464zM217.6 339.2C240.4 356.3 271.6 356.3 
                    294.4 339.2L512 176V384C512 419.3 483.3 448 
                    448 448H64C28.65 448 0 419.3 0 384V176L217.6 339.2z"
                  ></path>
                </svg>
              </button>
            </div>
          </section>
        </section>
        `;
  const copyToClipboard = () => {
    if (!canCopy)
      return displayMessage({
        text: "Can not copy ! Please grant access !",
        type: "error",
      });
    return navigator.clipboard.writeText(children).then(() => {
      return displayMessage({
        type: "message",
        text: "Successfully copied generated code !",
      });
    });
  };
  const displayMessage = ({ type, text }) => {
    setMessage({
      text,
      type,
    });
    return setTimeout(() => {
      setMessage({ text: "", type: "" });
    }, 2500);
  };
  useEffect(() => {
    navigator.permissions.query({ name: "clipboard-write" }).then((result) => {
      if (result.state === "granted" || result.state === "prompt") {
        // write to clipboard
        setCanCopy(true);
      }
    });
  }, []);
  return (
    <>
      <div onClick={() => copyToClipboard()}>
        <ReactMarkdown children={children} />
      </div>
      {message.text && message.type && (
        <>
          {message.type === "error" ? (
            <div className={styles.error}>{message.text}</div>
          ) : (
            <div className={styles.message}>{message.text}</div>
          )}
        </>
      )}
    </>
  );
};
