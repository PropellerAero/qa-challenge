import { test, expect } from "@playwright/test";

test.describe("Initial setup", () => {
  test("Page displays correct title", async ({ browser }) => {
    const page = await browser.newPage();

    await page.goto("https://caniuse.propelleraero.com/");

    await expect(page.getByText("Can I use Propeller?")).toBeVisible();
    await expect(page.locator("#root")).toBeVisible();

    const title = await page.title();
    expect(title).toBe("Can I use Propeller?");
  });

  test.skip("Search for a location and display results", async ({
    browser,
  }) => {
    const page = await browser.newPage();

    await page.goto("https://caniuse.propelleraero.com/");

    const searchInput = page.getByRole("combobox");
    await searchInput.fill("Sydney");

    const dropDownResults = page.getByRole("listbox");

    expect(dropDownResults).toHaveText([
      "Sydney, New South Wales, Australia",
      "Sydney, Nova Scotia, Canada",
      "Sydney Olympic Park, New South Wales, Australia",
      "Sydney Waterfront District, Sydney, Nova Scotia, Canada",
      "Sydney River, Sydney, Nova Scotia, Canada",
    ]);
  });
});
