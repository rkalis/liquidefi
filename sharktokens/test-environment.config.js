require('dotenv').config();

module.exports = {
  setupProvider: (baseProvider) => {
    baseProvider.host = `https://node.moonnet.space/uuid/${process.env.MOONNET_UUID}`;
    return baseProvider;
  },
};
