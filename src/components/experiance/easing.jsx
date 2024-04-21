import { useFrame } from "@react-three/fiber";
import { easing } from "maath";
import { Image, Float } from "@react-three/drei";

const Easing = () => {
  useFrame((state, delta) => {
    state.events.update();
    easing.damp3(
      state.camera.position,
      [-state.pointer.x * 2, state.pointer.y + 0.5, 5.4],
      0.3,
      delta
    );
    state.camera.lookAt(0, 0, 0);
  });

  const images = [];
  const imageCount = 30;
  const maxXOffset = 3.5;
  const maxYOffset = 1.5;
  for (let i = 0; i < imageCount; i++) {
    const xOffset = (Math.random() - 0.5) * maxXOffset * 2;
    const yOffset = (Math.random() - 0.5) * maxYOffset * 2;
    const zOffset = -1;
    images.push(
      <Float key={i} position={[xOffset, yOffset, zOffset]}>
        <Image url="./H.png" scale={0.3} />
      </Float>
    );
  }

  return <>{images}</>;
};

export default Easing;
