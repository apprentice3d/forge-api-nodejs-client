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
      BaseAttributesCreatedUpdated = require('./BaseAttributesCreatedUpdated'),
      JsonApiDocument = require('./JsonApiDocument'),
      JsonApiLinks = require('./JsonApiLinks'),
      JsonApiMeta = require('./JsonApiMeta'),
      JsonApiResource = require('./JsonApiResource'),
      JsonApiVersionJsonapi = require('./JsonApiVersionJsonapi'),
      VersionAttributes = require('./VersionAttributes'),
      VersionRelationships = require('./VersionRelationships');



  /**
   * The Version model module.
   * @module model/Version
   * @version 0.2.5
   */

   /**
    * Constructs a <code>Version</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:model/Version} obj Optional instance to populate.
    * @return {module:model/Version} The populated <code>Version</code> instance.
    */
  var constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
  
        JsonApiDocument.constructFromObject(data, obj);
        JsonApiResource.constructFromObject(data, obj);
        BaseAttributesCreatedUpdated.constructFromObject(data, obj);
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
        obj['links'] = JsonApiLinks.constructFromObject(data['links']);
      }
      if (data.hasOwnProperty('id')) {
        obj['id'] = ApiClient.convertToType(data['id'], 'String');
      }
      if (data.hasOwnProperty('type')) {
        obj['type'] = ApiClient.convertToType(data['type'], 'String');
      }
      if (data.hasOwnProperty('attributes')) {
        obj['attributes'] = VersionAttributes.constructFromObject(data['attributes']);
      }
      if (data.hasOwnProperty('meta')) {
        obj['meta'] = JsonApiMeta.constructFromObject(data['meta']);
      }
      if (data.hasOwnProperty('relationships')) {
        obj['relationships'] = VersionRelationships.constructFromObject(data['relationships']);
      }
    }
    return obj;
  };

  /**
   * Constructs a new <code>Version</code>.
   * @alias module:model/Version
   * @class
   * @implements module:model/JsonApiDocument
   * @implements module:model/JsonApiResource
   * @implements module:model/BaseAttributesCreatedUpdated
   * @param data {module:model/JsonApiResource} 
   * @param links {module:model/JsonApiLinks} 
   * @param id {String} resource id
   * @param type {module:model/Version.TypeEnum} 
   * @param {Object} theData The plain JavaScript object bearing properties of interest.
   * @param {module:model/Version} obj Optional instance to populate.
   */
  var exports = function(data, links, id, type, theData, obj) {
    var _this = this;

    JsonApiDocument.call(_this, data, links);
    JsonApiResource.call(_this, id, type);
    BaseAttributesCreatedUpdated.call(_this);

    _this['data'] = data;

    _this['links'] = links;
    _this['id'] = id;
    _this['type'] = type;




    return constructFromObject(theData, obj);
  };

  /**
   * Constructs a <code>Version</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/Version} obj Optional instance to populate.
   * @return {module:model/Version} The populated <code>Version</code> instance.
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
   * @member {module:model/JsonApiLinks} links
   */
  exports.prototype['links'] = undefined;
  /**
   * resource id
   * @member {String} id
   */
  exports.prototype['id'] = undefined;
  /**
   * @member {module:model/Version.TypeEnum} type
   */
  exports.prototype['type'] = undefined;
  /**
   * @member {module:model/VersionAttributes} attributes
   */
  exports.prototype['attributes'] = undefined;
  /**
   * @member {module:model/JsonApiMeta} meta
   */
  exports.prototype['meta'] = undefined;
  /**
   * @member {module:model/VersionRelationships} relationships
   */
  exports.prototype['relationships'] = undefined;

  // Implement JsonApiDocument interface:
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

  // Implement JsonApiResource interface:
  /**
   * resource id
   * @member {String} id
   */
exports.prototype['id'] = undefined;

  /**
   * resource type
   * @member {String} type
   */
exports.prototype['type'] = undefined;

  /**
   * @member {module:model/JsonApiAttributes} attributes
   */
exports.prototype['attributes'] = undefined;

  /**
   * @member {module:model/JsonApiMeta} meta
   */
exports.prototype['meta'] = undefined;

  /**
   * @member {module:model/JsonApiRelationships} relationships
   */
exports.prototype['relationships'] = undefined;

  /**
   * @member {module:model/JsonApiLinks} links
   */
exports.prototype['links'] = undefined;

  // Implement BaseAttributesCreatedUpdated interface:
  /**
   * @member {module:model/BaseAttributesCreatedUpdatedAttributes} attributes
   */
exports.prototype['attributes'] = undefined;


  /**
   * Allowed values for the <code>type</code> property.
   * @enum {String}
   * @readonly
   */
  exports.TypeEnum = {
    /**
     * value: "versions"
     * @const
     */
    "versions": "versions"  };


  return exports;
}());


