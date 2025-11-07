import { useRouter } from "expo-router";
import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { ActivityIndicator, Button, FlatList, StyleSheet, Text, View } from "react-native";
import CountryCard from "../components/CountryCard";
import SearchInput from "../components/SearchInput";
import i18n, { changeLanguage } from "../i18n";
import { Country, fetchCountries, searchCountries } from "../services/countries";
import useDebouncedValue from "../utils/useDebouncedValue";

export default function HomeScreen() {
  const router = useRouter();
  const { t } = useTranslation();

  const [countries, setCountries] = useState<Country[]>([]);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const debouncedSearch = useDebouncedValue(search, 500);

  const loadCountries = async () => {
    try {
      setLoading(true);
      const data = debouncedSearch
        ? await searchCountries(debouncedSearch)
        : await fetchCountries();
      setCountries(data);
      setError(null);
    } catch (err: any) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadCountries();
  }, [debouncedSearch]);

  // 🔁 Language toggle
  const toggleLanguage = async () => {
    const newLang = i18n.language === "en" ? "es" : "en";
    await changeLanguage(newLang);
  };

  if (loading) return <ActivityIndicator 
                testID="loading-indicator"
                size="large" 
                style={{ marginTop: 50 }}
            />;
  if (error)
    return (
      <View style={styles.center}>
        <Text style={{ color: "red" }}>{error}</Text>
      </View>
    );

  return (
    <View style={{ flex: 1, padding: 10 }}>
      {/* 🔁 Language Switch Button */}
      <Button
        title={i18n.language === "en" ? "Español 🇪🇸" : "English 🇬🇧"}
        onPress={toggleLanguage}
      />

      {/* 🔍 Search bar */}
      <SearchInput
        value={search}
        onChangeText={setSearch}
        placeholder={t("search_placeholder")}
      />

      {/* 🌍 Countries List */}
      <FlatList
        data={countries}
        keyExtractor={(item) => item.cca3}
        renderItem={({ item }) => (
          <CountryCard
            country={item}
            onPress={() => router.push(`/country/${item.cca3}`)}
          />
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  center: { flex: 1, justifyContent: "center", alignItems: "center" },
});
