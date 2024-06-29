import { createContext, useState } from 'react';

const GlobalContext = createContext();

const GlobalProvider = ({ children }) => {

  const [userIsMember, setUserIsMember] = useState(false);
  const [userIsWriter, setUserIsWriter] = useState(false);
  const [userIsAdmin, setUserIsAdmin] = useState(false);

  return (
    <GlobalContext.Provider value={{ 
      userIsMember, 
      setUserIsMember, 
      userIsWriter, 
      setUserIsWriter,
      userIsAdmin, 
      setUserIsAdmin,
      }}>
      {children}
    </GlobalContext.Provider>
  );
};

export { GlobalContext, GlobalProvider };
