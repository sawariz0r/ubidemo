import { useGLTF } from "@react-three/drei";
import { GLTF } from 'three-stdlib'
import * as THREE from "three";

type Props = {
  position?: [number, number, number];
  rotation?: [number, number, number];
};

type GLTFResult = GLTF & {
  nodes: {
    Chair0: THREE.Mesh;
    Chair1: THREE.Mesh;
    Chair2: THREE.Mesh;
    Chair3: THREE.Mesh;
    Chair4: THREE.Mesh;
    Chair5: THREE.Mesh;
    Chair6: THREE.Mesh;
    Chair7: THREE.Mesh;
    Chair8: THREE.Mesh;
    Sofa0: THREE.Mesh;
    Sofa1: THREE.Mesh;
    Sofa2: THREE.Mesh;
    Storage0: THREE.Mesh;
    Storage1: THREE.Mesh;
    Storage2: THREE.Mesh;
    Storage3: THREE.Mesh;
    Storage4: THREE.Mesh;
    Storage5: THREE.Mesh;
    Table0: THREE.Mesh;
    Table1: THREE.Mesh;
    Table2: THREE.Mesh;
    Television0: THREE.Mesh;
    Television1: THREE.Mesh;
    Wall0: THREE.Mesh;
    Wall1: THREE.Mesh;
    Wall10: THREE.Mesh;
    Wall11: THREE.Mesh;
    Wall12: THREE.Mesh;
    Wall13: THREE.Mesh;
    Wall14: THREE.Mesh;
    Wall15: THREE.Mesh;
    Wall16: THREE.Mesh;
    Wall17: THREE.Mesh;
    Wall18: THREE.Mesh;
    Wall19: THREE.Mesh;
    Wall2: THREE.Mesh;
    Wall20: THREE.Mesh;
    Wall21: THREE.Mesh;
    Wall22: THREE.Mesh;
    Wall23: THREE.Mesh;
    Wall24: THREE.Mesh;
    Wall25: THREE.Mesh;
    Wall26: THREE.Mesh;
    Wall27: THREE.Mesh;
    Wall28: THREE.Mesh;
    Wall29: THREE.Mesh;
    Wall3: THREE.Mesh;
    Wall30: THREE.Mesh;
    Wall31: THREE.Mesh;
    Wall32: THREE.Mesh;
    Wall33: THREE.Mesh;
    Wall34: THREE.Mesh;
    Wall4: THREE.Mesh;
    Wall5: THREE.Mesh;
    Wall6: THREE.Mesh;
    Wall7: THREE.Mesh;
    Wall8: THREE.Mesh;
    Wall9: THREE.Mesh;
    FloorNode_1: THREE.Mesh;
    FloorNode_2: THREE.Mesh;
    FloorNode_3: THREE.Mesh;
    FloorNode_4: THREE.Mesh;
    FloorNode_5: THREE.Mesh;
    FloorNode_6: THREE.Mesh;
    CeilingNode_1: THREE.Mesh;
    CeilingNode_2: THREE.Mesh;
    CeilingNode_3: THREE.Mesh;
    CeilingNode_4: THREE.Mesh;
    CeilingNode_5: THREE.Mesh;
    CeilingNode_6: THREE.Mesh;
  };
  materials: {
    Chair0_material_1: THREE.MeshStandardMaterial;
    CeilingNode_material_1: THREE.MeshStandardMaterial;
  };
};

