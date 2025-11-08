import { useLocalSearchParams, useRouter } from "expo-router";
import React, { useEffect, useState } from "react";
import { ActivityIndicator, Button, Image, StyleSheet, Text, View } from "react-native";
import { useTranslation } from "react-i18next";
import { Country, fetchCountries } from "../../services/countries";

export default function CountryDetail() {
  const { id } = useLocalSearchParams<{ id: string }>();
  const router = useRouter();
  const { t } = useTranslation();
  const [country, setCountry] = useState<Country | null>(null);

  useEffect(() => {
    (async () => {
      const data = await fetchCountries();
      const found = data.find((c) => c.cca3 === id);
      setCountry(found || null);
    })();
  }, [id]);

  if (!country) return <ActivityIndicator size="large" style={{ marginTop: 50 }} />;

  return (
    <View style={styles.container}>
      <Image source={{ uri: country.flags.png }} style={styles.flag} />
      <Text style={styles.title}>{country.name.common}</Text>
      <Text>Capital: {country.capital?.[0] ?? "N/A"}</Text>
      <Text>Population: {country.population.toLocaleString()}</Text>
      <Text>Region: {country.region}</Text>
      <Button title={t("back")} onPress={() => router.back()} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, alignItems: "center", padding: 20 },
  flag: { width: 200, height: 120, marginBottom: 20 },
  title: { fontSize: 22, fontWeight: "bold", marginBottom: 10 },
});
