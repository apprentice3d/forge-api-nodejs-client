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

module.exports = (function () {
    'use strict';

    var OAuth2 = require('./OAuth2');

    /**
     * @module auth/OAuth2ThreeLegged
     * @version 0.2.0
     */

    /**
     * Constructs a new <code>OAuth2ThreeLegged</code>.
     * Inherits from OAuth2
     * @alias module:auth/OAuth2ThreeLegged
     */
    var OAuth2ThreeLegged = function (clientId, clientSecret, redirectUri, scope) {

        this.authentication = {
            authorizationUrl: '/authentication/v1/authorize',
            tokenUrl: '/authentication/v1/gettoken',
            refreshTokenUrl: '/authentication/v1/refreshtoken',
            scopes: {
                'data:read':'The application will be able to read the end user’s data within the Autodesk ecosystem.',
                'data:write':'The application will be able to create, update, and delete data on behalf of the end user within the Autodesk ecosystem.',
                'data:create':'The application will be able to create data on behalf of the end user within the Autodesk ecosystem.',
                'data:search':'The application will be able to search the end user’s data within the Autodesk ecosystem.',
                'bucket:create':'The application will be able to create an OSS bucket it will own.',
                'bucket:read':'The application will be able to read the metadata and list contents for OSS buckets that it has access to.',
                'bucket:update':'The application will be able to set permissions and entitlements for OSS buckets that it has permission to modify.',
                'bucket:delete':'The application will be able to delete a bucket that it has permission to delete.',
                'code:all':'The application will be able to author and execute code on behalf of the end user (e.g., scripts processed by the Design Automation API).',
                'account:read':'For Product APIs, the application will be able to read the account data the end user has entitlements to.',
                'account:write':'For Product APIs, the application will be able to update the account data the end user has entitlements to.',
                'user-profile:read':'The application will be able to read the end user’s profile data.'
            }
        };

        this.authName = 'oauth2_access_code';
        
        OAuth2.call(this, clientId, clientSecret, scope, this.authentication.scopes);

        this.redirectUri = redirectUri;
    };

    // inherit from OAuth2 class
    OAuth2ThreeLegged.prototype = Object.create(OAuth2.prototype);

    // Set the "constructor" property to refer to OAuth2
    OAuth2ThreeLegged.prototype.constructor = OAuth2ThreeLegged;

    /**
     * Get Authorize URL
     */
    OAuth2ThreeLegged.prototype.generateAuthUrl = function () {
        if (this.authentication && this.authentication.authorizationUrl) {
            var redirectionUrl = this.basePath + this.authentication.authorizationUrl +
                '?response_type=code' +
                '&client_id=' + this.clientId +
                '&redirect_uri=' + this.redirectUri +
                '&scope=' + this.scope;

            return redirectionUrl;
        } else {
            return new Error('authorizationUrl is not defined in the authentication object');
        }


    };

    /**
     * Get a 3-legged access token
     * @param code - The code that needs to be exchanged to get the access token
     * @return Promise
     */
    OAuth2ThreeLegged.prototype.getToken = function (code) {
        var _this = this;
        return new Promise(function(resolve, reject) {
            if (_this.authentication && _this.authentication.tokenUrl) {
                var url = _this.basePath + _this.authentication.tokenUrl;

                var body = {
                    grant_type: 'authorization_code',
                    client_id: _this.clientId,
                    client_secret: _this.clientSecret,
                    code: code,
                    response_type: 'code',
                    redirect_uri: _this.redirectUri
                };

                _this.doPostRequest(url, body, function(response){
                    // add expires_at property
                    var credentials = Object.assign({}, response,
                        {expires_at: new Date(Date.now() + response.expires_in * 1000)});
                    resolve(credentials);
                }, function(errResponse){
                    reject(errResponse);
                });
            } else {
                reject(new Error('tokenUrl is not defined in the authentication object'));
            }
        });

    };


    /**
     * Refresh a 3-legged token
     * @param credentials
     * @return Promise
     */
    OAuth2ThreeLegged.prototype.refreshToken = function (credentials){
        var _this = this;
        return new Promise(function(resolve, reject) {
            if (_this.authentication && _this.authentication.refreshTokenUrl) {
                if (credentials && credentials.refresh_token) {
                    var url = _this.basePath + _this.authentication.refreshTokenUrl;

                    var body = {
                        grant_type: 'refresh_token',
                        client_id: _this.clientId,
                        client_secret: _this.clientSecret,
                        refresh_token: credentials.refresh_token
                    };

                    _this.doPostRequest(url, body, function(response){
                        if (response.access_token) {
                            var credentials = Object.assign({}, response,
                                {expires_at: new Date(Date.now() + response.expires_in * 1000)});
                            _this.credentials = credentials;
                            resolve(credentials);
                        } else {
                            reject(response);
                        }
                    }, function(errResponse){
                        reject(errResponse);
                    });
                } else {
                    reject(new Error('No refresh token present'));
                }
            } else {
                reject(new Error('refreshTokenUrl is not defined in the authentication object'));
            }
        });
    };

    return OAuth2ThreeLegged;
}());
