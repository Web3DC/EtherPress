import React, { createContext, useState, useContext } from 'react';

const AppContext = createContext();

export const AppProvider = ({ children }) => {

  const [userIsMember, setUserIsMember] = useState(false);
  const [userIsWriter, setUserIsWriter] = useState(false);
  const [userIsAdmin, setUserIsAdmin] = useState(false);

  return (
    <AppContext.Provider value={{ 
      userIsMember, 
      setUserIsMember, 
      userIsWriter, 
      setUserIsWriter,
      userIsAdmin, 
      setUserIsAdmin,
      }}>
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => {
  return useContext(AppContext);
};