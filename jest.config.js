const nextJest = require("next/jest");
const nextEnv = require("dotenv").config({ path: ".env.development" });
console.log(nextEnv);

const createJestConfig = nextJest();
const jestConfig = createJestConfig({
  moduleDirectories: ["node_modules", "<rootDir>"],
});

module.exports = jestConfig;
