import { useGLTF } from "@react-three/drei";
import { useControls } from "leva";
import { usePlacedItemStore } from "../store/placedItemStore";
import { GLTF } from 'three-stdlib'

type Props = {
  id: string;
  position: [number, number, number];
  rotation: THREE.Euler;
};

type GLTFResult = GLTF & {
  nodes: {
    Mesh: THREE.Mesh
    Mesh_001: THREE.Mesh
    Mesh_002: THREE.Mesh
    Mesh_003: THREE.Mesh
    Mesh_004: THREE.Mesh
    Mesh_005: THREE.Mesh
    Mesh_006: THREE.Mesh
    Mesh_007: THREE.Mesh
  }
  materials: {
    base: THREE.MeshStandardMaterial
    light: THREE.MeshStandardMaterial
    logo: THREE.MeshStandardMaterial
  }
}

export function Model(props: Props) {
  const { showWireframe, setHoveringItem } = usePlacedItemStore();
  const { nodes, materials } = useGLTF("/3d/unifi_ap.glb") as GLTFResult;

  const groupControls = useControls(`AP - ${props.id}`, {
    position: {
      value: props.position,
      step: 0.01,
    },
    rotation: {
      value: [props.rotation.x, props.rotation.y, props.rotation.z],
      step: 0.01,
    },
  });

  return (
    <group {...groupControls} dispose={null} scale={1} name="UbiAP">
      {showWireframe && (
        <mesh rotation={[0, 0, 0]} receiveShadow={false} castShadow={false}>
          <sphereGeometry attach="geometry" args={[5, 32, 16]} />
          <meshBasicMaterial attach="material" wireframe color="cyan" />
        </mesh>
      )}
      <group
        rotation={[(Math.PI / 2) * 2, 0, 0]}
        position={[0, 0, -0.02]}
        onPointerEnter={() => {
          props.id && setHoveringItem(props.id);
        }}
        onPointerOut={() => {
          setHoveringItem(null);
        }}
      >
        <mesh geometry={nodes.Mesh.geometry} material={materials.base} />
        <mesh geometry={nodes.Mesh_001.geometry} material={materials.base} />
        <mesh geometry={nodes.Mesh_002.geometry} material={materials.base} />
        <mesh geometry={nodes.Mesh_003.geometry} material={materials.light} />
        <mesh geometry={nodes.Mesh_004.geometry} material={materials.base} />
        <mesh geometry={nodes.Mesh_005.geometry} material={materials.logo} />
        <mesh geometry={nodes.Mesh_006.geometry} material={materials.base} />
        <mesh geometry={nodes.Mesh_007.geometry} material={materials.base} />
      </group>
    </group>
  );
}

useGLTF.preload("/3d/unifi_ap.glb");
export default Model;
