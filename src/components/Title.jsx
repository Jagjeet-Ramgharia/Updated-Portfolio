import React from "react";
import styled from "styled-components";

const Title = ({ title, span }) => {
  return (
    <TitleStyle>
      <h2>
        {title} <span>{span}</span>
      </h2>
    </TitleStyle>
  );
};

const TitleStyle = styled.div`
  position: relative;
  h2 {
    color: var(--white-color);
    font-size: 2.5rem;
    font-weight: 600;
    text-transform: uppercase;
    position: relative;
    padding-bottom: 0.7rem;
    &::before {
      content: "";
      position: absolute;
      bottom: 0;
      width: 7.4rem;
      height: 0.33rem;
      background-color: var(--background-light-color2);
      left: 0;
      border-radius: 15px;
    }
    &::after {
      content: "";
      position: absolute;
      bottom: 0;
      width: 3.5rem;
      height: 0.33rem;
      background-color: var(--primary-color);
      left: 0;
      border-radius: 15px;
    }
    span {
      font-weight: 600;
      color: rgba(25, 29, 43, 0.44);
      font-size: 4rem;
      font-weight: 900;
      position: absolute;
      left: 10%;
      top: 30%;
      z-index: -1;
    }
  }
`;

export default Title;
