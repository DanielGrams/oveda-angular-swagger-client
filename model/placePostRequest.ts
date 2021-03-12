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
 */

export interface PlacePostRequest { 
    readonly created_at?: Date;
    description?: string;
    location?: any;
    name: string;
    readonly updated_at?: Date;
    url?: string;
}