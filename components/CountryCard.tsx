import React from "react";
import { Image, Pressable, StyleSheet, Text, View } from "react-native";
import { Country } from "../services/countries";

interface Props {
  country: Country;
  onPress: () => void;
}

export default function CountryCard({ country, onPress }: Props) {
  return (
    <Pressable style={styles.card} onPress={onPress}>
      <Image source={{ uri: country.flags.png }} style={styles.flag} />
      <View style={{ flex: 1 }}>
        <Text style={styles.name}>{country.name.common}</Text>
        <Text style={styles.info}>Region: {country.region}</Text>
        <Text style={styles.info}>Population: {country.population.toLocaleString()}</Text>
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  card: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#fff",
    marginBottom: 10,
    borderRadius: 8,
    padding: 10,
    elevation: 2,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  flag: { width: 80, height: 50, borderRadius: 4, marginRight: 10 },
  name: { fontSize: 18, fontWeight: "bold" },
  info: { fontSize: 14, color: "#555" },
});
