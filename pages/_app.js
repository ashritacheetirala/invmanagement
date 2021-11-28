import React from "react";
import "tailwindcss/tailwind.css";
import "../styles/globals.css";
import { ThemeProvider } from "../components/ThemeContext";
import Background from "../components/Backgroud";
import Navbar from "../components/Navbar";

function MyApp({ Component, pageProps }) {
  return (
    <React.Fragment>
      <ThemeProvider>
        <Background>
          <Navbar />
          <div className="my-10 overflow-x-auto max-w-7xl mx-auto sm:px-6 lg:px-8">
            <Component {...pageProps} />
          </div>
        </Background>
      </ThemeProvider>
    </React.Fragment>
  );
}

export default MyApp;
