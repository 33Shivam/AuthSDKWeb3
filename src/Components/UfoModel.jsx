import React from "react";
import { Canvas } from "react-three-fiber";
import { OrbitControls } from "@react-three/drei";
import UFO from "./ModelDraco";

function UfoModel() {
  return (
    <div>
      <Canvas>
        <ambientLight />
        <UFO scale={[2, 2, 2]} />
        <OrbitControls autoRotate />
      </Canvas>
    </div>
  );
}

export default UfoModel;
