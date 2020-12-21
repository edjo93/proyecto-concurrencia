var Album = artifacts.require("./Album.sol");

module.exports = function(deployer) {
  deployer.deploy(Album);
};
