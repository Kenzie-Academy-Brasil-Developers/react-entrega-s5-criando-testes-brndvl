import React from "react";
import { render, screen } from "@testing-library/react";
import Search from "../../components/Search";

describe("Search Component", () => {
  test("Se há um Botão dentro do componente Search", () => {
    render(<Search />);
    const buttonElement = screen.getByText("Buscar pelo CEP");
    expect(buttonElement).toBeInTheDocument();
  });

  test("Se há um Input dentro do componente Search", () => {
    render(<Search />);
    const buttonInput = screen.getByPlaceholderText("Insira o CEP");
    expect(buttonInput).toBeInTheDocument();
  });

  
});
