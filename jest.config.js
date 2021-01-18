module.exports = {
    roots: ["<rootDir>"],
    testMatch: [
        "<rootDir>/test/**/*.test.ts",
        "<rootDir>/test/**/test.ts"
    ],
    transform: {
        "^.+\\.(ts|tsx)?$": "ts-jest"
    },
    globals: {
        "ts-jest": {
            tsconfig: "tsconfig.json"
        }
    },
    moduleFileExtensions: ["ts", "tsx", "js", "jsx", "json", "node"]
};
