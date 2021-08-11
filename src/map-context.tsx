import { createContext, useState } from "react";

interface MapContextInterface {
  map: any;
  setMap: (value: any) => void;
}
export const MapContext = createContext<MapContextInterface>(
  {} as MapContextInterface
);
export const MapProvider = ({ children }: any): any => {
  const [map, setMap] = useState();

  return (
    <MapContext.Provider value={{ map, setMap }}>
      {children}
    </MapContext.Provider>
  );
};
