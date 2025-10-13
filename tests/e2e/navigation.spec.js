import { test, expect } from "@playwright/test";

/* Navigates to the home page */
test("navigate to home page", async ({ page }) => {
  await page.goto("/");

  await expect(page.locator("h1")).toBeVisible();

  await expect(page).toHaveTitle("Workflow CA");
});

/* Waits for the venue list to load */
test("venue loads on home page", async ({ page }) => {
  await page.goto("/");

  const venueList = page.locator("#venue-container");

  await expect(venueList).toBeVisible();
});

/* Clicks the first venue */
test("clicks the first venue", async ({ page }) => {
  await page.goto("/");

  const venueList = page.locator("#venue-container");

  await expect(venueList).toBeVisible();

  const firstVenue = venueList.locator("a").first();

  await firstVenue.click();
});

/* Verifies that when the venue details page loads there are the words “Venue details” in the heading */
test("venue details page displays 'Venue details' heading", async ({
  page,
}) => {
  await page.goto("/");

  const venueList = page.locator("#venue-container");

  await expect(venueList).toBeVisible();

  const firstVenue = venueList.locator("a").first();

  await firstVenue.click();

  const heading = page.getByRole("heading", { name: /Venue details/i });

  await expect(heading).toBeVisible();
});
