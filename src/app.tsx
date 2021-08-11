import { useEffect, useState } from "react";
import Layer from "./layer";
import Map from "./map";
import { MapProvider } from "./map-context";
import Source from "./source";
import SourceAndLayer from "./source-and-layer";
import jsonData from "./data/data.json";
const MAP_TOKEN =
  "pk.eyJ1Ijoibmlrb2xhaS1sdSIsImEiOiJja3MwZDBwbXoxMTk3MzJvOWgyaXBzcGdjIn0.4pm8_84MTcMHvS2eRpXHaA";

const LAYERS = [
  {
    id: "red-layer",
    type: "fill",
    layout: {},
    paint: { "fill-color": "red", "fill-opacity": 0.9 },
  },
  {
    id: "line-layer",
    type: "line",
    layout: {},
    paint: { "line-color": "green", "line-width": 3 },
  },
];

const App = () => {
  const [viewport, changeViewport] = useState({ lng: 13, lat: 50, zoom: 4 });
  const [data, setData] = useState<any>(jsonData);
  const [showedSource, changeShowedSource] = useState(true);

  return (
    <MapProvider>
      <button onClick={() => changeShowedSource(!showedSource)}>
        Hide layer
      </button>

      <Map
        viewport={viewport}
        accessToken={MAP_TOKEN}
        mapStyle="mapbox://styles/mapbox/light-v10"
      >
        {/* {showedSource && (
          <SourceAndLayer
            sourceId="source"
            type="geojson"
            data={data}
            layers={LAYERS}
            showed={showedSource}
          />
        )} */}
        {showedSource && (
          <Source
            id="german"
            type="geojson"
            data={data}
            showed={showedSource}
            layers={LAYERS}
          >
            <Layer />
          </Source>
        )}
      </Map>
    </MapProvider>
  );
};

export default App;
