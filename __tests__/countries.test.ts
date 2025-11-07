import { fetchCountries, searchCountries } from "../services/countries";

describe("Countries API", () => {
  test("fetchCountries returns data", async () => {
    const data = await fetchCountries();
    expect(Array.isArray(data)).toBe(true);
    expect(data[0]).toHaveProperty("name");
  });

  test("searchCountries returns results for 'France'", async () => {
    const data = await searchCountries("France");
    expect(data.length).toBeGreaterThan(0);
    expect(data[0].name.common).toMatch(/France/i);
  });
});
