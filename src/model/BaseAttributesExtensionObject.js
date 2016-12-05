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
      JsonApiLink = require('./JsonApiLink');



  /**
   * The BaseAttributesExtensionObject model module.
   * @module model/BaseAttributesExtensionObject
   * @version 0.2.5
   */

   /**
    * Constructs a <code>BaseAttributesExtensionObject</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:model/BaseAttributesExtensionObject} obj Optional instance to populate.
    * @return {module:model/BaseAttributesExtensionObject} The populated <code>BaseAttributesExtensionObject</code> instance.
    */
  var constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
  
      if (data.hasOwnProperty('type')) {
        obj['type'] = ApiClient.convertToType(data['type'], 'String');
      }
      if (data.hasOwnProperty('version')) {
        obj['version'] = ApiClient.convertToType(data['version'], 'String');
      }
      if (data.hasOwnProperty('schema')) {
        obj['schema'] = JsonApiLink.constructFromObject(data['schema']);
      }
      if (data.hasOwnProperty('data')) {
        obj['data'] = ApiClient.convertToType(data['data'], Object);
      }
    }
    return obj;
  };

  /**
   * Constructs a new <code>BaseAttributesExtensionObject</code>.
   * @alias module:model/BaseAttributesExtensionObject
   * @class
   * @param type {String} 
   * @param version {String} 
   * @param schema {module:model/JsonApiLink} 
   * @param {Object} theData The plain JavaScript object bearing properties of interest.
   * @param {module:model/BaseAttributesExtensionObject} obj Optional instance to populate.
   */
  var exports = function(type, version, schema, theData, obj) {
    var _this = this;

    _this['type'] = type;
    _this['version'] = version;
    _this['schema'] = schema;


    return constructFromObject(theData, obj);
  };

  /**
   * Constructs a <code>BaseAttributesExtensionObject</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/BaseAttributesExtensionObject} obj Optional instance to populate.
   * @return {module:model/BaseAttributesExtensionObject} The populated <code>BaseAttributesExtensionObject</code> instance.
   */
  exports.constructFromObject = constructFromObject;

  /**
   * @member {String} type
   */
  exports.prototype['type'] = undefined;
  /**
   * @member {String} version
   */
  exports.prototype['version'] = undefined;
  /**
   * @member {module:model/JsonApiLink} schema
   */
  exports.prototype['schema'] = undefined;
  /**
   * @member {Object} data
   */
  exports.prototype['data'] = undefined;



  return exports;
}());


