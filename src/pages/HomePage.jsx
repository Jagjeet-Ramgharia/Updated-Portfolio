import React from "react";
import styled from "styled-components";
import Particle from "../components/Partical";

const HomePage = () => {
  return (
    <HomePageStyled>
      <div className="p-particle-js">
        <Particle />
      </div>
    </HomePageStyled>
  );
};

const HomePageStyled = styled.header`
  width: 100%;
  height: 100vh;
  position: relative;
`;

export default HomePage;
