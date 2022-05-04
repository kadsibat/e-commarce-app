import { createContext, useEffect, useState } from "react";
import { mevcutKullanici } from "../firebase/firebase";
import axios from "axios";
export const AppContext = createContext();

const AppContextProvider = ({ children }) => {
  const [state, setState] = useState(false);
  const [currentUser, setCurrentUser] = useState();
  const [category, setCategory] = useState("Shoes");
  const [product, setProduct] = useState();
  const [loadingScreen, setLoadingScreen] = useState(true);
  const [width, setWidth] = useState(window.innerWidth);
  const baseUrl = "http://localhost:5000/";
  useEffect(() => {
    mevcutKullanici(setCurrentUser);
  }, []);
  useEffect(() => {
    setLoadingScreen(true);
    axios
      .get(baseUrl + category)
      .then((result) => {
        setProduct(result.data);
        setTimeout(() => {
          setLoadingScreen(false);
        }, 500);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [category]);

  return (
    <AppContext.Provider
      value={{
        state,
        setState,
        currentUser,
        setCategory,
        product,
        loadingScreen,
        setWidth,
        width,
        baseUrl
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export default AppContextProvider;
