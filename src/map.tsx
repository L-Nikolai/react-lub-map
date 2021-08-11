import "./map.css";
import {
  useRef,
  useEffect,
  ReactNode,
  Children,
  isValidElement,
  cloneElement,
  useState,
} from "react";
import mapboxgl, { Map as MapType } from "mapbox-gl";

interface MapInterface {
  mapStyle: string;
  viewport: { lng: number; lat: number; zoom: number };
  accessToken: string;
  children: ReactNode;
}

const Map = ({ mapStyle, viewport, accessToken, children }: MapInterface) => {
  mapboxgl.accessToken = accessToken;
  const mapContainer: any = useRef();
  const [currentMap, setMap] = useState<null | MapType>(null);

  useEffect(() => {
    if (currentMap) return;
    const mapInstance = new mapboxgl.Map({
      container: mapContainer.current as any,
      style: mapStyle,
      center: [viewport.lng, viewport.lat],
      zoom: viewport.zoom,
    });
    mapInstance.on("load", () => {
      setMap(mapInstance);
    });
  }, []);

  const childrenWithProps = Children.map(children, (child) => {
    if (isValidElement(child)) {
      return cloneElement(child, { currentMap });
    }
    return child;
  });

  return (
    <div ref={mapContainer} className="map-container">
      {childrenWithProps}
    </div>
  );
};

export default Map;
