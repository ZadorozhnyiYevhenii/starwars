import React from "react";
import { render, screen, waitFor } from "@testing-library/react";
import { HeroConnections } from "@/components/HeroConnections/HeroConnections";

class ResizeObserverMock {
  observe() {}
  unobserve() {}
  disconnect() {}
}
(global as any).ResizeObserver = ResizeObserverMock;

jest.mock("@/api/getRequests/getFilms", () => ({
  getFilms: jest
    .fn()
    .mockResolvedValue([{ title: "Film 1" }, { title: "Film 2" }]),
}));

jest.mock("@/api/getRequests/getHeroById", () => ({
  getHeroById: jest.fn().mockResolvedValue({ name: "Luke Skywalker" }),
}));

jest.mock("@/helpers/groupHerosWithStarship", () => ({
  groupHerosWithStarship: jest.fn().mockReturnValue({ heroWithStarship: ["Starship 1", "Starship 2"] }),
}));

describe("HeroConnections component", () => {
  it("renders hero name", async () => {
    render(<HeroConnections id="1" />);

    await waitFor(() => {
      const heroName = screen.getByRole("heading", { name: "Luke Skywalker" });
      expect(heroName).toBeInTheDocument();
    });
  });

  it("renders correct number of films", async () => {
    render(<HeroConnections id="1" />);

    await waitFor(() => {
      const firstNode = screen.getByText("Film 1");
      const secondNode = screen.getByText("Film 2");

      expect(firstNode).toBeInTheDocument();
      expect(secondNode).toBeInTheDocument();
    });
  });

});
