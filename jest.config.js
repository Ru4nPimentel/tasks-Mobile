module.exports = {
  "preset": "jest-expo",
  "setupFiles": ["./setupTests.js"],
  "transformIgnorePatterns": [
    "node_modules/(?!((jest-)?react-native|@react-native(-community)?)|expo(nent)?|@expo(nent)?/.*|@expo-google-fonts/.*|react-navigation|@react-navigation/.*|@unimodules/.*|unimodules|sentry-expo|native-base|react-native-svg)|@react-native-async-storage/async-storage"
  ],
  "testPathIgnorePatterns": [
    "/node_modules",
    "/android",
    "/ios"
  ],
  collectCoverage: true,
  collectCoverageFrom: [
    "src/**/*.tsx",
    "!src/**/*.spec.tsx"
  ],
  coverageReporters: [
    "lcov"
  ]
}
