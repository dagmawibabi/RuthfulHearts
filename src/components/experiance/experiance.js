import { Canvas } from "@react-three/fiber";
import {
  OrbitControls,
  Float,
  Environment,
  Scroll,
  ScrollControls,
} from "@react-three/drei";
import { Card } from "./Card";

export const Experience = () => {
  const numCards = 5; // Number of instances of Card component to render
  const cardSpacing = 3; // Distance between each card

  // Array to hold JSX elements of Card component instances
  const cardElements = [];
  for (let i = 0; i < numCards; i++) {
    cardElements.push(
      <Float
        key={i}
        position={[i * cardSpacing, 0, 0]} // Adjust x-coordinate based on card index
        speed={1}
        rotationIntensity={1}
        floatIntensity={1}
      >
        <Card />
      </Float>
    );
  }

  return (
    <Canvas antialias={true} shadows camera={{ position: [0, 0, 6], fov: 30 }}>
      <color attach="background" args={["#151515"]} />
      <Environment preset="warehouse" blur={0.1} />
      <OrbitControls enableZoom={false} />

      <ScrollControls horizontal={true} pages={6} damping={0.1}>
        <Scroll>
          {/* Render the array of Card components */}
          {cardElements}
        </Scroll>
        <Scroll html>
          {/* DOM contents in here will scroll along */}
          <h1 style={{ top: "10vw" }}> html in here (optional)</h1>
          <h1 style={{ top: "100vw" }}>second page</h1>
          <h1 style={{ top: "200vw" }}>third page</h1>
        </Scroll>
      </ScrollControls>
    </Canvas>
  );
};
