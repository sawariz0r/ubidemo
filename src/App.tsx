import "./App.css";
import { Canvas } from "@react-three/fiber";
import { Grid, OrbitControls } from "@react-three/drei";
import { useControls } from "leva";
import { Scan } from "./Components/Scan";
import { useRef } from "react";
import Lights from "./Components/Lights";
import Marker from "./Components/Marker";
import { usePlacedItemStore } from "./store/placedItemStore";
import UbiAP from "./Components/UbiAP";
import APList from "./Components/APList";

function App() {
  const { items: placedItems, addItem } = usePlacedItemStore();
  const canvasRef = useRef<HTMLCanvasElement>(null);

  const { gridSize, ...gridConfig } = useControls("Grid", {
    gridSize: [10.5, 10.5],
    cellSize: { value: 0.6, min: 0, max: 10, step: 0.1 },
    cellThickness: { value: 1, min: 0, max: 5, step: 0.1 },
    cellColor: "#6f6f6f",
    sectionSize: { value: 3.3, min: 0, max: 10, step: 0.1 },
    sectionThickness: { value: 1.5, min: 0, max: 5, step: 0.1 },
    sectionColor: "#000000",
    fadeDistance: { value: 75, min: 0, max: 100, step: 1 },
    fadeStrength: { value: 1, min: 0, max: 1, step: 0.1 },
    followCamera: false,
    infiniteGrid: true,
  });

  return (
    <div style={{ width: "100vw", height: "100vh" }}>
      <Canvas
        shadows
        onDoubleClick={(e) => {
          e.stopPropagation();
          addItem();
        }}
        ref={canvasRef}
        camera={{ position: [10, 12, 12], fov: 25 }}
        style={{ width: "100%" }}
      >
        <Grid position={[0, -0.01, 0]} args={gridSize} {...gridConfig} />
        <Lights />
        <Scan />
        {/*<MyApartment />*/}
        <Marker />
        {placedItems.map((item) => (
          <UbiAP
            key={item.id}
            id={item.id}
            position={item.position.toArray()}
            rotation={item.rotation}
          />
        ))}
        <OrbitControls makeDefault />
      </Canvas>
      <APList />
    </div>
  );
}

export default App;
