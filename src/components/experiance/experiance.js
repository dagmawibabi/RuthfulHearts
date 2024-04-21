import { Canvas } from "@react-three/fiber";
import { Float, Environment, Scroll, ScrollControls } from "@react-three/drei";
import { Card } from "./Card";
import DEVText from "./members/devs";
import GRAPHICS from "./members/grahics";
import SOCIAL from "./members/social";
import MARKETERS from "./members/marketers";
import CONTENT from "./members/contentCreators";
import EDITING from "./members/editing&schedule";
import Easing from "./easing";

export const Experience = () => {
  return (
    <Canvas
      style={{ overflow: "hidden" }}
      shadows
      dpr={[1, 2]}
      camera={{ position: [0, 0, 6], fov: 30 }}
    >
      <Easing />
      <color attach="background" args={["#151515"]} />
      <Environment preset="warehouse" blur={0.1} />
      <ScrollControls pages={7.3} damping={0.1}>
        {/* Canvas contents in here will *not* scroll, but receive useScroll! */}

        <Scroll>
          <Float>
            <Card position={[0, 0, 0]}>
              <DEVText />
            </Card>
          </Float>

          <group position={[0, -4, 0]}>
            <Float>
              <Card />
              <GRAPHICS />
            </Float>
          </group>
          <group position={[0, -8, 0]}>
            <Float>
              <Card />
              <SOCIAL />
            </Float>
          </group>
          <group position={[0, -12, 0]}>
            <Float>
              <Card />
              <MARKETERS />
            </Float>
          </group>
          <group position={[0, -16, 0]}>
            <Float>
              <Card />
              <CONTENT />
            </Float>
          </group>
          <group position={[0, -20, 0]}>
            <Float>
              <Card />
              <EDITING />
            </Float>
          </group>
        </Scroll>
        <Scroll html></Scroll>
      </ScrollControls>
    </Canvas>
  );
};
