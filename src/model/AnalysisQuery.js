/**
 * Interactive Spectral Exploration
 * No description provided (generated by Swagger Codegen https://github.com/swagger-api/swagger-codegen)
 *
 * OpenAPI spec version: 1.0.0
 * 
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';
import MetaFilter from './MetaFilter';
import Stat from './Stat';
import StatFilter from './StatFilter';

/**
* The AnalysisQuery model module.
* @module model/AnalysisQuery
* @version 1.0.0
*/
export default class AnalysisQuery {
    /**
    * Constructs a new <code>AnalysisQuery</code>.
    * @alias module:model/AnalysisQuery
    * @class
    */

    constructor() {
        
        
        
    }

    /**
    * Constructs a <code>AnalysisQuery</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:model/AnalysisQuery} obj Optional instance to populate.
    * @return {module:model/AnalysisQuery} The populated <code>AnalysisQuery</code> instance.
    */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new AnalysisQuery();
                        
            
            if (data.hasOwnProperty('stats')) {
                obj['stats'] = ApiClient.convertToType(data['stats'], [StatFilter]);
            }
            if (data.hasOwnProperty('meta')) {
                obj['meta'] = ApiClient.convertToType(data['meta'], [MetaFilter]);
            }
            if (data.hasOwnProperty('x')) {
                obj['x'] = Stat.constructFromObject(data['x']);
            }
            if (data.hasOwnProperty('y')) {
                obj['y'] = Stat.constructFromObject(data['y']);
            }
            if (data.hasOwnProperty('z')) {
                obj['z'] = Stat.constructFromObject(data['z']);
            }
            if (data.hasOwnProperty('includeMeta')) {
                obj['includeMeta'] = ApiClient.convertToType(data['includeMeta'], ['String']);
            }
            if (data.hasOwnProperty('limit')) {
                obj['limit'] = ApiClient.convertToType(data['limit'], 'Number');
            }
        }
        return obj;
    }

    /**
    * @member {Array.<module:model/StatFilter>} stats
    */
    'stats' = undefined;
    /**
    * @member {Array.<module:model/MetaFilter>} meta
    */
    'meta' = undefined;
    /**
    * @member {module:model/Stat} x
    */
    'x' = undefined;
    /**
    * @member {module:model/Stat} y
    */
    'y' = undefined;
    /**
    * @member {module:model/Stat} z
    */
    'z' = undefined;
    /**
    * @member {Array.<String>} includeMeta
    */
    'includeMeta' = undefined;
    /**
    * @member {Number} limit
    * @default 100
    */
    'limit' = 100;




}