import React from "react";
import styled from "styled-components";
import ReCAPTCHA from "react-google-recaptcha";
import { Button } from "./Button";
import { NavLink } from "react-router-dom";


const Contact = () => {
  const Wrapper = styled.section`
    padding: 9rem 0 5rem 0;

    .btn-center{
      margin: 4rem auto;
      display: flex;
      justify-content: center;
    }

    .container {
      margin-top: 6rem;
      text-align: center;

      .contact-form {
        max-width: 50rem;
        margin: auto;

        .contact-inputs {
          display: flex;
          flex-direction: column;
          gap: 1.5rem;

          input[type="submit"] {
            cursor: pointer;
            transition: all 0.2s;
            &:hover {
              background-color: ${({ theme }) => theme.colors.white};
              border: 1px solid ${({ theme }) => theme.colors.btn};
              color: ${({ theme }) => theme.colors.btn};
              transform: scale(0.9);
            }
          }
        }
      }
    }
  `;

  const onChange = () => {}

  return (
    <Wrapper className="section">
      <h2 className="common-heading">Feel Free to Contact Me</h2>
      <NavLink to="https://drive.google.com/file/d/1q1Vu4K_WI79zdLDf5xDtwep9ER6aXB1-/view?usp=share_link">
      <Button className="btn-center">Download CV</Button>
      </NavLink>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d428.6188167894043!2d76.6585840349315!3d30.747890935565934!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390fefe15f1d6b91%3A0xf90394e378f46a72!2s7%2C%20Mata%20Gujri%20Rd%2C%20Chirag%20Enclave%2C%20Janta%20Nagar%2C%20Mundi%20Kharar%2C%20Punjab%20140301!5e0!3m2!1sen!2sin!4v1679219936382!5m2!1sen!2sin"
        width="100%"
        height="450"
        style={{ border: 0 }}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>

      <div className="container">
        <div className="contact-form">
          <form
            action="https://formspree.io/f/xrgvagpl"
            method="POST"
            className="contact-inputs"
          >
            <input
              type="text"
              name="username"
              id=""
              placeholder="Name"
              autoComplete="off"
              required
            />
            <input
              type="email"
              name="email"
              id=""
              placeholder="Email"
              autoComplete="off"
              required
            />
            <textarea
              name="message"
              cols="30"
              rows="6"
              required
              autoComplete="off"
              placeholder="Your message"
            ></textarea>
             <input type="submit" value="send" />
          </form>
        </div>
      </div>
    </Wrapper>
  );
};

export default Contact;
