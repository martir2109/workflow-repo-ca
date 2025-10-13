import { describe, it, expect, beforeEach } from "vitest";
import { getUsername, saveUser } from "../../js/utils/storage.js";

/* Test that it returns the name from the user object in storage (first save a user object to storage)
 */
describe("Storage functions", () => {
  beforeEach(() => {
    localStorage.clear();
  });

  describe("getUsername", () => {
    it("returns the name from the user object in storage", () => {
      const mockUser = { name: "Alice" };
      saveUser(mockUser);
      const username = getUsername();
      expect(username).toBe("Alice");
    });

    /* Test that it returns null when no user exists in storage
     */
    it("returns null when no user exists in storage", () => {
      const username = getUsername();
      expect(username).toBeNull();
    });
  });
});
