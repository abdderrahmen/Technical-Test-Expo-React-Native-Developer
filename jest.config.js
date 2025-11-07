module.exports = {
  preset: "jest-expo",
  testEnvironment: "jsdom",
  setupFilesAfterEnv: [
    "@testing-library/jest-native/extend-expect",
    "<rootDir>/jest.setup.js",
  ],
  transformIgnorePatterns: [
    "node_modules/(?!(jest-)?react-native" +
      "|@react-native" +
      "|@react-navigation" +
      "|@react-native-community" +
      "|expo" +
      "|expo-router" +
      "|expo-modules-core" +
      "|expo-constants" +
      "|expo-asset" +
      "|expo-localization" +
      "|@expo" +
      "|react-native-vector-icons" +
      ")",
  ],
  moduleNameMapper: {
    "^expo$": "<rootDir>/__mocks__/expo.js",
    "^expo-router$": "<rootDir>/__mocks__/expo-router.js",
    "^expo/.*$": "<rootDir>/__mocks__/expo.js",
  },
};

