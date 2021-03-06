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

/**
* The Stat model module.
* @module model/Stat
* @version 1.0.0
*/
export default class Stat {
    /**
    * Constructs a new <code>Stat</code>.
    * @alias module:model/Stat
    * @class
    */

    constructor() {
        
        
        
    }

    /**
    * Constructs a <code>Stat</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:model/Stat} obj Optional instance to populate.
    * @return {module:model/Stat} The populated <code>Stat</code> instance.
    */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new Stat();
                        
            
            if (data.hasOwnProperty('type')) {
                obj['type'] = ApiClient.convertToType(data['type'], 'String');
            }
            if (data.hasOwnProperty('composition')) {
                obj['composition'] = ApiClient.convertToType(data['composition'], 'String');
            }
        }
        return obj;
    }

    /**
    * @member {module:model/Stat.TypeEnum} type
    */
    'type' = undefined;
    /**
    * @member {module:model/Stat.CompositionEnum} composition
    */
    'composition' = undefined;



    /**
    * Allowed values for the <code>type</code> property.
    * @enum {String}
    * @readonly
    */
    static TypeEnum = {
        /**
         * value: "centroid"
         * @const
         */
        "centroid": "centroid",
        /**
         * value: "confidence"
         * @const
         */
        "confidence": "confidence",
        /**
         * value: "crest"
         * @const
         */
        "crest": "crest",
        /**
         * value: "duration"
         * @const
         */
        "duration": "duration",
        /**
         * value: "flatness"
         * @const
         */
        "flatness": "flatness",
        /**
         * value: "harmonicity"
         * @const
         */
        "harmonicity": "harmonicity",
        /**
         * value: "kurtosis"
         * @const
         */
        "kurtosis": "kurtosis",
        /**
         * value: "loudness"
         * @const
         */
        "loudness": "loudness",
        /**
         * value: "peak"
         * @const
         */
        "peak": "peak",
        /**
         * value: "peakharm"
         * @const
         */
        "peakharm": "peakharm",
        /**
         * value: "pitch"
         * @const
         */
        "pitch": "pitch",
        /**
         * value: "rolloff"
         * @const
         */
        "rolloff": "rolloff",
        /**
         * value: "skewness"
         * @const
         */
        "skewness": "skewness",
        /**
         * value: "spread"
         * @const
         */
        "spread": "spread"    };
    /**
    * Allowed values for the <code>composition</code> property.
    * @enum {String}
    * @readonly
    */
    static CompositionEnum = {
        /**
         * value: "mean"
         * @const
         */
        "mean": "mean",
        /**
         * value: "stddev"
         * @const
         */
        "stddev": "stddev",
        /**
         * value: "skew"
         * @const
         */
        "skew": "skew",
        /**
         * value: "kurtosis"
         * @const
         */
        "kurtosis": "kurtosis",
        /**
         * value: "min"
         * @const
         */
        "min": "min",
        /**
         * value: "median"
         * @const
         */
        "median": "median",
        /**
         * value: "max"
         * @const
         */
        "max": "max",
        /**
         * value: "dmean"
         * @const
         */
        "dmean": "dmean",
        /**
         * value: "dstddev"
         * @const
         */
        "dstddev": "dstddev",
        /**
         * value: "dskew"
         * @const
         */
        "dskew": "dskew",
        /**
         * value: "dkurtosis"
         * @const
         */
        "dkurtosis": "dkurtosis",
        /**
         * value: "dmin"
         * @const
         */
        "dmin": "dmin",
        /**
         * value: "dmedian"
         * @const
         */
        "dmedian": "dmedian",
        /**
         * value: "dmax"
         * @const
         */
        "dmax": "dmax",
        /**
         * value: "none"
         * @const
         */
        "none": "none",
        /**
         * value: "value"
         * @const
         */
        "value": "value"    };

}
