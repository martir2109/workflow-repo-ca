import { test, expect } from "@playwright/test";

test("wrong password shows error", async ({ page }) => {
  await page.goto("/login");

  await page.locator('input[name="email"]').fill(process.env.TEST_USER_EMAIL);
  await page.locator('input[name="password"]').fill("wrongpassword");

  await page.getByRole("button", { name: "Login" }).click();

  await expect(page.locator("#message-container")).toContainText(
    "Invalid email or password",
  );
});
