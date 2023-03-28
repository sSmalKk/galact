import { Suspense } from "react";

import "./styles.css";
import styled from "styled-components";
/*import Background from "./components/Background";*/
import TextSection from "./components/TextSection";

import Earth from "./components/Earth";

import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import Starfield from "./components/Starfield";

const CanvasContainer = styled.div`
  width: 100%;
  height: 100%;
`;

export default function App() {
  return (
    <Wrapper className="App">
      <Starfield />
      <TextSection />
      <CanvasContainer>
        <Canvas className="canvas">
          <OrbitControls rotateSpeed={2} enableZoom={false} autoRotate={true} />
          <ambientLight intensity={0.5} />
          <directionalLight position={[3, 5, 2]} />
          <Suspense fallback={null}>
            <Earth width="20%" />
          </Suspense>
        </Canvas>
      </CanvasContainer>
      ;
    </Wrapper>
  );
}

const Wrapper = styled.div`
  position: relative;
  background: #1f1144;

  canvas {
    height: 500px;
  }
`;
