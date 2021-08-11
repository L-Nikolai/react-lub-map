import { useEffect } from "react";

interface LayerInterface {
  map?: any;
  sourceId?: string;
  loaded?: boolean;
  showed?: boolean;
  layers?: { [key: string]: any }[];
}
const Layer = ({ map, sourceId, loaded, showed, layers }: LayerInterface) => {
  useEffect(() => {
    console.log("layer");
    if (map) {
      console.log("map: layer");
      layers?.map((item) => {
        map.addLayer({
          id: item.id,
          type: item.type,
          source: sourceId,
          layout: item.layout,
          paint: item.paint,
        });
      });
    }
  }, [map, loaded, showed]);
  return null;
};

export default Layer;
