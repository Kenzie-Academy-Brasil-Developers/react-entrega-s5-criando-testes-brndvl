import React from "react";
import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import Search from "../../components/Search";
import api from "../../services"
import MockAdapter from "axios-mock-adapter";

describe("Search Component", () => {
  test("Se há um Botão dentro do componente Search", () => {
    render(<Search />);
    const buttonElement = screen.getByText("Buscar pelo CEP");
    expect(buttonElement).toBeInTheDocument();
  });

  test("Se há um Input dentro do componente Search", () => {
    render(<Search />);
    const inputField = screen.getByPlaceholderText("Insira o CEP");
    expect(inputField).toBeInTheDocument();
  });

  test("Se o input recebe o valor nulo ao clicar no botao", async() => {
    render(<Search />);

    const inputField = screen.getByPlaceholderText("Insira o CEP");
    const buttonElement = screen.getByText("Buscar pelo CEP")

    fireEvent.change(inputField, {target: {value: null}})

    fireEvent.click(buttonElement)

    await waitFor(() => {
      expect(inputField).toHaveValue(null)
    })
  });

  
  
});
