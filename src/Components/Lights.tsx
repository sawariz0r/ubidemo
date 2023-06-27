import { useHelper } from "@react-three/drei";
import { useControls } from "leva";
import { useRef } from "react";
import { DirectionalLightHelper } from "three";

const Lights = () => {
  const ambientSettings = useControls("Ambient Light", {
    color: "#ffffff",
    intensity: { value: 0.5, min: 0, max: 10, step: 0.1 },
  });

  const directionalSettings = useControls("Directional Light", {
    color: "#ffffff",
    intensity: { value: 0.5, min: 0, max: 10, step: 0.1 },
    position: [-17, 10, -17],
    castShadow: true,
    shadowMapSize: 2048,
    shadowBias: 0.0001,
    shadowCameraNear: 0.1,
    shadowCameraFar: 100,
    shadowCameraLeft: -10,
    shadowCameraRight: 10,
  });

  const directionalSecondSettings = useControls("Directional Light 2", {
    color: "#ffffff",
    intensity: { value: 0.5, min: 0, max: 10, step: 0.1 },
    position: [10, 10, 10],
    castShadow: true,
    shadowMapSize: 2048,
    shadowBias: 0.0001,
    shadowCameraNear: 0.1,
    shadowCameraFar: 100,
    shadowCameraLeft: -10,
    shadowCameraRight: 10,
  });

  const directionalRef = useRef(null);
  const directional2Ref = useRef(null);
  // We can safely ignore these for now
  // @ts-ignore
  useHelper(directionalRef, DirectionalLightHelper, 10, "cyan");
  // @ts-ignore
  useHelper(directional2Ref, DirectionalLightHelper, 10, "magenta");

  return (
    <>
      <ambientLight {...ambientSettings} />
      <directionalLight
        {...directionalSettings}
        castShadow
        ref={directionalRef}
      />
      <directionalLight
        {...directionalSecondSettings}
        castShadow
        ref={directional2Ref}
      />
    </>
  );
};

export default Lights;
