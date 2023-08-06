require("@nomiclabs/hardhat-waffle")

module.exports = {
  solidity: "0.8.0",
  networks: {
    /* eth test networks: sepolia/ropsten/giao etc */
    /* url: Alchemy.com krypt tutorial app https key */
    /* accounts[0]: Metamask Account 1 private key (DO NOT PUBLISH - USE DOT ENV) */
    sepolia: {
      url: "https://eth-sepolia.g.alchemy.com/v2/dOFsxLt1J6qD3kWV4XA1RAYSRlAZF-2k",
      accounts: [
        "529cd0d6bebed843dc6030e59799e1eb20a3b0396991661944440643660c748d",
      ],
    },
  },
}
