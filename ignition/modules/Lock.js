const { buildModule } = require("@nomicfoundation/hardhat-ignition/modules");
module.exports = buildModule("Legit", (m) => {
  const Legit = m.contract("Legit");
  return { Legit };
});