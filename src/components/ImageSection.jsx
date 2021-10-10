import React from "react";
import styled from "styled-components";
import me from "../img/me.PNG";
import PrimaryButton from "./PrimaryButton";

const ImageSection = () => {
  return (
    <ImageSectionStyled>
      <div className="left-content">
        <img src={me} alt="" />
      </div>
      <div className="right-content">
        <h4>
          I am <span>Jagjeet Singh</span>
        </h4>
        <p className="paragraph">I am a MERN Stack Developer.</p>
        <div className="about-info">
          <div className="info-title">
            <p>Full Name</p>
            <p>Age</p>
            <p>Nationality</p>
            <p>Languages</p>
            <p>Location</p>
          </div>
          <div className="info">
            <p>: Jagjeet Singh</p>
            <p>: 22</p>
            <p>: Indian</p>
            <p>: Punjabi, English, Hindi</p>
            <p>: Ludhiana, Punjab</p>
          </div>
        </div>
        <PrimaryButton title={"Download CV"} />
      </div>
    </ImageSectionStyled>
  );
};
const ImageSectionStyled = styled.div`
  display: flex;
  margin-top: 3.2rem;
  z-index: 1;
  .left-content {
    z-index: 999;
    width: 100%;
    height: 60vh;
    flex: 1;
    img {
      width: 100%;
      height: 100%;
      object-fit: contain;
      border-radius: 5px;
    }
  }
  .right-content {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    flex: 1;
    h4 {
      font-size: 2rem;
      color: var(--white-color);
      span {
        font-size: 2rem;
      }
    }
    .paragraph {
      padding: 1.5rem 0;
      font-size: 1.5rem;
    }
    .about-info {
      display: flex;
      .info-title {
        padding-right: 1rem;
        p {
          font-weight: 500;
          font-size: 18px;
          padding: 0.3rem 0;
        }
      }
      .info {
        p {
          font-size: 18px;
          padding: 0.3rem 0;
        }
      }
    }
  }
`;

export default ImageSection;
