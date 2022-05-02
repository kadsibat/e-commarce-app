import { createContext, useEffect, useState } from "react";
import { mevcutKullanici } from "../firebase/firebase";
import axios from "axios";
export const AppContext = createContext();

const AppContextProvider = ({ children }) => {
  const [state, setState] = useState(false);
  const [currentUser, setCurrentUser] = useState();
  const [category, setCategory] = useState("Shoes");
  const [product, setProduct] = useState();
  const baseUrl = "http://localhost:5000/";

  useEffect(() => {
    mevcutKullanici(setCurrentUser);
  }, []);
  useEffect(() => {
    axios
      .get(baseUrl + category)
      .then((result) => {
        setProduct(result.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [category]);
  console.log("object", category);

  return (
    <AppContext.Provider
      value={{ state, setState, currentUser, setCategory, product }}
    >
      {children}
    </AppContext.Provider>
  );
};

export default AppContextProvider;
