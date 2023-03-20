import React from "react";
import styled from "styled-components";
import {Button} from './Components/Button'
import {NavLink} from 'react-router-dom'

const Mywork = () => {
  return (
    <Wrapper>
      <h2 className="common-heading">My Projects</h2>
      <div className="grid-three-column container">
        <div className="card">
          <div>
            <a href="https://onlineoptical.vercel.app/">
            <img src="./images/web1.png" alt="" />
            </a>
          </div>
        </div>
        <div className="card">
          <a href="https://global-school-of-health.vercel.app/" target="_blank">
            <img src="./images/web2.png" alt="" />
          </a>
        </div>
        <div className="card">
          <a
            href="https://westgatecareerconsultants.netlify.app/"
            target="_blank"
          >
            <img src="./images/web3.png" alt="" />
          </a>
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  padding: 10rem 0;

  .common-heading {
    margin-top: 3rem;
  }

  .container {
    display: flex;
    justify-content: center;
    gap: 30px;

    .card {
      border: 1px solid grey;
      box-shadow: 10px 5px 5px grey;
    }
    .card img {
      width: 400px;
    }
  }
  .card:hover {
    box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
    transform: scale(1.1);
    transition: all 0.3s linear;
  }

  @media (max-width: ${({ theme }) => theme.media.tab}) {
    .grid-three-column .card img {
      width: 100%;
    }

    @media (max-width: ${({ theme }) => theme.media.mobile}) {
    .grid-three-column {
      flex-direction: column;
    }
  } 
}
`;
export default Mywork;
