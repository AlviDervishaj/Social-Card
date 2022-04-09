// React
import { useContext, useEffect, useState } from "react";

// Styling
import styles from "./Image.module.css";

// Axios
import axios from "axios";

// Font awesome component
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

// font awesome icons
import { faSpinner } from "@fortawesome/free-solid-svg-icons";
import { CardContext } from "../Context";

export const Image = () => {
  const { imageProps, setImageProps } = useContext(CardContext);
  // control image URL input
  const [imageURL, setImageURL] = useState(imageProps.URL);
  // control errors
  const [error, setError] = useState("");
  // control image change UI
  const [isClicked, setIsClicked] = useState(false);
  // control image on UI
  const [imageDisplayed, setImageDisplayed] = useState(imageProps.URL);
  // control the "Done" button
  const [isDone, setIsDone] = useState(false);
  // image description
  const [imageDescription, setImageDescription] = useState(
    "Image Description here !"
  );
  const [isLoading, setIsLoading] = useState(false);
  // image title
  const [imageTitle, setImageTitle] = useState("Image Title Here !");
  // check if text is a valid URL
  const isValidURL = (text) => {
    const result = text.match(
      /(http(s)?:\/\/.)?(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/g
    );
    return result !== null;
  };

  // discard changes
  const discardChanges = () => {
    setIsLoading(false);
    // display only the image and get rid of the change image UI
    setIsClicked(false);
    // set done to false
    setIsDone(false);
  };
  // check if imageURL is a valid link
  useEffect(() => {
    if (!isValidURL(imageURL)) return setError("Please enter a valid url !");
    setError("");
    setIsDone(true);
  }, [imageURL]);

  // save changes
  const saveChanges = async () => {
    setIsLoading(true);
    // image URL is valid URL
    const response = await axios.post(
      process.env.NODE_ENV === "production"
        ? process.env.REACT_APP_PRODUCTION_URL
        : process.env.REACT_APP_DEVELOPMENT_URL,
      { imageURL }
    );
    // set image properties
    setImageDisplayed(
      response.data.image ? response.data.image : imageProps.URL
    );
    setImageDescription(
      response.data.description
        ? response.data.description
        : "Image Description Here !"
    );
    setImageTitle(
      response.data.title ? response.data.title : "Image Title Here ! "
    );
    setImageURL(response.data.url ? response.data.url : imageProps.URL);
    setImageProps({
      URL: response.data.url ? response.data.url : imageProps.URL,
    });
    // set booleans
    setIsLoading(false);
    setIsClicked(false);
    setIsDone(false);
  };

  // wake up the server with an initial empty request
  useEffect(() => {
    axios.get("https://floating-taiga-71718.herokuapp.com/");
  }, []);
  return (
    <div className={styles.imageContainer}>
      {/* Image */}
      <img
        src={imageDisplayed}
        alt="Card"
        className={styles.cardImage}
        onClick={() => {
          setIsClicked(!isClicked);
        }}
      />
      {isClicked && (
        <div className={styles.newImageForm}>
          {!isLoading ? (
            <>
              {/* Information */}
              <p className={styles.newImageFormInfo}>Enter image URL</p>
              <div className={styles.enterImageChoices}>
                {/* Enter image url */}
                <input
                  type="text"
                  value={imageURL}
                  className={styles.newImageURL}
                  onChange={(event) => setImageURL(event.target.value)}
                />
              </div>
              {error && <p className={styles.error}>{error}</p>}
              {/* Buttons */}
              <section className={styles.buttons}>
                {/* Save Changes */}
                {isDone && (
                  <button
                    className={styles.saveChanges}
                    onClick={() => saveChanges()}
                  >
                    Save
                  </button>
                )}
                {/* cancel / discard changes */}
                <button
                  className={styles.discardChanges}
                  onClick={() => discardChanges()}
                >
                  Discard
                </button>
              </section>
            </>
          ) : (
            <FontAwesomeIcon
              icon={faSpinner}
              className={`fa-spin-pulse ${styles.loadingIcon}`}
            />
          )}
        </div>
      )}
      {/* Image Title */}
      <p className={styles.imageTitle}>{imageTitle}</p>
      {/* Image description */}
      <p className={styles.imageDescription}>{imageDescription}</p>
      {/* Image URL */}
      <a
        href={imageURL}
        rel="noreferrer"
        target={"_blank"}
        className={styles.imageSource}
      >
        {isValidURL(imageURL)
          ? new URL(imageURL).hostname.replace("www", "")
          : new URL(imageProps.URL).hostname.replace("www", "")}
      </a>
    </div>
  );
};
