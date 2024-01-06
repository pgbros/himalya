// MyContext.js
import React, { createContext, useState, useEffect } from 'react';

const MyContext = createContext();

const MyContextProvider = ({ children }) => {
  // Load data from local storage on initial render
  const initialdata = JSON.parse(localStorage.getItem('data')) || {};
  const [data, setData] = useState(initialdata);
  const [userName, setUserName] = useState('');

  // Update local storage whenever greeting changes
  useEffect(() => {
    localStorage.setItem('data', JSON.stringify(data));
  }, [data]);

  return (
    <MyContext.Provider value={{ data, setData, userName, setUserName }}>
      {children}
    </MyContext.Provider>
  );
};

export { MyContext, MyContextProvider };
