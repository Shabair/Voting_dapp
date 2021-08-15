const Migrations = artifacts.require("ElectionCommission");

module.exports = function (deployer) {
  deployer.deploy(Migrations);
};
