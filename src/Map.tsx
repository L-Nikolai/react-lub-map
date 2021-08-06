import "./Map.css";

import { useRef, useEffect, useState } from "react";
import mapboxgl from "mapbox-gl";
mapboxgl.accessToken =
  "pk.eyJ1Ijoibmlrb2xhaS1sdSIsImEiOiJja3MwZDBwbXoxMTk3MzJvOWgyaXBzcGdjIn0.4pm8_84MTcMHvS2eRpXHaA";

const Map = () => {
  const mapContainer: any = useRef();
  const map: any = useRef();
  const [lng, setLng] = useState(-70.9);
  const [lat, setLat] = useState(42.35);
  const [zoom, setZoom] = useState(9);

  useEffect(() => {
    const currentMap = map.current;
    if (currentMap) return;
    map.current = new mapboxgl.Map({
      container: mapContainer.current as any,
      style: "mapbox://styles/mapbox/streets-v11",
      center: [lng, lat],
      zoom: zoom,
    });
  });

  return <div ref={mapContainer} className="map-container" />;
};

export default Map;
