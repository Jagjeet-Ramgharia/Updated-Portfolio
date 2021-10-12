import React from "react";
import styled from "styled-components";
import { blogData } from "../data/blog";
import Title from "../components/Title";
import { MainLayOut, InnerLayOut } from "../styles/Layout";
import Particle from "../components/Partical";

const Blogs = () => {
  return (
    <MainLayOut>
      <BlogStyled>
        <div className="p-particle-js">{/* <Particle /> */}</div>
        <Title title={"Blogs"} span={"Blogs"} />
        <InnerLayOut className={"blog"}>
          {blogData.map((blog) => {
            return (
              <div key={blog.id} className={"blog-item"}>
                <div className="image">
                  <img src={blog.img} alt="" />
                </div>
                <div className="title">
                  <h4>{blog.title}</h4>
                </div>
              </div>
            );
          })}
        </InnerLayOut>
      </BlogStyled>
    </MainLayOut>
  );
};

const BlogStyled = styled.div`
  .p-particle-js {
    position: absolute;
    top: 0;
    left: 0;
  }
  .blog {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-column-gap: 1rem;
    grid-row-gap: 2rem;
    z-index: 1;

    .blog-item {
      background-color: var(--background-dark-color2);
      padding: 1rem;
      border-radius: 5px;
      cursor: pointer;
    }
    .image {
      width: 100%;
      overflow: hidden;
      padding-bottom: 0.4rem;
      img {
        transition: all 0.5s ease-in-out;
        width: 100%;
        height: 90%;
        object-fit: cover;
        border-radius: 5px;
        cursor: pointer;
        &:hover {
          transform: rotate(1deg) scale(1.1);
        }
      }
    }
    .title {
      h4 {
        font-size: 1.2rem;
        padding: 1rem 0;
        color: var(--white-color);
        cursor: pointer;
        transition: all 0.3s ease-in-out;
        &:hover {
          color: var(--primary-color);
        }
      }
    }
  }
`;

export default Blogs;
