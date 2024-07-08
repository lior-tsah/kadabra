// CameraContext.js
import { createContext, useState, useContext } from "react";
import { PassiveDiscoverData } from "../mockData/data";
import { BoardData } from "../components/kanbanBoard/types";

interface DataContextType {
  data: any;
  setData: (val: any) => void;
  currentData: any;
  setCurrentData: (val: any) => void;
  kanbanData?: BoardData;
  setKanbanData: (val: BoardData) => void;
}

const DataContext = createContext<DataContextType>({
  data: undefined,
  setData: () => {},
  currentData: undefined,
  setCurrentData: () => {},
  kanbanData: undefined,
  setKanbanData: () => {},
});

export const useData = () => useContext(DataContext);

export const DataProvider = ({ children }: any) => {
  const [data, setData] = useState<PassiveDiscoverData>();
  const [currentData, setCurrentData] = useState<any>(null);
  const [kanbanData, setKanbanData] = useState<BoardData>();

  return (
    <DataContext.Provider
      value={{
        data,
        setData,
        currentData,
        setCurrentData,
        kanbanData,
        setKanbanData,
      }}
    >
      {children}
    </DataContext.Provider>
  );
};
