import { render } from "@testing-library/react-native";
import React from "react";
import HomeScreen from "../app/index";

describe("<HomeScreen />", () => {
  it("renders loading indicator", async () => {
    const { findByTestId } = render(<HomeScreen />);
    const loader = await findByTestId("loading-indicator");
    expect(loader).toBeTruthy();
  });
});

