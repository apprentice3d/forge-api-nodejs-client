/**
 * Forge SDK
 * The Forge Platform contains an expanding collection of web service components that can be used with Autodesk cloud-based products or your own technologies. Take advantage of Autodesk’s expertise in design and engineering.
 *
 * OpenAPI spec version: 0.1.0
 * Contact: forge.help@autodesk.com
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

module.exports = (function() {
  'use strict';

  var ApiClient = require('../ApiClient');



  /**
   * The PostObjectSigned model module.
   * @module model/PostObjectSigned
   * @version 0.2.5
   */

   /**
    * Constructs a <code>PostObjectSigned</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:model/PostObjectSigned} obj Optional instance to populate.
    * @return {module:model/PostObjectSigned} The populated <code>PostObjectSigned</code> instance.
    */
  var constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
  
      if (data.hasOwnProperty('signedUrl')) {
        obj['signedUrl'] = ApiClient.convertToType(data['signedUrl'], 'String');
      }
      if (data.hasOwnProperty('expiration')) {
        obj['expiration'] = ApiClient.convertToType(data['expiration'], 'Date');
      }
    }
    return obj;
  };

  /**
   * Constructs a new <code>PostObjectSigned</code>.
   * Object Signed Object json response
   * @alias module:model/PostObjectSigned
   * @class
   * @param signedUrl {String} URL created for downloading the object
   * @param expiration {Date} Value for expiration in minutes
   * @param {Object} theData The plain JavaScript object bearing properties of interest.
   * @param {module:model/PostObjectSigned} obj Optional instance to populate.
   */
  var exports = function(signedUrl, expiration, theData, obj) {
    var _this = this;

    _this['signedUrl'] = signedUrl;
    _this['expiration'] = expiration;

    return constructFromObject(theData, obj);
  };

  /**
   * Constructs a <code>PostObjectSigned</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/PostObjectSigned} obj Optional instance to populate.
   * @return {module:model/PostObjectSigned} The populated <code>PostObjectSigned</code> instance.
   */
  exports.constructFromObject = constructFromObject;

  /**
   * URL created for downloading the object
   * @member {String} signedUrl
   */
  exports.prototype['signedUrl'] = undefined;
  /**
   * Value for expiration in minutes
   * @member {Date} expiration
   */
  exports.prototype['expiration'] = undefined;



  return exports;
}());


