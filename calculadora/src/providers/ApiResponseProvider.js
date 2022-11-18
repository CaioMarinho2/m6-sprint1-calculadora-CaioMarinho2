import { createContext } from "react";
import { useState } from "react";

export const apiResponseContext = createContext([]);

export const ApiResponseProvider = ({ children }) => {
  const [responseApi, setResponseApi] = useState({ 1: 0, 15: 0, 30: 0, 90: 0 });

  return (
    <apiResponseContext.Provider value={{ responseApi, setResponseApi }}>
      {children}
    </apiResponseContext.Provider>
  );
};
