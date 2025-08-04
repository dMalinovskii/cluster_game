module.exports = {
    preset: "ts-jest",
    moduleFileExtensions: ["ts", "tsx", "js", "json"],
    testMatch: ["**/__tests__/**/*.test.[jt]s?(x)"],
    transform: {
        "^.+\\.(ts)$": "ts-jest",
    },
};
