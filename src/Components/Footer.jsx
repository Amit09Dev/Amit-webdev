import React from "react";
import { NavLink, Link } from "react-router-dom";
import styled from "styled-components";
import { Button } from "./Button";
import { BsInstagram, BsWhatsapp, BsGithub } from "react-icons/bs";

const Footer = () => {
  return (
    <Wrapper>
      <div className="contact-short ">
        <div className="grid grid-two-column">
          <div>
            <h3>Ready to get started?</h3>
            <h3>Talk to me today!</h3>
          </div>
          <NavLink to="https://api.whatsapp.com/send/?phone=917696753027&text=Hello&type=phone_number&app_absent=0">
            <Button className="center">Get Stated</Button>
          </NavLink>
        </div>
      </div>

      <footer>
        <div className="grid container grid-four-column">
          {/* First Column */}
          <div className="footer-about">
            <h3>Amit Kumar</h3>
            <p>
              I am a frontend developer <br /> Skiled with HTML, CSS, JS, React,
              Bootstrap, and Tailwind
            </p>
          </div>

          {/* Second Column */}

          <div className="footer-subscribe">
            <h3>Subscribe to get important updates</h3>
            <form action="https://formspree.io/f/xrgvagpl" method="POST">
              <input
                type="email"
                required
                autoComplete="off"
                placeholder="Email"
              />
              <input type="submit" value="Reach Me" className="reach-me" />
            </form>
          </div>

          {/* Third Column */}
          <div className="footer-social">
            <h3>Follows Me</h3>
            <div className="footer-social--icons">
              <div>
                <a
                  href="https://www.instagram.com/mrfreak.exe/"
                  target="_blank"
                >
                  <BsInstagram className="icons" />
                </a>
              </div>
              <div>
                <a
                  href="https://api.whatsapp.com/send/?phone=917696753027&text=Hello&type=phone_number&app_absent=0"
                  target="_blank"
                >
                  <BsWhatsapp className="icons" />
                </a>
              </div>
              <div>
                <a href="https://github.com/AmitDev09" target="_blank">
                  <BsGithub className="icons" />
                </a>
              </div>
            </div>
          </div>
          {/* Third Column */}
          <div className="footer-contact">
            <h3>Call Me</h3>
            <a href="tel:+917696753027">7696753027</a>
          </div>
        </div>
        <div className="footer-bottom--section">
          <hr />
          <p>@{new Date().getFullYear()} Amit Kumar. All Rights Reserved</p>
        </div>
      </footer>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  .contact-short {
    max-width: 60vw;
    margin: auto;
    padding: 5rem 10rem;
    background-color: ${({ theme }) => theme.colors.bg};
    border-radius: 1rem;
    box-shadow: ${({ theme }) => theme.colors.shadowSupport};
    transform: translateY(50%);
  }

  footer {
    padding: 14rem 0 9rem 0;
    background-color: ${({ theme }) => theme.colors.footer_bg};

    h3 {
      color: ${({ theme }) => theme.colors.hr};
      margin-bottom: 2.4rem;
    }
    p {
      color: ${({ theme }) => theme.colors.white};
    }
    .footer-social--icons {
      display: flex;
      gap: 2rem;
      div {
        padding: 1rem;
        border-radius: 50%;
        border: 2px solid ${({ theme }) => theme.colors.white};
        .icons {
          color: ${({ theme }) => theme.colors.white};
          font-size: 2.4rem;
          position: relative;
          cursor: pointer;
        }
      }
    }
    .footer-subscribe input {
      border: none;
      border-radius: 5px;
    }
    .reach-me {
      border-radius: 10px;
      border: 1px solid rgb(22, 151, 153);
    }
    .reach-me:hover {
      box-shadow: 0 2rem 2rem 0 rgb(132 144 255 / 30%);
      box-shadow: ${({ theme }) => theme.colors.shadowSupport};
      transform: scale(0.96);
    }
    .footer-bottom--section {
      padding-top: 3rem;
      hr {
        margin-bottom: 2rem;
        color: ${({ theme }) => theme.colors.hr};
        height: 0.1px;
      }
      p {
        text-align: center;
      }
    }
    .footer-contact a {
      color: white;
      font-size: 18px;
    }
  }
  @media (max-width: ${({ theme }) => theme.media.mobile}) {
    .contact-short {
      max-width: 95vw;
      padding: 2rem 0;
      display: flex;
      justify-content: center;
      align-items: center;
    }
    .contact-short .center {
      margin: 0 auto;
      display: inherit;
    }
    html{
      /* font-size: 50%; */
    }
  }
`;
export default Footer;
