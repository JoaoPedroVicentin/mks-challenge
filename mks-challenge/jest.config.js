module.exports = {
    testPathIgnorePatterns: ["/node_modules/", "/.next/"],
    stupFilesAfterEnv: [
        "<rootDir>/src/tests/setupTests.ts"
    ],
    transform: {
        "^.+\\.(js|jsx|ts|tsx)$": "<rootDir>/node_modules/babel-jest"
    },
    testEnviroment: 'jsdom'
}