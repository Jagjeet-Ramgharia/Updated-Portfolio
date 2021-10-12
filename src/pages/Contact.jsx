import React from "react";
import styled from "styled-components";
import { MainLayOut, InnerLayOut } from "../styles/Layout";
import Title from "../components/Title";
import PrimaryButton from "../components/PrimaryButton";
import Particle from "../components/Partical";
import ContactItem from "../components/ContactItem";
import { Phone, Email, LocationCity } from "@material-ui/icons";

const Contact = () => {
  const phone = <Phone />;
  const email = <Email />;
  const location = <LocationCity />;
  return (
    <MainLayOut>
      <ConatctStyled>
        <div className="p-particle-js">
          <Particle />
          <Particle />
        </div>
        <Title title={"Contact"} span={"Contact"} />
        <InnerLayOut className={"contact-section"}>
          <div className="left-content">
            <div className="contact-title">
              <h4>Get In Touch</h4>
            </div>
            <form className="form">
              <div className="form-field">
                <label htmlFor="name">Enter your name*</label>
                <input autoComplete="off" type="text" id="name" />
              </div>
              <div className="form-field">
                <label htmlFor="email">Enter your email*</label>
                <input autoComplete="off" type="email" id="email" />
              </div>
              <div className="form-field">
                <label htmlFor="subject">Enter your subject*</label>
                <input autoComplete="off" type="text" id="subject" />
              </div>
              <div className="form-field">
                <label htmlFor="textarea">Enter Yor Message</label>
                <textarea
                  name="textarea"
                  id="textarea"
                  cols="30"
                  rows="10"
                ></textarea>
              </div>
              <div className="form-field">
                <PrimaryButton title={"Send Email"} />
              </div>
            </form>
          </div>
          <div className="right-content">
            <ContactItem
              title={"Phone"}
              icon={phone}
              contact1={6283818230}
              contact2={7837989133}
            />
            <ContactItem
              title={"Email"}
              icon={email}
              contact1={"Ramghariajagjeet4281@gmail.com"}
              contact2={"Jagjeets@evolvan.com"}
            />
            <ContactItem
              title={"Location"}
              icon={location}
              contact1={"Ghai Market 33 Foot Road"}
              contact2={"Ludhiana, Punjab, India"}
            />
          </div>
        </InnerLayOut>
      </ConatctStyled>
    </MainLayOut>
  );
};

const ConatctStyled = styled.section`
  .p-particle-js {
    position: absolute;
    top: 0;
    left: 0;
  }
  .contact-section {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-column-gap: 2rem;
    .right-content {
      display: flex;
      justify-content: center;
      flex-direction: column;
      height: 90%;
    }
    .contact-title {
      h4 {
        color: var(--white-color);
        font-size: 1.6rem;
        padding: 1rem 0;
      }
    }
    .form {
      width: 100%;
      /* height: 100vh; */
      .form-field {
        margin-top: 0.7rem;
        position: relative;
        width: 100%;
        margin-bottom: 20px;
        label {
          position: absolute;
          left: 20px;
          top: -13px;
          /* font-size: 0.9rem; */
          padding: 0.1rem 0.2rem;
          background-color: var(--background-dark-color);
        }
        input {
          border: 1px solid var(--border-color);
          outline: none;
          background-color: transparent;
          height: 50px;
          padding: 0 15px;
          color: var(--white-color);
          width: 100%;
          border-radius: 5px;
        }
        textarea {
          border: 1px solid var(--border-color);
          outline: none;
          background-color: transparent;
          padding: 15px 20px;
          color: var(--white-color);
          width: 100%;
          border-radius: 5px;
        }
      }
    }
  }
`;

export default Contact;