export function Scan(props: Props) {
  const { nodes, materials } = useGLTF("/3d/scan.gltf") as GLTFResult;

  // material that casts shadows and receives shadows
  const wallMaterial = new THREE.MeshStandardMaterial({
    side: THREE.DoubleSide,
    color: "#a5e1ad",
    metalness: 0.1,
    roughness: 0.75,
    shadowSide: THREE.DoubleSide,
    transparent: true,
    opacity: 0.8,
  });

  return (
    <group position={[-12.97, 1.74, 2]} {...props} dispose={null}>
      <mesh
        geometry={nodes.Chair0.geometry}
        material={materials.Chair0_material_1}
        position={[2.78, -1.09, 0.6]}
        rotation={[-Math.PI, 0.92, -Math.PI]}
      />
      <mesh
        geometry={nodes.Chair1.geometry}
        material={materials.Chair0_material_1}
        position={[7, -1.18, 2.22]}
        rotation={[0, 0.83, 0]}
      />
      <mesh
        geometry={nodes.Chair2.geometry}
        material={materials.Chair0_material_1}
        position={[2.87, -1.21, -3.14]}
        rotation={[-Math.PI, 0.74, -Math.PI]}
      />
      <mesh
        geometry={nodes.Chair3.geometry}
        material={materials.Chair0_material_1}
        position={[9.03, -1.18, 3.25]}
        rotation={[0, -0.74, 0]}
      />
      <mesh
        geometry={nodes.Chair4.geometry}
        material={materials.Chair0_material_1}
        position={[7.67, -1.18, 2.02]}
        rotation={[0, -0.74, 0]}
      />
      <mesh
        geometry={nodes.Chair5.geometry}
        material={materials.Chair0_material_1}
        position={[8.35, -1.18, 2.64]}
        rotation={[0, -0.74, 0]}
      />
      <mesh
        geometry={nodes.Chair6.geometry}
        material={materials.Chair0_material_1}
        position={[8.21, -1.18, 4.15]}
        rotation={[-Math.PI, 0.74, -Math.PI]}
      />
      <mesh
        geometry={nodes.Chair7.geometry}
        material={materials.Chair0_material_1}
        position={[6.86, -1.18, 2.92]}
        rotation={[-Math.PI, 0.74, -Math.PI]}
      />
      <mesh
        geometry={nodes.Chair8.geometry}
        material={materials.Chair0_material_1}
        position={[7.53, -1.18, 3.53]}
        rotation={[-Math.PI, 0.74, -Math.PI]}
      />
      <mesh
        geometry={nodes.Sofa0.geometry}
        material={materials.Chair0_material_1}
        position={[4.48, -1.1, -1.53]}
        rotation={[0, -0.51, 0]}
      />
      <mesh
        geometry={nodes.Sofa1.geometry}
        material={materials.Chair0_material_1}
        position={[7.71, -1.12, 9.02]}
        rotation={[-Math.PI, 0, -Math.PI]}
      />
      <mesh
        geometry={nodes.Sofa2.geometry}
        material={materials.Chair0_material_1}
        position={[2.87, -1.14, -0.95]}
        rotation={[0, 0.83, 0]}
      />
      <mesh
        geometry={nodes.Storage0.geometry}
        material={materials.Chair0_material_1}
        position={[4.85, -1.22, 1.06]}
        rotation={[-Math.PI, -0.83, -Math.PI]}
      />
      <mesh
        geometry={nodes.Storage1.geometry}
        material={materials.Chair0_material_1}
        position={[12.45, -0.53, 5.29]}
        rotation={[-Math.PI, -0.83, -Math.PI]}
      />
      <mesh
        geometry={nodes.Storage2.geometry}
        material={materials.Chair0_material_1}
        position={[5.98, -0.79, 0.05]}
        rotation={[-Math.PI, -0.83, -Math.PI]}
      />
      <mesh
        geometry={nodes.Storage3.geometry}
        material={materials.Chair0_material_1}
        position={[10.34, -0.6, 5.48]}
        rotation={[-Math.PI, 0.73, -Math.PI]}
      />
      <mesh
        geometry={nodes.Storage4.geometry}
        material={materials.Chair0_material_1}
        position={[1.16, -0.78, -2.64]}
        rotation={[0, 0.83, 0]}
      />
      <mesh
        geometry={nodes.Storage5.geometry}
        material={materials.Chair0_material_1}
        position={[13.01, -0.86, 4.73]}
        rotation={[-Math.PI, -0.83, -Math.PI]}
      />
      <mesh
        geometry={nodes.Table0.geometry}
        material={materials.Chair0_material_1}
        position={[6.84, -1.29, 8.73]}
        rotation={[-Math.PI, 0.77, -Math.PI]}
      />
      <mesh
        geometry={nodes.Table1.geometry}
        material={materials.Chair0_material_1}
        position={[7.94, -1.09, 3.08]}
        rotation={[0, -0.74, 0]}
      />
      <mesh
        geometry={nodes.Table2.geometry}
        material={materials.Chair0_material_1}
        position={[3.06, -1.13, -3.35]}
        rotation={[-Math.PI, 0.74, -Math.PI]}
      />
      <mesh
        geometry={nodes.Television0.geometry}
        material={materials.Chair0_material_1}
        position={[9.05, -0.11, 4.02]}
        rotation={[-Math.PI, -0.83, -Math.PI]}
      />
      <mesh
        geometry={nodes.Television1.geometry}
        material={materials.Chair0_material_1}
        position={[4.91, -0.4, 1.05]}
        rotation={[-Math.PI, -0.83, -Math.PI]}
      />
      <mesh
        geometry={nodes.Wall0.geometry}
        material={wallMaterial}
        name="Wall"
        position={[12.46, 0.13, 5.62]}
        rotation={[-Math.PI, -0.83, -Math.PI]}
      />
      <mesh
        geometry={nodes.Wall1.geometry}
        material={wallMaterial}
        name="Wall"
        position={[15.17, 0.13, 10.94]}
        rotation={[-Math.PI, -0.83, -Math.PI]}
      />
      <mesh
        geometry={nodes.Wall10.geometry}
        material={wallMaterial}
        name="Wall"
        position={[3.21, 0.13, 2.16]}
        rotation={[-Math.PI, 0.74, -Math.PI]}
      />
      <mesh
        geometry={nodes.Wall11.geometry}
        material={wallMaterial}
        name="Wall"
        position={[14.2, 0.13, 16.05]}
        rotation={[-Math.PI, 0.32, -Math.PI]}
      />
      <mesh
        geometry={nodes.Wall12.geometry}
        material={wallMaterial}
        name="Wall"
        position={[-1.82, 0.13, 0.57]}
        rotation={[-Math.PI, 1.11, -Math.PI]}
      />
      <mesh
        geometry={nodes.Wall13.geometry}
        material={wallMaterial}
        name="Wall"
        position={[2.45, 0.13, -4.05]}
        rotation={[-Math.PI, 1.41, -Math.PI]}
      />
      <mesh
        geometry={nodes.Wall14.geometry}
        material={wallMaterial}
        name="Wall"
        position={[18.08, 0.13, 14.25]}
        rotation={[0, -0.74, 0]}
      />
      <mesh
        geometry={nodes.Wall15.geometry}
        material={wallMaterial}
        name="Wall"
        position={[10.78, 0.13, 12.93]}
        rotation={[-Math.PI, 0.76, -Math.PI]}
      />
      <mesh
        geometry={nodes.Wall16.geometry}
        material={wallMaterial}
        name="Wall"
        position={[10.17, 0.13, 7.17]}
        rotation={[-Math.PI, -0.83, -Math.PI]}
      />
      <mesh
        geometry={nodes.Wall17.geometry}
        material={wallMaterial}
        name="Wall"
        position={[11.15, 0.13, 6.7]}
        rotation={[-Math.PI, 0.69, -Math.PI]}
      />
      <mesh
        geometry={nodes.Wall18.geometry}
        material={wallMaterial}
        name="Wall"
        position={[10.37, 0.13, 6.03]}
        rotation={[-Math.PI, 0.73, -Math.PI]}
      />
      <mesh
        geometry={nodes.Wall19.geometry}
        material={wallMaterial}
        name="Wall"
        position={[2.6, 0.13, -4.5]}
        rotation={[0, 0.83, 0]}
      />
      <mesh
        geometry={nodes.Wall2.geometry}
        material={wallMaterial}
        name="Wall"
        position={[14.93, 0.13, 10.13]}
        rotation={[0, -0.88, 0]}
      />
      <mesh
        geometry={nodes.Wall20.geometry}
        material={wallMaterial}
        name="Wall"
        position={[0.86, 0.13, -2.58]}
        rotation={[0, 0.83, 0]}
      />
      <mesh
        geometry={nodes.Wall21.geometry}
        material={wallMaterial}
        name="Wall"
        position={[2.34, 0.13, -3.93]}
        rotation={[0, -0.65, 0]}
      />
      <mesh
        geometry={nodes.Wall22.geometry}
        material={wallMaterial}
        name="Wall"
        position={[10.99, 0.13, 9.25]}
        rotation={[0, -0.74, 0]}
      />
      <mesh
        geometry={nodes.Wall23.geometry}
        material={wallMaterial}
        name="Wall"
        position={[12.94, 0.13, 11]}
        rotation={[0, -0.71, 0]}
      />
      <mesh
        geometry={nodes.Wall24.geometry}
        material={wallMaterial}
        name="Wall"
        position={[12.91, 0.13, 10.13]}
        rotation={[0, 0.84, 0]}
      />
      <mesh
        geometry={nodes.Wall25.geometry}
        material={wallMaterial}
        name="Wall"
        position={[12.22, 0.13, 3.36]}
        rotation={[0, -0.74, 0]}
      />
      <mesh
        geometry={nodes.Wall26.geometry}
        material={wallMaterial}
        name="Wall"
        position={[9.35, 0.13, 4.24]}
        rotation={[0, 0.83, 0]}
      />
      <mesh
        geometry={nodes.Wall27.geometry}
        material={wallMaterial}
        name="Wall"
        position={[8.58, 0.13, 0.05]}
        rotation={[0, -0.74, 0]}
      />
      <mesh
        geometry={nodes.Wall28.geometry}
        material={wallMaterial}
        name="Wall"
        position={[5.99, 0.13, -2.43]}
        rotation={[0, -0.74, 0]}
      />
      <mesh
        geometry={nodes.Wall29.geometry}
        material={wallMaterial}
        name="Wall"
        position={[5.7, 0.13, -2.69]}
        rotation={[0, -0.73, 0]}
      />
      <mesh
        geometry={nodes.Wall3.geometry}
        material={wallMaterial}
        name="Wall"
        position={[13.62, 0.13, 9.91]}
        rotation={[0, -0.74, 0]}
      />
      <mesh
        geometry={nodes.Wall30.geometry}
        material={wallMaterial}
        name="Wall"
        position={[5.39, 0.13, -2.92]}
        rotation={[0, -0.57, 0]}
      />
      <mesh
        geometry={nodes.Wall31.geometry}
        material={wallMaterial}
        name="Wall"
        position={[5.06, 0.13, -3.13]}
        rotation={[0, -0.51, 0]}
      />
      <mesh
        geometry={nodes.Wall32.geometry}
        material={wallMaterial}
        name="Wall"
        position={[4.71, 0.13, -3.3]}
        rotation={[0, -0.42, 0]}
      />
      <mesh
        geometry={nodes.Wall33.geometry}
        material={wallMaterial}
        name="Wall"
        position={[4.35, 0.13, -3.45]}
        rotation={[0, -0.34, 0]}
      />
      <mesh
        geometry={nodes.Wall34.geometry}
        material={wallMaterial}
        name="Wall"
        position={[4.06, 0.13, -3.54]}
        rotation={[0, -0.27, 0]}
      />
      <mesh
        geometry={nodes.Wall4.geometry}
        material={wallMaterial}
        name="Wall"
        position={[14.3, 0.13, 9.99]}
        rotation={[0, 0.83, 0]}
      />
      <mesh
        geometry={nodes.Wall5.geometry}
        material={wallMaterial}
        name="Wall"
        position={[9.36, 0.13, 6.21]}
        rotation={[-Math.PI, -0.83, -Math.PI]}
      />
      <mesh
        geometry={nodes.Wall6.geometry}
        material={wallMaterial}
        name="Wall"
        position={[14.16, 0.13, 15.85]}
        rotation={[-Math.PI, -0.76, -Math.PI]}
      />
      <mesh
        geometry={nodes.Wall7.geometry}
        material={wallMaterial}
        name="Wall"
        position={[14.34, 0.13, 15.91]}
        rotation={[-Math.PI, 1.41, -Math.PI]}
      />
      <mesh
        geometry={nodes.Wall8.geometry}
        material={wallMaterial}
        name="Wall"
        position={[3.36, 0.13, 5.67]}
        rotation={[-Math.PI, 0.77, -Math.PI]}
      />
      <mesh
        geometry={nodes.Wall9.geometry}
        material={wallMaterial}
        name="Wall"
        position={[16.25, 0.13, 17.91]}
        rotation={[-Math.PI, 0.77, -Math.PI]}
      />
      <mesh geometry={nodes.FloorNode_1.geometry} material={wallMaterial} />
      <mesh geometry={nodes.FloorNode_2.geometry} material={wallMaterial} />
      <mesh geometry={nodes.FloorNode_3.geometry} material={wallMaterial} />
      <mesh geometry={nodes.FloorNode_4.geometry} material={wallMaterial} />
      <mesh geometry={nodes.FloorNode_5.geometry} material={wallMaterial} />
      <mesh geometry={nodes.FloorNode_6.geometry} material={wallMaterial} />
    </group>
  );
}

useGLTF.preload("/3d/scan.gltf");
