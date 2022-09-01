module.exports = {
    roots: ["src"],
    setupFilesAfterEnv: ["<rootDir>/src/setupTests.ts"],
    moduleFileExtensions: ["ts", "tsx", "js"],
    testPathIgnorePatterns: ["node_modules/"],
    transform: {
      "^.+\\.tsx?$": "ts-jest"
    },
    testMatch: ["**/*.test.(ts|tsx)"],
    moduleDirectories: ['node_modules', 'src'],
    moduleNameMapper: {
      // Mocks out all these file formats when tests are run.
      "\\.(jpg|ico|jpeg|png|gif|eot|otf|webp|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$":
      "jest-transform-stub",
      "\\.(css|less|scss|sass)$": "identity-obj-proxy",
      '\\.svg$': '<rootDir>/__mocks__/svgrMock.ts',
    },
  };