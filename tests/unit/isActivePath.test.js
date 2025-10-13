import { describe, it, expect } from "vitest";
import { isActivePath } from "../../js/utils/userInterface.js";

describe("isActivePath", () => {
  /* Returns true when current path matches href exactly */
  it("returns true when current path matches href exactly", () => {
    expect(isActivePath("/about", "/about")).toBe(true);
  });

  /*  Returns true for root path ("/") when path is "/" or "/index.html" */
  it('returns true for root path ("/") when path is "/" or "/index.html"', () => {
    expect(isActivePath("/", "/")).toBe(true);
    expect(isActivePath("/", "/index.html")).toBe(true);
  });

  /* Returns true when current path includes the href */
  it("returns true when current path includes the href", () => {
    expect(isActivePath("/products", "/products/123")).toBe(true);
  });

  /* Returns false when paths don't match */
  it("returns false when paths don't match", () => {
    expect(isActivePath("/contact", "/about")).toBe(false);
  });
});
