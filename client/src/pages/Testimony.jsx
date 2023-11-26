import React, { useRef, useEffect } from 'react';
import { Container } from '../components/Container';
import styled from 'styled-components';
import img1 from '../assets/img1.jpg';
import img2 from '../assets/img2.jpg';
import img3 from '../assets/img3.jpg';
import img5 from '../assets/img5.jpg';

const Principal = styled.section`
  height: 70vh;
  width: 100%;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
  background:linear-gradient(90deg, rgba(255,255,255,1) 2%, rgba(255,255,255,0) 15%, rgba(247,247,247,0) 50%, rgba(255,255,255,0) 85%, rgba(255,255,255,1) 98%);
`;

const Slider = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: -5;
  margin-top: -10vh;
`;

const Hero = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding-top: 40px;
  text-align: center;
  background: linear-gradient(90deg, rgba(255,255,255,1) 0%, rgba(255,255,255,0) 15%, rgba(255,255,255,0.16010154061624648) 85%, rgba(255,255,255,1) 100%);
`;

const TextoClientes = styled.p`
  font-size: 2.5rem;
  margin-top: 20px;
  font-family: Oswald;
  font-weight:800;
  background-image: linear-gradient(311deg, rgba(0,0,0,1) 10%, rgba(48,48,48,1) 30%, rgba(0,0,0,1) 50%, rgba(48,48,48,1) 70%, rgba(0,0,0,1) 90%);
  color: transparent;
  -webkit-background-clip: text;
  background-clip: text;
`;

const useSliderAutomatico = (ref) => {
  useEffect(() => {
    const SliderAutomatico = () => {
      const primerElemento = ref.current.children[0];
      const tamañoSlide = ref.current.children[0].offsetWidth;

      ref.current.style.transition = '6000ms ease-out all';
      ref.current.style.transform = `translateX(${-tamañoSlide -50}px)`; // Cambiado a -tamañoSlide

      const desplazamiento = () => {
        ref.current.style.transition = 'none';
        ref.current.style.transform = `translateX(0)`;

        ref.current.appendChild(primerElemento);
      };

      ref.current.addEventListener('transitionend', desplazamiento);
    };

    const intervalId = setInterval(() => {
      SliderAutomatico();
    }, 4000);

    return () => clearInterval(intervalId);
  }, [ref]);
};

export const Testimony = () => {
  const SlideShow = useRef(null);
  useSliderAutomatico(SlideShow);

  return (
    <Hero>
      <TextoClientes>
        Satisfied customers with <br />
        our products
      </TextoClientes>
      <Principal>
      <Slider ref={SlideShow}>
        <Container titulo={'Jhonny sins'} img={img2} comentario={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias saepe quaerat nisi? Accusamus eius sapiente incidunt, repellat ipsa optio quas culpa temporibus quis ducimus deserunt"}/>
        <Container titulo= {'Remy Lacroix'} img={img1} comentario={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias saepe quaerat nisi? Accusamus eius sapiente incidunt, repellat ipsa optio quas culpa temporibus quis ducimus deserunt"}/>
        <Container titulo={'Stephanie Cayo'} img={img3} comentario={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias saepe quaerat nisi? Accusamus eius sapiente incidunt, repellat ipsa optio quas culpa temporibus quis ducimus deserunt"}/>
        <Container titulo={'Henry  Cavill'} img={img5} comentario={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias saepe quaerat nisi? Accusamus eius sapiente incidunt, repellat ipsa optio quas culpa temporibus quis ducimus deserunt"}/>
      </Slider>
    </Principal>
      </Hero>
  );
};