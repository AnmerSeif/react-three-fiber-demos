import React, { useRef } from 'react';
import { extend, useFrame, useThree, ReactThreeFiber } from 'react-three-fiber';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
extend({ OrbitControls });

declare global {
    namespace JSX {
      interface IntrinsicElements {
        orbitControls: ReactThreeFiber.Object3DNode<OrbitControls, typeof OrbitControls>
      }
    }
  }

  interface OrbitRef {
    update: Function;
}

interface ControlsProps {
    enabled: boolean;
}

const Controls : React.FC<ControlsProps> = ({ enabled }) => {
    const ref = useRef<OrbitRef>(null);
    const { camera, gl } = useThree();
    useFrame(() => {
        if (ref && ref.current && enabled) {
            ref.current.update();
        }
    });
    return (
        <orbitControls
            enabled={enabled}
            ref={ ref }
            args={ [ camera, gl.domElement ] }
        />
    );
};
export default Controls;