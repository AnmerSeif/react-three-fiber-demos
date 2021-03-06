import React, { useState, Suspense } from "react";
import { Canvas, useLoader } from "react-three-fiber";
import { useSpring, animated } from "react-spring/three";
import styled from "styled-components";
import { NumberField, Checkbox } from "@bekk/storybook";
import GlobalStyle from "./GlobalStyle";
import { Color, Euler, DoubleSide } from "three";
import Controls from "./components/Controls";
import Slider from "./components/Slider";
import { easeQuadOut, easeCubic } from "d3-ease";
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
// @ts-ignore
import selbekkGLB from './gltf/selbekk-face-3d/model.glb';

const Row = styled.div`
  display: flex;
  height: 100%;

  &:focus {
    outline: none;
  }
`;

const Col = styled.div`
  flex-grow: 1;
  flex-basis: 0;
  height: 100%;

  &:focus {
    outline: none;
  }
`;

const CanvasContainer = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;

  &:focus {
    outline: none;
  }

  &:after {
    content: "";
    position: absolute;
    top: 50%;
    right: 0;
    transform: translateY(-50%);
    height: 80%;
    background-color: #3f3f3f;
    width: 0.3rem;
    border-radius: 50%;
  }
`;

const ControlsContainer = styled.div`
  padding: 2rem;
  width: 100%;
`;

const Heading = styled.h1`
  font-family: "FFDINWebProLight", sans-serif;
  color: white;
  text-transform: uppercase;
`;

interface BoxProps {
  scaleX: number;
  scaleY: number;
  scaleZ: number;
}


const Selbekk : React.FC = () => {
  const gltf = useLoader(GLTFLoader, selbekkGLB);
  gltf.scene.scale.set(7,7,7);
  return <primitive object={gltf.scene}  position={[0, 1, 0]} />
}

const Box: React.FC<BoxProps> = ({ scaleX, scaleY, scaleZ }) => {
  const { color, pos, ...props } = useSpring({
    scale: [scaleX, scaleY, scaleZ],
    config: { duration: 1000, easing: easeQuadOut }
  });
  return (
    <animated.mesh
      castShadow={true}
      receiveShadow={true}
      position={[0, 0, 0]}
      {...props}
    >
      <boxBufferGeometry attach="geometry" args={[1, 1, 1]} />
      <meshStandardMaterial attach="material" color="white" transparent />
    </animated.mesh>
  );
};

function App() {
  const [scaleX, setScaleX] = useState(1);
  const [scaleY, setScaleY] = useState(1);
  const [scaleZ, setScaleZ] = useState(1);
  const [orbitControls, setOrbitControls] = useState(false);

  return (
    <>
      <GlobalStyle />
      <Row>
        <Col>
          <CanvasContainer>
            <Canvas
              shadowMap={true}
              camera={{ fov: 100, position: [-2, 2, 3] }}
            >
              <Controls enabled={orbitControls} />
              <ambientLight color={new Color("#1f1f1f")} />
              <pointLight
                shadowMapHeight="1080"
                shadowMapWidth="1920"
                castShadow={true}
                position={[0, 3, 6]}
              />
              <pointLight
                shadowMapHeight="1080"
                shadowMapWidth="1920"
                castShadow={true}
                position={[-3, 3, 6]}
              />
              <pointLight
                shadowMapHeight="1080"
                shadowMapWidth="1920"
                castShadow={true}
                position={[3, 3, 6]}
              />
              <mesh position={[0, 0, -2]} receiveShadow>
                <planeBufferGeometry attach="geometry" args={[1000, 1000]} />
                <meshStandardMaterial
                  side={DoubleSide}
                  attach="material"
                  color="#171717"
                />
              </mesh>
              <mesh
                position={[0, -0.5, 0]}
                rotation={new Euler(1.57, 0, 0)}
                receiveShadow
              >
                <planeBufferGeometry attach="geometry" args={[1000, 1000]} />
                <meshStandardMaterial
                  side={DoubleSide}
                  attach="material"
                  color="#171717"
                />
              </mesh>
              <Suspense fallback={<Box scaleX={scaleX} scaleY={scaleY} scaleZ={scaleZ} />}><Selbekk /></Suspense>
            </Canvas>
          </CanvasContainer>
        </Col>
        <Col>
          <ControlsContainer>
            <Heading>Adjustments</Heading>
            <Checkbox
              label="Aktiver OrbitControls"
              isChecked={orbitControls}
              onDarkBackground={true}
              onChange={() => {
                setOrbitControls(!orbitControls);
              }}
            />
            <Slider
              min={0}
              max={50}
              step={1}
              startValue={scaleX}
              label={"scaleX:"}
              onSliderChange={value => {
                setScaleX(value);
              }}
            />
            <Slider
              min={0}
              max={50}
              step={1}
              startValue={scaleY}
              label={"scaleY:"}
              onSliderChange={value => {
                setScaleY(value);
              }}
            />
            <Slider
              min={0}
              max={50}
              step={1}
              startValue={scaleZ}
              label={"scaleZ:"}
              onSliderChange={value => {
                setScaleZ(value);
              }}
            />
          </ControlsContainer>
        </Col>
      </Row>
    </>
  );
}

export default App;
