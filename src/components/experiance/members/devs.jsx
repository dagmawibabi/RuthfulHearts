import { Text as DreiText, Image } from "@react-three/drei";
import { extend } from "@react-three/fiber";
import { geometry } from "maath";

extend({ RoundedPlaneGeometry: geometry.RoundedPlaneGeometry });
// import decay_font from "./decay.otf";

const DEVText = () => {
  return (
    <group>
      <DreiText
        letterSpacing={-0.07}
        font={"./decay.otf"}
        fontSize={0.06}
        position={[0, 0.5, 0]}
        color="#50C878"
      >
        second name
        <Image url="/temp.jpg" scale={0.3} position={[0, 0.2, 0]} />
      </DreiText>
      <DreiText
        letterSpacing={-0.07}
        font={"./decay.otf"}
        fontSize={0.06}
        position={[-0.5, 0.5, 0]}
        color="#50C878"
      >
        first name
        <Image url="/temp.jpg" scale={0.3} position={[0, 0.2, 0]} />
      </DreiText>
      <DreiText
        letterSpacing={-0.07}
        font={"./decay.otf"}
        fontSize={0.06}
        position={[0.5, 0.5, 0]}
        color="#50C878"
      >
        third name
        <Image url="/temp.jpg" scale={0.3} position={[0, 0.2, 0]} />
      </DreiText>
      <DreiText
        letterSpacing={-0.07}
        font={"./decay.otf"}
        fontSize={0.06}
        position={[0, 0, 0]}
        color="#50C878"
      >
        fourth name
        <Image url="/temp.jpg" scale={0.3} position={[0, 0.2, 0]} />
      </DreiText>
      <DreiText
        letterSpacing={-0.07}
        font={"./decay.otf"}
        fontSize={0.06}
        position={[-0.5, 0, 0]}
        color="#50C878"
      >
        fifth name
        <Image url="/temp.jpg" scale={0.3} position={[0, 0.2, 0]} />
      </DreiText>
      <DreiText
        letterSpacing={-0.07}
        font={"./decay.otf"}
        fontSize={0.06}
        position={[0.5, 0, 0]}
        color="#50C878"
      >
        sixth name
        <Image url="/temp.jpg" scale={0.3} position={[0, 0.2, 0]} />
      </DreiText>
      <DreiText
        letterSpacing={-0.07}
        font={"./decay.otf"}
        fontSize={0.06}
        position={[0, -0.5, 0]}
        color="#50C878"
      >
        seventh name
        <Image url="/temp.jpg" scale={0.3} position={[0, 0.2, 0]} />
      </DreiText>
      <DreiText
        letterSpacing={-0.07}
        font={"./decay.otf"}
        fontSize={0.06}
        position={[-0.5, -0.5, 0]}
        color="#50C878"
      >
        eighth name
        <Image url="/temp.jpg" scale={0.3} position={[0, 0.2, 0]} />
      </DreiText>
      <DreiText
        letterSpacing={-0.07}
        font={"./decay.otf"}
        fontSize={0.06}
        position={[0.5, -0.5, 0]}
        color="#50C878"
      >
        ninth name
        <Image url="/temp.jpg" scale={0.3} position={[0, 0.2, 0]} />
      </DreiText>
      <DreiText
        letterSpacing={-0.07}
        font={"./decay.otf"}
        fontSize={0.16}
        position={[0, -0.8, 0]}
        color="#26C6DA"
      >
        DEVELOPERS
      </DreiText>
    </group>
  );
};

export default DEVText;
