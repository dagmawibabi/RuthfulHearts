import { Text as DreiText, Image } from "@react-three/drei";
import { extend } from "@react-three/fiber";
import { geometry } from "maath";

extend({ RoundedPlaneGeometry: geometry.RoundedPlaneGeometry });
// import decay_font from "./decay.otf";

const MARKETERS = () => {
  return (
    <group>
      <DreiText
        letterSpacing={-0.07}
        font={"./decay.otf"}
        fontSize={0.06}
        position={[0, 0.2, 0]}
        color="#50C878"
      >
        first name
        <Image url="/temp.jpg" scale={0.5} position={[0, 0.3, 0]} />
      </DreiText>

      <DreiText
        letterSpacing={-0.07}
        font={"./decay.otf"}
        fontSize={0.06}
        position={[0, -0.6, 0]}
        color="#50C878"
      >
        eighth name
        <Image url="/temp.jpg" scale={0.5} position={[0, 0.3, 0]} />
      </DreiText>

      <DreiText
        letterSpacing={-0.07}
        font={"./decay.otf"}
        fontSize={0.16}
        position={[0, -0.8, 0]}
        color="#26C6DA"
      >
        MARKETERS
      </DreiText>
    </group>
  );
};

export default MARKETERS;
