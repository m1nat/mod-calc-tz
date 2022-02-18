import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Calculator_header from "./Header/Calculator-header";
import Control_panel from "../pages/home/Home";
import Settings_page from "../pages/settings/Settings";

import { AppWrapper } from "../constants/styles-components";

const CalculatorApp = ({themeToggle}) => {

  return (
    <BrowserRouter>
      <AppWrapper >
        <Calculator_header />
        <Routes>
          <Route path="/" element={<Control_panel />} />
          <Route path="/settings" element={<Settings_page  themeToggle={themeToggle}/>} />
        </Routes>
      </AppWrapper>
    </BrowserRouter>

  )
}


export default CalculatorApp
