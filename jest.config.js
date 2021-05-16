module.exports = {
    displayName: 'components',
    collectCoverageFrom: [
        "**/*.{js,jsx}",
        "**/src/**"
    ],
    coveragePathIgnorePatterns:[
        "coverage",
        "node_modules",
        "build",
        "src/redux",
        "src/constants",
        "src/assets",
        "src/@fake-db",
        "src/__snapshots__",
        "jest.config.js",
        "config-overrides.js",
        "serviceWorker.js",
        "setupTests.js",
        ".scannerwork/"
    ],
    snapshotSerializers: [
        "enzyme-to-json/serializer"
    ],
    setupFiles: ["./src/setupTests.js"],
    moduleNameMapper: {
        "\\.(css|scss|less)$": "identity-obj-proxy",
        "\\.(jpg|jpeg|png|svg|gif)$": "jest-transform-stub",
        "^history$": './__mocks__/history.js'
    },
    transform: {
        '^.+\\.js$': 'babel-jest',
        '^history$': './__mocks__/history.js'
    },
    moduleDirectories: [
        ".",
        "src",
        "node_modules"
    ],
    setupFilesAfterEnv: ['./node_modules/jest-enzyme/lib/index.js'],
    coverageThreshold:{
        global:{
            branches: 80,
            functions: 80,
            lines: 80,
            statements: 80
        }
    }
    // moduleFileExtensions: ["jsx", "js", "json"]
}