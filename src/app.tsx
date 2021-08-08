import React from "react";
import { CompanyProvider } from "./core/company";
import { RouterComponent } from "./router";

export const App = () => {
  return (
    <CompanyProvider>
      <RouterComponent />
    </CompanyProvider>
  );
};
