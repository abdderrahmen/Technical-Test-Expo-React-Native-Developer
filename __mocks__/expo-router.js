module.exports = {
  useRouter: () => ({
    push: jest.fn(),
    back: jest.fn(),
  }),
  useSearchParams: () => ({}),
  useLocalSearchParams: () => ({}),
  Stack: ({ children }) => children,
};
