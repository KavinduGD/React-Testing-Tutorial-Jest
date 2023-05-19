import { render, screen, cleanup } from "@testing-library/react";
import Todo from "../todo";

afterEach(() => {
  cleanup();
});

test("should render non-completed todo component", () => {
  const todo = { id: 1, title: "todo 1", completed: false };
  render(<Todo todo={todo} />);
  const todoElement = screen.getByTestId("todo-1");
  expect(todoElement).toBeInTheDocument();
  expect(todoElement).toHaveTextContent("todo 1");
  expect(todoElement).not.toContainHTML("<strike>");
});

test("should render completed todo component", () => {
  const todo = { id: 2, title: "todo 2", completed: true };
  render(<Todo todo={todo} />);
  const todoElement = screen.getByTestId("todo-2");
  expect(todoElement).toBeInTheDocument();
  expect(todoElement).toHaveTextContent("todo 2");
  expect(todoElement).toContainHTML("<strike>");
});
