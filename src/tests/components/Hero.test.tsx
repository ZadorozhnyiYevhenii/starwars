import { render, screen } from "@testing-library/react";
import { IHero } from "@/types/IHero";
import { Hero } from "@/components/Hero/Hero";

const mockHero: IHero = {
  name: "Yoda",
  height: "172",
  mass: "77",
  gender: "male",
  hair_color: "blond",
  eye_color: "blue",
  skin_color: "fair",
  url: "/1",
  films: [12, 13],
  starships: [46, 63],
  created: "now",
};


describe("Hero component ", () => {
  it("renders button correctly", () => {
    render(<Hero hero={mockHero} />);

    const viewMoreButton = screen.getByRole("button", {
      name: "View More Info",
    });
    expect(viewMoreButton).toBeInTheDocument();
  });

  it("renders hero`s name", () => {
    render(<Hero hero={mockHero} />);

    const heroNameElement = screen.getByText("Yoda");
    expect(heroNameElement).toBeInTheDocument();
  });

  it("renders hero details", () => {
    render(<Hero hero={mockHero} />);

    expect(screen.getByText("172")).toBeInTheDocument();
    expect(screen.getByText("77")).toBeInTheDocument();
    expect(screen.getByText("male")).toBeInTheDocument();
    expect(screen.getByText("blond")).toBeInTheDocument();
    expect(screen.getByText("blue")).toBeInTheDocument();
    expect(screen.getByText("fair")).toBeInTheDocument();
  });
});
