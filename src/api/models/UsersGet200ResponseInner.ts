/* tslint:disable */
/* eslint-disable */
/**
 * Sample API
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 1.0.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { mapValues } from '../runtime';
/**
 * 
 * @export
 * @interface UsersGet200ResponseInner
 */
export interface UsersGet200ResponseInner {
    /**
     * 
     * @type {number}
     * @memberof UsersGet200ResponseInner
     */
    id?: number;
    /**
     * 
     * @type {string}
     * @memberof UsersGet200ResponseInner
     */
    name?: string;
}

/**
 * Check if a given object implements the UsersGet200ResponseInner interface.
 */
export function instanceOfUsersGet200ResponseInner(value: object): value is UsersGet200ResponseInner {
    return true;
}

export function UsersGet200ResponseInnerFromJSON(json: any): UsersGet200ResponseInner {
    return UsersGet200ResponseInnerFromJSONTyped(json, false);
}

export function UsersGet200ResponseInnerFromJSONTyped(json: any, ignoreDiscriminator: boolean): UsersGet200ResponseInner {
    if (json == null) {
        return json;
    }
    return {
        
        'id': json['id'] == null ? undefined : json['id'],
        'name': json['name'] == null ? undefined : json['name'],
    };
}

  export function UsersGet200ResponseInnerToJSON(json: any): UsersGet200ResponseInner {
      return UsersGet200ResponseInnerToJSONTyped(json, false);
  }

  export function UsersGet200ResponseInnerToJSONTyped(value?: UsersGet200ResponseInner | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'id': value['id'],
        'name': value['name'],
    };
}

