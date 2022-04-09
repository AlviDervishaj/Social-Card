// React
import { useState, createContext } from "react";

// Context
export const CardContext = createContext();

export const CardContextProvider = ({ children }) => {
  // card props state
  const [cardProps, setCardProps] = useState({
    username: "Alvi Dervishaj",
    tag: "@alviiii",
    text: "Hello World !",
    userImage: "https://picsum.photos/400",
    createdDate: "Mar 2",
  });
  // image props state
  const [imageProps, setImageProps] = useState({
    URL: "https://picsum.photos/600",
    title: "Image Title Here !",
    description: "Image Description Here !",
  });
  return (
    <CardContext.Provider
      value={{ cardProps, setCardProps, imageProps, setImageProps }}
    >
      {children}
    </CardContext.Provider>
  );
};
