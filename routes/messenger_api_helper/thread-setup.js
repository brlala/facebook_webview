// ===== MESSENGER =============================================================
let api = require('./api')

/**
 * SETUP
 *
 * Methods that should only be called at first run
 * that help set up Messenger related config
 */

const setDomainWhitelisting = () => {
  api.callMessengerProfileAPI({
    whitelisted_domains: [process.env.serverURI,"https://microappuat.gelm.pand.ai/"]
  })
};

module.exports = {
  setDomainWhitelisting
};
