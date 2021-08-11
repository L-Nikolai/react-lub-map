import { useEffect } from "react";

interface SourceAndLayerInterface {
  type: string;
  data: any;
  layers: { [key: string]: any }[];
  currentMap?: any;
  showed: boolean;
  sourceId: string;
}
const SourceAndLayer = ({
  type,
  data,
  layers,
  currentMap: map,
  showed,
  sourceId,
}: SourceAndLayerInterface) => {
  useEffect(() => {
    if (!map) {
      return;
    }
    console.log("add source");
    map.addSource(sourceId, {
      type: type,
      data: data,
    });
    layers.map((item) => {
      console.log("add layer");
      map.addLayer({
        id: item.id,
        type: item.type,
        source: sourceId,
        layout: item.layout,
        paint: item.paint,
      });
    });

    return () => {
      console.log("return");
      layers.map((item) => {
        map.removeLayer(item.id);
        console.log("delete layers");
      });
      map.removeSource(sourceId);
      console.log("delete source");
    };
  }, [data, map, layers, showed]);

  return null;
};

export default SourceAndLayer;
