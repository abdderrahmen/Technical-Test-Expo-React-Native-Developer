// jest.setup.js
import "@testing-library/jest-native/extend-expect";
// ✅ Polyfill global.fetch for Jest (Node environment)
import 'cross-fetch/polyfill';

// Mock AsyncStorage
jest.mock("@react-native-async-storage/async-storage", () => ({
  setItem: jest.fn(),
  getItem: jest.fn(),
  removeItem: jest.fn(),
}));

// Mock expo-localization
jest.mock("expo-localization", () => ({
  locale: "en",
}));

afterAll(() => {
  jest.useRealTimers();
});

