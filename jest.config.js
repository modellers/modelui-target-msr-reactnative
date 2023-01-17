// https://jestjs.io/docs/tutorial-react-native
/** @type {import('jest').Config} */
const config = {
    verbose: true,
    preset: "react-native",
    collectCoverageFrom: [
        '**/*.{js,jsx}',
        '!**/node_modules/**',
        '!**/vendor/**',
    ],
    transformIgnorePatterns: [
        'node_modules/(?!@react-native|react-native)',
        'node_modules/(?!(jest-)?@?react-native|@react-native-community|@react-navigation)'

    ],
    coveragePathIgnorePatterns: [
        '/node_modules/',
    ]
};

module.exports = config;