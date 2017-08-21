module.exports = {
  networks: {
    development: {
      host: "testrpc",
      port: 8545,
      network_id: "*" // Match any network id
    },
    "testnet": {
      host: "parity-testnet",
      port: 8545
    }
  }
};
