import { useFrame, useThree } from "@react-three/fiber";
import { useEffect, useMemo, useRef } from "react";
import * as THREE from "three";
import { usePlacedItemStore } from "../store/placedItemStore";
import UbiAP from "./UbiAP";

const Marker = () => {
  const updateIntersect = usePlacedItemStore((state) => state.updateIntersect);
  const meshRef = useRef<THREE.Mesh>(null);

  const { camera, mouse, scene } = useThree();
  const raycaster = useMemo(() => new THREE.Raycaster(), []);

  const hoverItemRef = useRef(usePlacedItemStore.getState().hoveringItem);

  useEffect(() => {
    usePlacedItemStore.subscribe(
      (state) => (hoverItemRef.current = state.hoveringItem)
    );
  }, []);

  useFrame(() => {
    if (meshRef.current) {
      // Update raycaster with mouse and camera
      raycaster.setFromCamera(mouse, camera);

      // Get intersects with wall
      const intersects = raycaster.intersectObjects(scene.children, true);

      // If intersecting, set cube position to intersection point
      for (const intersection of intersects) {
        if (intersection.object.name === "Wall") {
          // Not going to lie,
          meshRef.current.visible = true;
          // the walls normal
          const normal = intersection.face?.normal;

          // if there's no normal or no intersection point, break
          if (!normal || !intersection.point) {
            break;
          }

          // rotate the normal to match the wall rotation
          const matrix = new THREE.Matrix4().makeRotationFromEuler(
            intersection.object.rotation
          );
          normal?.applyMatrix4(matrix);

          // rotate the cube to match the wall normal
          meshRef.current.rotation.setFromRotationMatrix(
            new THREE.Matrix4().lookAt(new THREE.Vector3(), normal, normal)
          );

          meshRef.current.position.copy(intersection.point);
          updateIntersect(meshRef.current.position, meshRef.current.rotation);
          break;
        }

        // If not intersecting, hide cube
        meshRef.current.visible = false;
      }
    }
  });

  return (
    <mesh ref={meshRef}>
      <UbiAP
        id="none"
        position={[0, 0, 0]}
        rotation={new THREE.Euler(0, 0, 0, "XYZ")}
      />
    </mesh>
  );
};

export default Marker;
