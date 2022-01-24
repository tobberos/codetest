import { CarContainer } from "../src/components/CarContainer";
import React from "react";
import { StyleProvider, ThemePicker } from "vcc-ui";

function HomePage() {
  return (
    <React.StrictMode>
      <StyleProvider>
        <ThemePicker variant="light">
          <CarContainer />
        </ThemePicker>
      </StyleProvider>
    </React.StrictMode>
  );
}

export default HomePage;
