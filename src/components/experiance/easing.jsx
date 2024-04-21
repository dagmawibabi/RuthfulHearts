import { useFrame } from "@react-three/fiber";
import { easing } from "maath";

const Easing = () => {
  useFrame((state, delta) => {
    state.events.update(); // Raycasts every frame rather than on pointer-move
    easing.damp3(
      state.camera.position,
      [-state.pointer.x * 2, state.pointer.y + 0.5, 6],
      0.3,
      delta
    ); // Move camera
    state.camera.lookAt(0, 0, 0); // Look at center
  });

  return null; // Since this component doesn't render anything, return null
};

export default Easing;
