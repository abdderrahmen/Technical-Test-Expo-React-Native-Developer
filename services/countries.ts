export interface Country {
  name: { common: string };
  flags: { png: string };
  capital?: string[];
  population: number;
  region: string;
  cca3: string;
}

/**
 * Fetch all countries with selected fields
 */
export async function fetchCountries(): Promise<Country[]> {
  const res = await fetch(
    "https://restcountries.com/v3.1/all?fields=name,flags,capital,population,region,cca3"
  );

  if (!res.ok) {
    const text = await res.text();
    console.error("API error:", text);
    throw new Error(`Failed to fetch countries (status: ${res.status})`);
  }

  return res.json();
}

/**
 * Search countries by name with debounce
 */
export async function searchCountries(name: string): Promise<Country[]> {
  if (!name.trim()) {
    return fetchCountries(); // fallback: return all if search is empty
  }

  const res = await fetch(
    `https://restcountries.com/v3.1/name/${encodeURIComponent(
      name
    )}?fields=name,flags,capital,population,region,cca3`
  );

  if (!res.ok) {
    if (res.status === 404) {
      // No results — return empty list instead of throwing
      return [];
    }
    const text = await res.text();
    console.error("API error:", text);
    throw new Error(`Failed to search countries (status: ${res.status})`);
  }

  return res.json();
}
