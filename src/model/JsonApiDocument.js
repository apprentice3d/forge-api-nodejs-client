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

  var ApiClient = require('../ApiClient'),
      JsonApiDocumentBase = require('./JsonApiDocumentBase'),
      JsonApiLinksSelf = require('./JsonApiLinksSelf'),
      JsonApiResource = require('./JsonApiResource'),
      JsonApiVersionJsonapi = require('./JsonApiVersionJsonapi');



  /**
   * The JsonApiDocument model module.
   * @module model/JsonApiDocument
   * @version 0.2.5
   */

   /**
    * Constructs a <code>JsonApiDocument</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:model/JsonApiDocument} obj Optional instance to populate.
    * @return {module:model/JsonApiDocument} The populated <code>JsonApiDocument</code> instance.
    */
  var constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
  
        JsonApiDocumentBase.constructFromObject(data, obj);
      if (data.hasOwnProperty('jsonapi')) {
        obj['jsonapi'] = JsonApiVersionJsonapi.constructFromObject(data['jsonapi']);
      }
      if (data.hasOwnProperty('data')) {
        obj['data'] = JsonApiResource.constructFromObject(data['data']);
      }
      if (data.hasOwnProperty('included')) {
        obj['included'] = ApiClient.convertToType(data['included'], [JsonApiResource]);
      }
      if (data.hasOwnProperty('links')) {
        obj['links'] = JsonApiLinksSelf.constructFromObject(data['links']);
      }
    }
    return obj;
  };

  /**
   * Constructs a new <code>JsonApiDocument</code>.
   * @alias module:model/JsonApiDocument
   * @class
   * @implements module:model/JsonApiDocumentBase
   * @param data {module:model/JsonApiResource} 
   * @param links {module:model/JsonApiLinksSelf} 
   * @param {Object} theData The plain JavaScript object bearing properties of interest.
   * @param {module:model/JsonApiDocument} obj Optional instance to populate.
   */
  var exports = function(data, links, theData, obj) {
    var _this = this;

    JsonApiDocumentBase.call(_this, data);

    _this['data'] = data;

    _this['links'] = links;

    return constructFromObject(theData, obj);
  };

  /**
   * Constructs a <code>JsonApiDocument</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/JsonApiDocument} obj Optional instance to populate.
   * @return {module:model/JsonApiDocument} The populated <code>JsonApiDocument</code> instance.
   */
  exports.constructFromObject = constructFromObject;

  /**
   * @member {module:model/JsonApiVersionJsonapi} jsonapi
   */
  exports.prototype['jsonapi'] = undefined;
  /**
   * @member {module:model/JsonApiResource} data
   */
  exports.prototype['data'] = undefined;
  /**
   * @member {Array.<module:model/JsonApiResource>} included
   */
  exports.prototype['included'] = undefined;
  /**
   * @member {module:model/JsonApiLinksSelf} links
   */
  exports.prototype['links'] = undefined;

  // Implement JsonApiDocumentBase interface:
  /**
   * @member {module:model/JsonApiVersionJsonapi} jsonapi
   */
exports.prototype['jsonapi'] = undefined;

  /**
   * @member {module:model/JsonApiResource} data
   */
exports.prototype['data'] = undefined;

  /**
   * @member {Array.<module:model/JsonApiResource>} included
   */
exports.prototype['included'] = undefined;



  return exports;
}());


