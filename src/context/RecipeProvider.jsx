import React, { createContext, useState } from "react";
import axios from "axios";

export const RecipeContext = createContext();

const RecipeProvider = ({ children }) => {
  const [username, setUsername] = useState();
  return(
  <RecipeContext.Provider
    value={{
      username,
    }}
  >
    {children}
  </RecipeContext.Provider>)
};

export default RecipeProvider;
