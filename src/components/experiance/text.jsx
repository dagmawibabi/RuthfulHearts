import { Text as DreiText, Image } from "@react-three/drei";
import { extend } from "@react-three/fiber";
import { geometry } from "maath";

extend({ RoundedPlaneGeometry: geometry.RoundedPlaneGeometry });
// import decay_font from "./decay.otf";

const Text = () => {
  return (
    <group position-y={0.2}>
      {/* <DreiText
        letterSpacing={-0.07}
        font={"./decay.otf"}
        fontSize={0}
        renderOrder={1}
        position-y={0}
        color="#ffffff"
      >
        member 1
      </DreiText> */}
      <group position={(2, -0.2, 0)} scale={0.5}>
        <Image url="/temp.jpg">
          <roundedPlaneGeometry args={[1, 2, 0.15]} />
        </Image>
      </group>
      {/* <DreiText
        letterSpacing={-0.07}
        font={"./decay.otf"}
        fontSize={0.1}
        position-y={-0.1}
        color="#ff0000"
      >
        member 2
      </DreiText> */}
      <DreiText
        letterSpacing={-0.07}
        font={"./decay.otf"}
        fontSize={0.1}
        position-y={-0.6}
        color="#ff0000"
      >
        name
      </DreiText>

      {/* <DreiText
        letterSpacing={-0.07}
        font={"./decay.otf"}
        fontSize={-0.3}
        position-y={0}
        color="#ffffff"
      >
        member 4
      </DreiText> */}
    </group>
  );
};

export default Text;
