// React
import {useState, useRef} from "react";

// Styling
import styles from "./Image.module.css";

export const Image = ({image}) => {
  // control image URL 
  const [imageURL, setImageURL] = useState(image);
  // control image change UI
  const [isClicked, setIsClicked] = useState(false);
  // control upload from device button
  const [uploadFromDeviceClickable, setUploadFromDeviceClickable] = useState(false);
  // trigger input click with this ref
  const fileInputRef = useRef();
  // let user upload image from computer or set image url as a link
  const checkImage = (image) => {
    console.log(image);
    // set image URL
    console.log(isValidURL(image));
  }

  const submitChanges = () => {
    
  }

  // check input if it is a valid URL or not
  const isValidURL = (text) => {
    const result = text.match(/(http(s)?:\/\/.)?(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/g);
    return (result !== null);
  }

  // discard changes
  const discardChanges = () => {
    // set image URL to default 
    setImageURL(image);
    // display only the image and get rid of the change image UI
    setIsClicked(false);
  }


  // trigger a click on the hidden input to set a new image from user's device
  const triggerUploadFromDevice = () => {
    fileInputRef.current.click();
  }

  return (
    <div className={styles.imageContainer}>
      {/* Image */}
      <img src={imageURL} alt="Card" className={styles.cardImage} onClick={() => {setIsClicked(!isClicked)}}/>
      {isClicked && 
        <div className={styles.newImageForm}>
          {/* Information */}
          <p className={styles.newImageFormInfo}>
            Upload image from device or enter image URL
          </p>
          <div className={styles.enterImageChoices}>
            {/* Upload from device */}
            <input type="file" accept="image/*" ref={fileInputRef} className={styles.imageInputHidden} />
            {/* Upload from device button */}
            <button onClick={() => triggerUploadFromDevice()} className={styles.imageButton}>Upload from device</button>
            {/* Enter image url */}
            <input type="text" value={imageURL} className={styles.newImageURL} onChange={(event) => checkImage(event.target.value)} /> 
          </div>
          {/* cancel / discard changes */}
          <button className={styles.discardChanges} onClick={() => discardChanges()}>Discard</button>
       </div>
      }
      
    </div>
  )
}
