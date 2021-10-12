import React from "react";
import styled from "styled-components";

const PrimaryButton = ({ title }) => {
  return <PrimaryButtonStyle>{title}</PrimaryButtonStyle>;
};

const PrimaryButtonStyle = styled.a`
  background-color: var(--primary-color);
  padding: 1rem 2rem;
  color: white;
  cursor: pointer;
  display: inline-block;
  font-size: 0.9rem;
  margin: 0.5rem 0;
  text-transform: uppercase;
  width: 50%;
  position: relative;
  transition: all 0.5s ease-in-out;
  border-radius: 5px;
  &::after {
    content: "";
    position: absolute;
    width: 0;
    height: 0.2rem;
    background-color: var(--white-color);
    left: 0;
    bottom: 0;
    transition: all 0.5s ease-in-out;
    opacity: 0.7;
  }
  &:hover::after {
    width: 100%;
    background-color: var(--white-color);
  }
`;

export default PrimaryButton;
