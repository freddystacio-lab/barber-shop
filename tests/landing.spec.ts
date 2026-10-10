import { expect, test } from "@playwright/test";

test("presenta el recorrido comercial sin errores visibles", async ({ page }, testInfo) => {
  const browserErrors: string[] = [];
  const failedRequests: string[] = [];
  page.on("console", (message) => {
    if (message.type() === "error") browserErrors.push(message.text());
  });
  page.on("requestfailed", (request) => failedRequests.push(`${request.method()} ${request.url()}`));

  await page.goto("/");
  await expect(page.getByRole("heading", { level: 1, name: /Tu estilo/ })).toBeVisible();
  await expect(page.getByRole("heading", { level: 2, name: "Lo esencial, hecho con oficio." })).toBeVisible();
  const booking = page.getByRole("link", { name: /Reservar una hora/ });
  await expect(booking).toHaveAttribute("href", /^https:\/\/wa\.me\/56955550123\?text=/);
  await expect(page.locator("meta[name='robots']")).toHaveAttribute("content", "noindex, nofollow");
  await expect(page.getByText("Proyecto demostrativo · Marca y datos ficticios")).toBeVisible();

  const overflow = await page.evaluate(() => document.documentElement.scrollWidth > document.documentElement.clientWidth);
  expect(overflow).toBe(false);
  expect(browserErrors).toEqual([]);
  expect(failedRequests).toEqual([]);

  await page.screenshot({ path: `test-results/${testInfo.project.name}-landing.png`, fullPage: true });
});
