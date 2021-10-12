import React from "react";
import styled from "styled-components";
import Particle from "../components/Partical";
import { Instagram, GitHub, LinkedIn } from "@material-ui/icons";

const HomePage = () => {
  return (
    <HomePageStyled>
      <div className="p-particle-js">
        <Particle />
      </div>
      <div className="typography">
        <h1>
          Hi I'm <span>Jagjeet Singh</span>
        </h1>
        <p>
          I am a web developer with enthusiasm and focused on frontend
          developer. I am always willing to work outside my comfort zone and
          give my best. I started out as a digital marketer and slowly realized
          that i have a passion for building front-end interfaces of supreme
          quality. I love javascript ecosystem. I am passionate about building
          scalable software, creating effective solutions, and learning every
          day to grow professionally.
        </p>
        <div className="icons">
          <div className="icon i-facebook">
            <Instagram />
          </div>
          <div className="icon i-github">
            <GitHub />
          </div>
          <div className="icon i-linkedin">
            <LinkedIn />
          </div>
        </div>
      </div>
    </HomePageStyled>
  );
};

const HomePageStyled = styled.header`
  width: 100%;
  height: 100vh;
  position: relative;
  .p-particle-js {
    position: absolute;
    top: 0;
    left: 0;
  }
  .typography {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    text-align: center;
    width: 80%;
    height: 60%;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    p {
      font-size: 1rem;
      letter-spacing: 1px;
      text-align: center;
    }
    .icons {
      display: flex;
      justify-content: center;
      margin-top: 1rem;
      .icon {
        border: 2px solid var(--border-color);
        display: flex;
        justify-content: center;
        align-items: center;
        border-radius: 50%;
        cursor: pointer;
        &:hover {
          border: 2px solid var(--primary-color);
          color: var(--primary-color);
          transition: all 0.3s ease-in-out;
        }
        &:not(:last-child) {
          margin-right: 1rem;
        }
        svg {
          margin: 0.5rem;
        }
      }
    }
  }
`;

export default HomePage;
