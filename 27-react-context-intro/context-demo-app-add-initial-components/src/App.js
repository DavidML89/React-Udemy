import React from "react";
import Navbar from "./Navbar";
import Form from "./Form";
import PageContent from "./PageContent";
import { ThemeProvider } from "./Contexts/ThemeContext"
import { LanguageProvider } from "./Contexts/LanguageContext";

export default function App() {
  return (
    <>
      <ThemeProvider>
        <LanguageProvider>
        <PageContent>
          <Navbar />
          <Form />
        </PageContent>
        </LanguageProvider>
      </ThemeProvider>
    </>
  );
}
