import React, { createContext, useState, ReactNode } from 'react';

interface AppContextProps {
  data: unknown;
  setData: React.Dispatch<React.SetStateAction<unknown>>;
}

const AppContext = createContext<AppContextProps | undefined>(undefined);

const AppProvider = ({ children }: { children: ReactNode }) => {
  const [data, setData] = useState<unknown>(null);

  return (
    <AppContext.Provider value={{ data, setData }}>
      {children}
    </AppContext.Provider>
  );
};

export { AppContext, AppProvider };