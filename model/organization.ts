/**
 * Oveda API
 * This API provides endpoints to interact with the Oveda data.
 *
 * OpenAPI spec version: 0.1.0
 * 
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */import { Image } from './image';
import { Location } from './location';


export interface Organization { 
    created_at?: Date;
    email?: string;
    fax?: string;
    id?: number;
    location?: Location;
    logo?: Image;
    name?: string;
    phone?: string;
    short_name?: string;
    updated_at?: Date;
    url?: string;
}