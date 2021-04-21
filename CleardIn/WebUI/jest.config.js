module.exports = {
    testEnvironment: "jsdom",
    coverageDirectory: "coverage",
    collectCoverage: true,
    collectCoverageFrom: ["src/(Components)/**/*.{js,jsx,ts,tsx}", "!src/**/*stories.{js,jsx}"],
    coveragePathIgnorePatterns: [
        "<rootDir>/node_modules/",
        ".story.js",
        ".data.js",
        "<rootDir>/assetsTransformer.js",
        "<rootDir>/coverage",
        "<rootDir>/src/assets",
    ],
    testPathIgnorePatterns: [
        "<rootDir>/node_modules/",
        "<rootDir>/coverage",
    ],
    transform: {
        "^.+\\.js?$": "babel-jest",
    },
    moduleNameMapper: {
        ".+\\.(css|styl|less|sass|scss)$": "identity-obj-proxy",
        ".+\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$": "<rootDir>/__mocks__/fileMock.js"
    },
    verbose: true,
    moduleDirectories: ["node_modules", "src"],
    "setupFilesAfterEnv": [
    "<rootDir>/jest.setup.js"
  ],
};