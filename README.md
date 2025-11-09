🌍 Countries Explorer

A mobile application built with Expo and TypeScript that allows users to explore countries, view details, and switch between languages.

Developed as part of a technical test for evaluating skills in React Native (Expo), TypeScript, and project architecture.

 Developed by

Abderrahman Berrairia
 Email: [abdou.mi@hotmail.com]
 GitHub: https://github.com/abderrahmen

 Location: Algeria

 Features

 Display a list of all countries
 Search countries by name (with debounce)
 View detailed info: Flag, Capital, Population, Region
 Multi-language support (English / Spanish)
 Language persistence with AsyncStorage
 Error, loading, and empty states
 Pagination-ready FlatList
 Unit tests with Jest + Testing Library

 Tech Stack

Framework	Expo
 (SDK 54)
Language	TypeScript
Navigation	Expo Router

i18n	react-i18next + expo-localization
State Management	React Hooks (useState, useEffect)
API	fetch with RESTCountries API

Storage	AsyncStorage
Testing	Jest + React Native Testing Library
Linting	ESLint + Prettier

Getting Started: 
Install dependencies
npx expo start


 You can test directly with Expo Go on your phone.

Project Structure
countriesexplorer/
├── app/
│   ├── _layout.tsx        # Root navigation stack
│   ├── index.tsx          # Home screen (list of countries)
│   └── country/[id].tsx   # Country details screen
│
├── components/            # Reusable UI components
├── services/              # REST Countries API logic
├── i18n/                  # Translations and language setup
├── utils/                 # Hooks (e.g. debounce)
├── __tests__/             # Jest unit tests
│   ├── countries.test.ts
│   └── HomeScreen.test.tsx
├── jest.config.js         # Jest configuration
├── jest.setup.js          # Test setup (mocks)
├── package.json
└── README.md

 API Reference
All countries
GET https://restcountries.com/v3.1/all?fields=name,flags,capital,population,region,cca3

Search by name
GET https://restcountries.com/v3.1/name/{name}?fields=name,flags,capital,population,region,cca3

 Technical Decisions

Expo Router → Simplifies navigation and supports dynamic routes (country/[id].tsx)
i18n with react-i18next → Multi-language support with persistent settings
AsyncStorage → Saves preferred language between sessions
Debounce Search → Prevents unnecessary API calls
TypeScript → Provides static typing and improves maintainability
FlatList → Efficient list rendering with pagination support
Jest & RTL → Ensures correctness of UI and API integration

 Testing
Run all tests:
npm test

Includes:

 countries.test.ts – verifies API fetch & search functionality
 HomeScreen.test.tsx – ensures rendering and loading state work correctly

 Environment
Tool	Version
Node.js	18.x
Expo SDK	54
React	19.1
React Native	0.81.5
TypeScript	5.9
Jest	29+

Bonus features:
Flags displayed via PNG (API). SVG optional.
Responsive layout using Flexbox.
Easily extendable for state management or caching.

 Conclusion

This project demonstrates:
A clean and scalable Expo architecture
Good TypeScript practices
Multi-language (i18n) configuration
Proper state management & API handling
Solid unit testing setup
Clean UI/UX using React Native components
