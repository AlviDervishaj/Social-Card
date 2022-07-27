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
  const [imageDescription, setImageDescription] = useState(imageProps.description);
  const [isLoading, setIsLoading] = useState(false);
  // image title
  const [imageTitle, setImageTitle] = useState(imageProps.title);
  const [isButtonDisabled, setIsButtonDisabled] = useState(true);
  // check if text is a valid URL
  const isValidURL = (text) => {
    let url;
    try {
      url = new URL(text);
    } catch (_) {
      return false;
    }
    console.log(url.protocol === "https:");
    return url.protocol === "https:";
  };

  // discard changes
  const discardChanges = () => {
    setIsLoading(false);
    // display only the image and get rid of the change image UI
    setIsClicked(false);
    setIsButtonDisabled(false);
    // set done to false
    setIsDone(false);
  };
  // check if imageURL is a valid link
  useEffect(() => {
    if (!isValidURL(imageURL)) {
      setIsButtonDisabled(true);
      return setError("Please enter a valid url !");
    }
    setIsButtonDisabled(false);
    setError("");
    setIsDone(true);
  }, [imageURL]);

  // save changes
  const saveChanges = async () => {
    setIsLoading(true);
    // image URL is valid URL
    //
    //process.env.NODE_ENV === "production"
    //    ? process.env.REACT_APP_PRODUCTION_URL
    //    : process.env.REACT_APP_DEVELOPMENT_URL,
    const response = await axios.post(
      process.env.REACT_APP_PRODUCTION_URL,
      { imageURL }
    );
    // set image properties
    setImageDisplayed(
      response.data.image ? response.data.image : imageProps.URL
    );
    // set image description
    setImageDescription(
      response.data.description
        ? response.data.description
        : imageProps.description
    );
    // set image title
    setImageTitle(response.data.title ? response.data.title : imageProps.title);
    // set image URL
    setImageURL(response.data.url ? response.data.url : imageProps.URL);
    // update image props
    setImageProps({
      title: response.data.title ? response.data.title : imageProps.title,
      description: response.data.description ? response.data.description : imageProps.description,
      URL: response.data.url ? response.data.url : imageProps.URL,
    });
    // set is loading to false because server returned a response and
    // UI is updated at this point
    setIsLoading(false);
    // set is clicked to false so user may see the new image
    setIsClicked(false);
    // set is done to false so the save changes button will not be displayed
    setIsDone(false);
    setIsButtonDisabled(false);
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
                    disabled={isButtonDisabled}
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
        {new URL(
          isValidURL(imageURL) ? imageURL : imageProps.URL
        ).hostname.replace("www.", "")}
      </a>
    </div>
  );
};
