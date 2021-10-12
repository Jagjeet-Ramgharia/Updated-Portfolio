import React from "react";
import styled from "styled-components";

const ContactItem = ({ icon, title, contact1, contact2 }) => {
  return (
    <ContactItemStyled>
      <div className="left-content">
        <p>{icon}</p>
      </div>
      <div className="right-content">
        <h6>{title}</h6>
        <p>{contact1}</p>
        <p>{contact2}</p>
      </div>
    </ContactItemStyled>
  );
};

const ContactItemStyled = styled.div`
  padding: 1rem 1.5rem;
  background-color: var(--background-dark-color2);
  display: flex;
  align-items: center;
  &:not(:last-child) {
    margin-bottom: 1.5rem;
  }
  .left-content {
    padding: 1.5rem;
    border: 1px solid var(--border-color);
    display: flex;
    justify-content: center;
    align-items: center;
    margin-right: 1.5rem;
    svg {
      font-size: 2.3rem;
      cursor: pointer;
    }
  }
  .right-content {
    h6 {
      font-size: 1.2rem;
      color: var(--white-color);
      padding-bottom: 0.5rem;
    }
    p {
      padding: 0.1rem 0;
    }
  }
`;

export default ContactItem;
