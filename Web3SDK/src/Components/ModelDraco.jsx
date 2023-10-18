/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.13 modelDraco.gltf --transform 
Files: modelDraco.gltf [17.73KB] > modelDraco-transformed.glb [12.14KB] (32%)
Author: TomaszObloj (https://sketchfab.com/tomasz_obloj)
License: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
Source: https://sketchfab.com/3d-models/ufo-911c4e86384b44aa864489f1d51b700b
Title: UFO
*/

import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";

export default function Model(props) {
  const { nodes, materials } = useGLTF("/modelDraco-transformed.glb");
  return (
    <group
      // rotation={[Math.PI / 4, Math.PI / 8, Math.PI / 100]}
      scale={[10, 10, 10]}
      {...props}
      dispose={null}
    >
      <mesh
        geometry={nodes.Object_4.geometry}
        material={materials.PaletteMaterial001}
      />
      <mesh
        geometry={nodes.Object_5.geometry}
        material={materials.PaletteMaterial002}
      />
      <mesh
        geometry={nodes.Object_6.geometry}
        material={materials.PaletteMaterial003}
      />
      <mesh
        geometry={nodes.Object_7.geometry}
        material={materials.PaletteMaterial004}
      />
    </group>
  );
}

useGLTF.preload("/modelDraco-transformed.glb");