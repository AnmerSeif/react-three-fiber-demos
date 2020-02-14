import React, { useState } from 'react';
import { Canvas, useResource, useThree } from 'react-three-fiber';
import styled from 'styled-components';
import { NumberField, Checkbox } from '@bekk/storybook';
import GlobalStyle from './GlobalStyle';
import { Color, Euler } from 'three';
import Controls from './components/Controls';


const Scene = () => {
  const {
    camera,
    gl: { domElement }
  } = useThree()
  return (
      <orbitControls args={[camera, domElement]} />
  )
}

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
    content: '';
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
  font-family: 'FFDINWebProLight', sans-serif;
  color: white;
  text-transform: uppercase;
`;

function App() {
  const [ref, light] = useResource();
  const [number, setNumber] = useState(1);
  const [orbitControls, setOrbitControls] = useState(false);


  return (
    <>
    <GlobalStyle />
    <Row>
      <Col>    
      <CanvasContainer>
        <Canvas shadowMap={true}>
          <Controls enabled={orbitControls}/>
          <ambientLight color={new Color('#1f1f1f')} />
          <pointLight castShadow={true} ref={ref} position={[10, 10, 10]} />
          <mesh castShadow={true} receiveShadow={true} scale={[number,1,1]} position={[0,0,0]} rotation={new Euler(10,10,0)} >
            <boxBufferGeometry attach="geometry" args={[1, 1, 1]}/>
            <meshStandardMaterial  attach="material" color='white' transparent/>
          </mesh>
        </Canvas>
      </CanvasContainer>
    </Col>
    <Col>
      <ControlsContainer>
        <Heading>Adjustments</Heading>
        <Checkbox label="Aktiver OrbitControls" isChecked={orbitControls} onDarkBackground={true} onChange={() => {setOrbitControls(!orbitControls)}} />
        <NumberField value={number} onChange={(n) => {setNumber(n)}} ></NumberField>
      </ControlsContainer>
    </Col>
    </Row>

    </>
  );
}

export default App;
