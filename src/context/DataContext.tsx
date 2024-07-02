// CameraContext.js
import { createContext, useState, useContext } from "react";

interface DataContextType {
  data: any;
  setData: (val: any) => void;
}

const DataContext = createContext<DataContextType>({
  data: undefined,
  setData: () => {},
});

export const useData = () => useContext(DataContext);

export const DataProvider = ({ children }: any) => {
  const [data, setData] = useState<any>();

  return (
    <DataContext.Provider
      value={{
        data,
        setData,
      }}
    >
      {children}
    </DataContext.Provider>
  );
};
