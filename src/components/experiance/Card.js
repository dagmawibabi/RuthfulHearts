import { MeshTransmissionMaterial } from "@react-three/drei";
import { useFBO } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useRef } from "react";
import { RoundedBox } from "@react-three/drei";
import { useTexture } from "@react-three/drei";

import { DepthBG } from "./DepthBG";

export function Card({ children }) {
  const buffer = useFBO();
  const ref0 = useRef();
  const ref1 = useRef();
  const normalMap = useTexture("glass1.jpg");
  normalMap.wrapS = normalMap.wrapT = 1000;

  useFrame((state) => {
    ref0.current.visible = true;
    ref1.current.visible = false;
    state.gl.setRenderTarget(buffer);
    state.gl.render(state.scene, state.camera);
    state.gl.setRenderTarget(null);
    ref0.current.visible = false;
    ref1.current.visible = true;
  });

  return (
    <>
      <group ref={ref0}>
        <DepthBG />
        {children}
      </group>

      <RoundedBox ref={ref1} args={[1.5, 2, 0.1]}>
        <MeshTransmissionMaterial
          transmission={1}
          roughness={0.05}
          thickness={0.0005}
          normalMap={normalMap}
          normalScale={[0.1, 0.1]}
          color={"#fff"}
          buffer={buffer.texture}
        />
      </RoundedBox>
    </>
  );
}
