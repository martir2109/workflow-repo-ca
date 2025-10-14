import { test, expect } from "@playwright/test";

test.describe("navigation", () => {
  test("User can navigate to from home page to the first venue, and that the veune heading contains: Venue details", async ({
    page,
  }) => {
    /* Navigates to the home page */
    await page.goto("/");

    /* Waits for the venue list to load */
    await expect(page.locator("#venue-container")).toBeVisible();

    /*  Clicks the first venue */
    await page.locator("#venue-container a").first().click();

    /* Verifies that when the venue details page loads there are the words “Venue details” in the heading  */
    await expect(
      page.getByRole("heading", { name: "Venue details" }),
    ).toBeVisible();
  });
});
