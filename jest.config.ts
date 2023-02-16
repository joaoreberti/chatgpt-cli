export default {
  transform: {
    "^.+\\.(t|j)sx?$": [
      "@swc/jest",
      {
        module: {
          type: "commonjs",
        },
      },
    ],
  },
  testEnvironment: "node",
  testMatch: ['<rootDir>/src/**/*.test.ts'],
  
};
