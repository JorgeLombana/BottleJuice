import React, { useRef, useMemo } from 'react';
import { Canvas, useFrame } from 'react-three-fiber';
import { SphereGeometry, MeshBasicMaterial, Mesh, TextureLoader } from 'three';
import styled from 'styled-components';

const Container = styled.div`
  height: calc(100vh - 79px);
  width: 100vw;
  position: relative;
  overflow: hidden;
`;

const BottleImg = styled.div`
  width: 300px; /* Ajusta el tamaño según tus necesidades */
  height: 300px; /* Ajusta el tamaño según tus necesidades */
`;

const Sphere = ({ texture }) => {
  const sphereRef = useRef();

  useFrame(() => {
    if (sphereRef.current) {
      sphereRef.current.rotation.y += 0.01;
    }
  });

  return (
    <mesh ref={sphereRef}>
      <sphereGeometry args={[5, 32, 32]} />
      <meshBasicMaterial map={texture} />
    </mesh>
  );
};

const Rotation = () => {
  const texture = useMemo(() => new TextureLoader().load('ruta_de_la_imagen'), []);

  return (
    <Container>
      <Canvas>
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} />
        <BottleImg>
          <Sphere texture={texture} />
        </BottleImg>
      </Canvas>
    </Container>
  );
};

export default Rotation;
