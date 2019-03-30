/*
config.js - Configuration for ZENCash Coin
*/

module.exports = {
  mainnet: {
    messagePrefix: '\x18BitcoinZ Signed Message:\n',
    bip32: {
        public: '0488b21e',
        private: '05358394'
    },
    pubKeyHash: '1cb8',
    scriptHash: '1cbd',
    zcPaymentAddressHash: '169a', // Private z-address
    zcSpendingKeyHash: 'ab36', // Spending key
    wif: '80'
  },
  testnet: {
    messagePrefix: '\x18BitcoinZ Signed Message:\n',
    bip32: {
      public: '043587cf',
      private: '04358394'
    },
    pubKeyHash: '1d25',
    scriptHash: '1cba',
    zcPaymentAddressHash: '16b6',
    zcSpendingKeyHash: 'ac08',
    wif: 'ef'
  }
};
