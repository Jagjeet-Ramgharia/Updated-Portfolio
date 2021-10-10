import React from "react";
import styled from "styled-components";

const ReviewItem = ({ text }) => {
  return (
    <ReviewItemStyled>
      <p>{text}</p>
    </ReviewItemStyled>
  );
};

const ReviewItemStyled = styled.div`
  width: 50%;
  padding: 1rem 0.5rem;
  border-left: 3px solid var(--border-color);
  background-color: var(--background-dark-color2);
  position: relative;
  &:not(:first-child) {
    margin-left: 0.5rem;
  }
  &::after {
    content: "";
    position: absolute;
    left: 1rem;
    border-width: 0.8rem;
    top: 100%;
    border-style: solid;
    border-color: var(--background-dark-color2) transparent transparent
      var(--background-dark-color2);
  }
  p {
    padding: 0.5rem 0;
    font-size: 0.9rem;
  }
`;

export default ReviewItem;
