/**
 * Copyright 2017 IBM All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

const ConversationV1 = require('watson-developer-cloud/conversation/v1');

/**
 * Update entity value.
 *
 * @param {Object} params - The parameters to send to the service.
 * @param {string} [params.username] - required unless use_unauthenticated is set.
 * @param {string} [params.password] - required unless use_unauthenticated is set.
 * @param {Object} [params.headers]
 * @param {boolean} [params.headers.X-Watson-Learning-Opt-Out=false] - opt-out of data collection
 * @param {string} [params.url] - override default service base url
 * @param {string} params.version_date - Release date of the API version in YYYY-MM-DD format.
 * @param {string} params.workspace_id - The workspace ID.
 * @param {string} params.entity - The name of the entity.
 * @param {string} params.value - The text of the entity value.
 * @param {string} [params.new_value] - The text of the entity value.
 * @param {Object} [params.new_metadata] - Any metadata related to the entity value.
 * @param {string} [params.new_type] - Specifies the type of value (`synonyms` or `patterns`). The default value is `synonyms`.
 * @param {string[]} [params.new_synonyms] - An array of synonyms for the entity value.
 * @param {string[]} [params.new_patterns] - An array of patterns for the entity value. A pattern is specified as a regular expression.
 * @return {Promise} - The Promise that the action returns.
 */
function main(params) {
  return new Promise((resolve, reject) => {
    let service;
    try {
      service = new ConversationV1(params);
    } catch (err) {
      reject(err.message);
      return;
    }
    service.updateValue(params, (err, response) => {
      if (err) {
        reject(err.message);
      } else {
        resolve(response);
      }
    });
  });
}
module.exports.main = main;