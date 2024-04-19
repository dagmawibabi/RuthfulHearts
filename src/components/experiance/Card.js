import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { MeshTransmissionMaterial, Environment } from "@react-three/drei";
import { useFBO } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useRef } from "react";
import { RoundedBox } from "@react-three/drei";
// import { Splat } from "./splat";
import { useTexture } from "@react-three/drei";
import { useControls } from "leva";
import Text from "./text";

import { DepthBG } from "./DepthBG";

export function Card() {
  const { roughness, transmission, rotation, show, color } = useControls({
    roughness: { value: 0.05, min: 0, max: 1 },
    transmission: { value: 1, min: 0, max: 1 },
    rotation: { value: 1.4 * Math.PI, min: 0, max: 2 * Math.PI },
    show: { value: false },
    color: { value: "#fff" },
  });
  const buffer = useFBO();
  const ref0 = useRef();
  const ref = useRef();
  const ref1 = useRef();
  const material = useRef();
  const normalMap = useTexture("glass1.jpg");
  normalMap.wrapS = normalMap.wrapT = 1000;

  useFrame((state) => {
    ref0.current.visible = true;
    ref1.current.visible = false;
    state.gl.setRenderTarget(buffer);
    state.gl.render(state.scene, state.camera);
    state.gl.setRenderTarget(null);
    ref0.current.visible = show;
    ref1.current.visible = true;
  });

  return (
    <>
      <group ref={ref0}>
        <DepthBG />
        {/* <Splat
          ref={ref}
          scale={0.05}
          rotation={[0, rotation / 1, 0]}
          position={[-1.5, -0.2, -0.5]}
          src="tenkara.splat"
        /> */}
        <Text />
      </group>

      <RoundedBox
        ref={ref1}
        position={[0, 0, 0.8]}
        args={[1.5, 2, 0.1]}
        // radius={0.04}
      >
        <MeshTransmissionMaterial
          ref={material}
          transmission={transmission}
          roughness={roughness}
          thickness={0.0005}
          normalMap={normalMap}
          normalScale={[0.1, 0.1]}
          color={color}
          buffer={buffer.texture}
        />
      </RoundedBox>
    </>
  );
}
