import {
  isValidElement,
  useEffect,
  cloneElement,
  Children,
  useState,
} from "react";

interface SourceInterface {
  children: any;
  id: string;
  type: string;
  data: string;
  currentMap?: any;
  showed: boolean;
  layers: { [key: string]: any }[];
}

const Source = ({
  id,
  currentMap: map,
  type,
  data,
  children,
  showed,
  layers,
}: SourceInterface) => {
  const [loaded, setLoaded] = useState(false);
  useEffect(() => {
    if (!map) {
      return;
    }
    if (!loaded) {
      setLoaded(true);
    }
    map.addSource(id, {
      type: type,
      data: data,
    });

    return () => {
      layers.map((item) => {
        map.removeLayer(item.id);
        console.log("delete layers");
      });
      map.removeSource(id);
    };
  }, [map, data]);

  const childrenWithProps = Children.map(children, (child) => {
    if (isValidElement(child)) {
      return cloneElement(child, {
        map,
        sourceId: id,
        loaded,
        showed,
        layers,
      } as any);
    }
    return child;
  });

  return <>{childrenWithProps}</>;
};

export default Source;
