// CameraContext.js
import { createContext, useState, useContext } from "react";
import { PassiveDiscoverData } from "../mockData/data";

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
  const [data, setData] = useState<PassiveDiscoverData>();

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
