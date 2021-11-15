import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import renderer from "react-test-renderer";
import { SearchTool } from "../";

describe("SearchTool", () => {
  it("renders expected tree", () => {
    const tree = renderer.create(<SearchTool onSubmit={() => {}} />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("submits search query on button click", () => {
    const onSubmit = jest.fn();
    render(<SearchTool onSubmit={() => onSubmit()} />);
    fireEvent.click(screen.getByRole("button"));
    expect(onSubmit).toBeCalledTimes(1);
  });

  describe("selects correctly", () => {
    const cases = ["Images", "Videos"];

    it.each(cases)("checkbox with label %s when clicked", (label) => {
      const { getByLabelText } = render(<SearchTool onSubmit={() => {}} />);
      const checkboxImages = getByLabelText(label);
      fireEvent.click(checkboxImages);
      expect(checkboxImages).toBeChecked();
    });
  });
});
