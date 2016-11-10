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
      ManifestDerivative = require('./ManifestDerivative');



  /**
   * The Manifest model module.
   * @module model/Manifest
   * @version 0.2.0
   */

   /**
    * Constructs a <code>Manifest</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:model/Manifest} obj Optional instance to populate.
    * @return {module:model/Manifest} The populated <code>Manifest</code> instance.
    */
  var constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
  
      if (data.hasOwnProperty('urn')) {
        obj['urn'] = ApiClient.convertToType(data['urn'], 'String');
      }
      if (data.hasOwnProperty('type')) {
        obj['type'] = ApiClient.convertToType(data['type'], 'String');
      }
      if (data.hasOwnProperty('progress')) {
        obj['progress'] = ApiClient.convertToType(data['progress'], 'String');
      }
      if (data.hasOwnProperty('status')) {
        obj['status'] = ApiClient.convertToType(data['status'], 'String');
      }
      if (data.hasOwnProperty('hasThumbnail')) {
        obj['hasThumbnail'] = ApiClient.convertToType(data['hasThumbnail'], 'Boolean');
      }
      if (data.hasOwnProperty('region')) {
        obj['region'] = ApiClient.convertToType(data['region'], 'String');
      }
      if (data.hasOwnProperty('derivatives')) {
        obj['derivatives'] = ApiClient.convertToType(data['derivatives'], [ManifestDerivative]);
      }
    }
    return obj;
  };

  /**
   * Constructs a new <code>Manifest</code>.
   * @alias module:model/Manifest
   * @class
   * @param urn {String} The Base64 (URL safe) encoded source file URN
   * @param type {String} Type of this JSON object
   * @param progress {String} Overall progress for all translation jobs in the manifest. Possible values are: `complete` or `##%` 
   * @param status {String} Overall status for translation jobs in the “manifest”. Possible values are: `pending`, `success`, `inprogress`, `failed` and `timeout` 
   * @param hasThumbnail {Boolean} Indicates if a thumbnail has been generated for the source file URN
   * @param derivatives {Array.<module:model/ManifestDerivative>} Requested output files for the source file URN
   * @param {Object} theData The plain JavaScript object bearing properties of interest.
   * @param {module:model/Manifest} obj Optional instance to populate.
   */
  var exports = function(urn, type, progress, status, hasThumbnail, derivatives, theData, obj) {
    var _this = this;

    _this['urn'] = urn;
    _this['type'] = type;
    _this['progress'] = progress;
    _this['status'] = status;
    _this['hasThumbnail'] = hasThumbnail;

    _this['derivatives'] = derivatives;

    return constructFromObject(theData, obj);
  };

  /**
   * Constructs a <code>Manifest</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/Manifest} obj Optional instance to populate.
   * @return {module:model/Manifest} The populated <code>Manifest</code> instance.
   */
  exports.constructFromObject = constructFromObject;

  /**
   * The Base64 (URL safe) encoded source file URN
   * @member {String} urn
   */
  exports.prototype['urn'] = undefined;
  /**
   * Type of this JSON object
   * @member {String} type
   */
  exports.prototype['type'] = undefined;
  /**
   * Overall progress for all translation jobs in the manifest. Possible values are: `complete` or `##%` 
   * @member {String} progress
   */
  exports.prototype['progress'] = undefined;
  /**
   * Overall status for translation jobs in the “manifest”. Possible values are: `pending`, `success`, `inprogress`, `failed` and `timeout` 
   * @member {String} status
   */
  exports.prototype['status'] = undefined;
  /**
   * Indicates if a thumbnail has been generated for the source file URN
   * @member {Boolean} hasThumbnail
   */
  exports.prototype['hasThumbnail'] = undefined;
  /**
   * Region 
   * @member {String} region
   */
  exports.prototype['region'] = undefined;
  /**
   * Requested output files for the source file URN
   * @member {Array.<module:model/ManifestDerivative>} derivatives
   */
  exports.prototype['derivatives'] = undefined;



  return exports;
}());


