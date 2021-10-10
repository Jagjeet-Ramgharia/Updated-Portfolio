import React from "react";
import styled from "styled-components";
import { InnerLayOut } from "../styles/Layout";
import Title from "../components/Title";
import ReviewItem from "./ReviewItem";

const ReviewSection = () => {
  return (
    <Review>
      <Title title={"Reviews"} span={"Reviews"} />
      <InnerLayOut>
        <div className="reviews">
          <ReviewItem
            text={
              "Lorem ipsum dolor sit amet consectetur, adipisicing elit.Beatae eveniet iusto mollitia non! Laboriosam"
            }
          />
          <ReviewItem
            text={
              "Lorem ipsum dolor sit amet consectetur, adipisicing elit.Beatae eveniet iusto mollitia non! Laboriosam"
            }
          />
        </div>
      </InnerLayOut>
    </Review>
  );
};

const Review = styled.section`
  .reviews {
    display: flex;
  }
`;

export default ReviewSection;
