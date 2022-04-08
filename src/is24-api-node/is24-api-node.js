/** @module is24 */
var oauth = require("oauth");
var qs = require("qs");
var IS24 = function (options) {
  if (!(this instanceof IS24)) return new IS24(options);
  this.consumerKey = options.consumerKey;
  this.consumerSecret = options.consumerSecret;
  this.accessToken = options.accessToken;
  this.tokenSecret = options.tokenSecret;
  this.customHeaders = options.customHeaders || { Accept: "application/json" };
  this.baseUrl =
    "https://rest.sandbox-immobilienscout24.de/restapi/api/offer/v1.0/user/me";
  this.oa = new oauth.OAuth(
    "https://rest.sandbox-immobilienscout24.de/restapi/security/oauth/request_token",
    "https://rest.sandbox-immobilienscout24.de/restapi/security/oauth/access_token",
    this.consumerKey,
    this.consumerSecret,
    "1.0",
    this.callback,
    "HMAC-SHA1",
    null,
    this.customHeaders
  );
  return this;
};

/**
 * Get all realestate
 * @method getAllRealestate
 * @param {requestCallback} cb - the callback that handles the response.
 */
IS24.prototype.getAllRealestate = function (cb) {
  var path = "/realestate";
  var url = this.baseUrl + path;
  this.doRequest(url, null, function (err, data, res) {
    if (err) {
      cb(err, data, res, this.baseUrl + "/realestate");
    } else {
      try {
        cb(null, data, res);
      } catch (e) {
        cb(e, data, res);
      }
    }
  });
};

IS24.prototype.buildQS = function (params) {
  if (params && Object.keys(params).length > 0) {
    return (
      "/" + qs.stringify(params, { delimiter: "/", strictNullHandling: true })
    );
  }
  return "";
};
module.exports = IS24;
