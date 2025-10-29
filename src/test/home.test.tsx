import { render, screen, within } from "@testing-library/react";
import HomePage from "@/app/page";

describe("HomePage", () => {
  it("renders the hero heading and call to action", () => {
    render(<HomePage />);

    expect(
      screen.getByRole("heading", {
        name: /Hggfg orchestrates multisensory journeys/i
      })
    ).toBeInTheDocument();

    const cta = screen.getByRole("link", { name: /Begin the journey/i });
    expect(cta).toBeInTheDocument();
  });

  it("lists all feature clusters", () => {
    render(<HomePage />);

    const section = screen.getByRole("region", {
      name: /Three interlocking systems/i
    });

    const cards = within(section).getAllByRole("heading", { level: 3 });
    expect(cards).toHaveLength(3);
  });
});
