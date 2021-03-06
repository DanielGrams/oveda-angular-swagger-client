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
 */import { OrganizationListRef } from './organizationListRef';


export interface OrganizationListResponse { 
    /**
     * True if a next page exists.
     */
    has_next: boolean;
    /**
     * True if a previous page exists.
     */
    has_prev: boolean;
    /**
     * Organizations
     */
    items?: Array<OrganizationListRef>;
    /**
     * Number of the next page.
     */
    next_num?: number;
    /**
     * The current page number (1 indexed).
     */
    page: number;
    /**
     * The total number of pages.
     */
    pages: number;
    /**
     * Items per page
     */
    per_page: number;
    /**
     * Number of the previous page.
     */
    prev_num?: number;
    /**
     * The total number of items matching the query
     */
    total: number;
}