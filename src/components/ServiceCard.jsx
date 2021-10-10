import React from "react";
import styled from "styled-components";

const ServiceCard = ({ title, img, paragraph }) => {
  return (
    <ServiceCardStyled>
      <div className="container">
        <img src={img} alt="" />
        <h4>{title}</h4>
        <p>{paragraph}</p>
      </div>
    </ServiceCardStyled>
  );
};

const ServiceCardStyled = styled.div`
  background-color: var(--background-dark-color2);
  width: 45%;
  margin-top: 45px;
  border: 1px solid var(--border-color);
  border-top: 5px solid var(--border-color);
  transition: all 0.4s ease-in-out;
  cursor: pointer;
  z-index: 999;
  &:hover {
    border-top: 5px solid var(--primary-color);
    transform: translateY(3px);
  }
  .container {
    padding: 1rem;
    h4 {
      color: var(--white-color);
      font-size: 1.2rem;
      padding: 1rem 0;
      position: relative;
      &::after {
        content: "";
        position: absolute;
        width: 4rem;
        background-color: var(--border-color);
        height: 4px;
        border-radius: 10px;
        left: 0;
        bottom: 0;
      }
    }
    p {
      font-size: 0.8rem;
      padding: 0.5rem 0;
    }
  }
`;
export default ServiceCard;
