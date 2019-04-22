const request = require("request-promise-native");
const config = require("../../config")();
/**
 * validateToken - validate the token supplied by the frontend
 * @param {String} token the token supplied by the front end
 * @param {String} ffid the ffid of the user
 */
async function validateToken(token, ffid) {
  const data = await request.get(
    `https://graph.facebook.com/debug_token?input_token=${token}&access_token=${
      config.FB.APP_ID
    }|${config.FB.APP_SECERET}`
  );
  const { data: parsedData } = JSON.parse(data);

  if (parsedData.is_valid) {
    if (ffid === parsedData.user_id) {
      return true;
    } else {
      return false;
    }
  } else {
    return false;
  }
}
module.exports = { validateToken };
