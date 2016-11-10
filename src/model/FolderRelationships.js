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
      JsonApiRelationshipsLinksInternal = require('./JsonApiRelationshipsLinksInternal'),
      JsonApiRelationshipsLinksInternalResource = require('./JsonApiRelationshipsLinksInternalResource'),
      JsonApiRelationshipsLinksRefs = require('./JsonApiRelationshipsLinksRefs');



  /**
   * The FolderRelationships model module.
   * @module model/FolderRelationships
   * @version 0.2.0
   */

   /**
    * Constructs a <code>FolderRelationships</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:model/FolderRelationships} obj Optional instance to populate.
    * @return {module:model/FolderRelationships} The populated <code>FolderRelationships</code> instance.
    */
  var constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
  
      if (data.hasOwnProperty('parent')) {
        obj['parent'] = JsonApiRelationshipsLinksInternalResource.constructFromObject(data['parent']);
      }
      if (data.hasOwnProperty('contents')) {
        obj['contents'] = JsonApiRelationshipsLinksInternal.constructFromObject(data['contents']);
      }
      if (data.hasOwnProperty('refs')) {
        obj['refs'] = JsonApiRelationshipsLinksRefs.constructFromObject(data['refs']);
      }
    }
    return obj;
  };

  /**
   * Constructs a new <code>FolderRelationships</code>.
   * @alias module:model/FolderRelationships
   * @class
   * @param contents {module:model/JsonApiRelationshipsLinksInternal} 
   * @param refs {module:model/JsonApiRelationshipsLinksRefs} 
   * @param {Object} theData The plain JavaScript object bearing properties of interest.
   * @param {module:model/FolderRelationships} obj Optional instance to populate.
   */
  var exports = function(contents, refs, theData, obj) {
    var _this = this;


    _this['contents'] = contents;
    _this['refs'] = refs;

    return constructFromObject(theData, obj);
  };

  /**
   * Constructs a <code>FolderRelationships</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/FolderRelationships} obj Optional instance to populate.
   * @return {module:model/FolderRelationships} The populated <code>FolderRelationships</code> instance.
   */
  exports.constructFromObject = constructFromObject;

  /**
   * @member {module:model/JsonApiRelationshipsLinksInternalResource} parent
   */
  exports.prototype['parent'] = undefined;
  /**
   * @member {module:model/JsonApiRelationshipsLinksInternal} contents
   */
  exports.prototype['contents'] = undefined;
  /**
   * @member {module:model/JsonApiRelationshipsLinksRefs} refs
   */
  exports.prototype['refs'] = undefined;



  return exports;
}());


