import React from "react";
import styled from "styled-components";
import { InnerLayOut } from "../styles/Layout";
import ServiceCard from "./ServiceCard";
import Title from "./Title";
import web from "../img/web.png";

const ServiceSection = () => {
  return (
    <InnerLayOut>
      <Service>
        <Title title={"Services"} span={"Services"} />
        <div className="services">
          <ServiceCard
            title={"Web Design"}
            img={web}
            paragraph={
              "I am a web developer with enthusiasm and focused on  frontend developer. I am always willing to work outside my comfort zone."
            }
          />
          <ServiceCard
            title={"Web Design"}
            img={web}
            paragraph={
              "I am a web developer with enthusiasm and focused on  frontend developer. I am always willing to work outside my comfort zone."
            }
          />
        </div>
      </Service>
    </InnerLayOut>
  );
};

const Service = styled.div`
  .services {
    display: flex;
    justify-content: space-between;
  }
`;

export default ServiceSection;
