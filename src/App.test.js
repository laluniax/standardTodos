import { render, screen } from "@testing-library/react";
import Todos from "./Todos";

test("renders learn react link", () => {
  render(<Todos />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
