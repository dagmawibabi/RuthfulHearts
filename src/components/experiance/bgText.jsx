import React from "react";
import { Text as DreiText } from "@react-three/drei";

const BgText = () => {
  return (
    <group>
      <DreiText
        font={"./decay.otf"}
        maxWidth={14}
        textAlign="center"
        position-y={0.12}
        position-z={-0.32}
        fontSize={0.8}
        lineHeight={1.5}
        color="YELLOW"
      >
        DEVELOPERS
      </DreiText>
    </group>
  );
};

export default BgText;
