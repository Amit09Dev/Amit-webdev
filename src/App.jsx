import React from "react";
import Home from "./Components/Home";
import About from "./Components/About";
import Contact from "./Components/Contact";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import Error from "./Components/Error";
import Mywork from "./Mywork";
import { ThemeProvider } from "styled-components";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { GlobalStyle } from "./Components/Global";
import GoToTop from "./GoToTop";

const App = () => {

  const theme = {
    colors: {
      heading: "rgb(24 24 29)",
      text: "rgb(24 24 29)",
      white: "#fff",
      black: " #212529",
      helper: "#1fc3c4",
      bg: "rgb(249 249 255)",
      footer_bg: "rgb(6 60 57);",
      btn: "rgb(22, 151, 153);",
      border: "#1fc3c4",
      hr: "#ffffff",
      gradient:
        "linear-gradient(0deg, rgb(132 144 255) 0%, rgb(98 189 252) 100%)",
      shadow:
        "rgba(0, 0, 0, 0.02) 0px 1px 3px 0px,rgba(27, 31, 35, 0.15) 0px 0px 0px 1px;",
      shadowSupport: " rgba(0, 0, 0, 0.16) 0px 1px 4px",
    },
    media: { mobile: "768px", tab: "998px" },
  };


  return (
    <ThemeProvider theme={theme}>
    <BrowserRouter>
    <GlobalStyle/>
    <GoToTop/>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/mywork" element={<Mywork />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<Error/>} />
      </Routes>
      <Footer />
    </BrowserRouter>
    </ThemeProvider>
  );
};

export default App;
