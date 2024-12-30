import { createContext } from 'react';

const UserContext = createContext(null);
const data = { name: 'badol' };
const UserData = ({ children }) => {
  return (
    <>
      <UserContext.Provider value={data}>{children}</UserContext.Provider>
    </>
  );
};

export default UserData;
