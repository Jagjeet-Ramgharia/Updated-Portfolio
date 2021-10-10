import React from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";
import me from "../img/me2.png";

const Navbar = () => {
  return (
    <NavigationStyled>
      <div className="avatar">
        <img src={me} alt="" />
      </div>
      <ul className="nav-items">
        <li className="nav-item">
          <NavLink exact to="/" activeClassName="active-class">
            Home
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink exact to="/about" activeClassName="active-class">
            About
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink exact to="/resume" activeClassName="active-class">
            Resume
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink exact to="/portfolio" activeClassName="active-class">
            Portfolio
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink exact to="/blogs" activeClassName="active-class">
            Blogs
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="/contact" activeClassName="active-class">
            Contact
          </NavLink>
        </li>
      </ul>
      <footer className="footer">
        <p>@2021 My Portfolio</p>
      </footer>
    </NavigationStyled>
  );
};
const NavigationStyled = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 100%;
  border: 1px solid var(--border-color);

  .avatar {
    width: 100%;
    border-bottom: 1px solid var(--border-color);
    text-align: center;
    padding: 5px 0;
    img {
      width: 80%;
      border-radius: 50%;
      border: 6px solid var(--border-color);
    }
  }
  .nav-items {
    width: 100%;
    text-align: center;
    .active-class {
      background-color: var(--primary-color);
    }
    li {
      display: block;
      a {
        display: block;
        padding: 0.3rem 0;
        position: relative;
        z-index: 10;
        font-weight: 600;
        letter-spacing: 1px;
        &:hover {
          cursor: pointer;
        }
        &::before {
          content: "";
          position: absolute;
          bottom: 0;
          left: 0;
          width: 0;
          height: 50%;
          background-color: var(--primary-color);
          transition: all 0.5s cubic-bezier(1, -0.2, 0.25, 0.95);
          opacity: 0.21;
          transform-origin: right;
        }
      }
      a:hover::before {
        width: 100%;
        height: 100%;
      }
    }
  }
  .footer {
    border-top: 1px solid var(--border-color);
    width: 100%;
    text-align: center;
    p {
      font-size: 1rem;
      padding: 1rem 0;
    }
  }
`;

export default Navbar;
