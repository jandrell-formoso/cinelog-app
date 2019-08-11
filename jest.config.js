module.exports = {
  preset: "react-native",
  moduleFileExtensions: ["ts", "tsx", "js", "jsx", "json", "node"],
  setupFilesAfterEnv: ['./node_modules/jest-enzyme/lib/index.js'],
  testEnvironment: "enzyme",
};
