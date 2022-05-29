// React
import { useState, createContext } from "react";

// Context
export const CardContext = createContext();

export const CardContextProvider = ({ children }) => {
  // card props state
  const [cardProps, setCardProps] = useState({
    username: "Alvi Dervishaj",
    tag: "@alviiii",
    text: "Click to edit me . ",
    userImage: "https://picsum.photos/400",
    createdDate: "Mar 2",
  });
  // image props state
  const [imageProps, setImageProps] = useState({
    URL: "https://picsum.photos/600",
    title: `Click the image above to change source 
    and it will automatically change the Image title and description below `,
    description: "Click image above to change me .",
  });
  return (
    <CardContext.Provider
      value={{ cardProps, setCardProps, imageProps, setImageProps }}
    >
      {children}
    </CardContext.Provider>
  );
};
