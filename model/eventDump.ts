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
 */import { EventCategoryId } from './eventCategoryId';


export interface EventDump { 
    /**
     * If the event is accessible for free.
     */
    accessible_for_free?: boolean;
    /**
     * The minimum age that participants should be.
     */
    age_from?: number;
    /**
     * The maximum age that participants should be.
     */
    age_to?: number;
    /**
     * Choose how people can attend the event.
     */
    attendance_mode?: EventDump.AttendanceModeEnum;
    /**
     * If the event is booked up or sold out.
     */
    booked_up?: boolean;
    category_ids?: Array<EventCategoryId>;
    readonly created_at?: Date;
    /**
     * Description of the event
     */
    description?: string;
    /**
     * When the event will end. An event can last a maximum of 24 hours. If the event takes place regularly, enter when the first date will end.
     */
    end?: Date;
    /**
     * The estimated expected attendance.
     */
    expected_participants?: number;
    /**
     * A link to an external website containing more information about the event.
     */
    external_link?: string;
    readonly id?: number;
    /**
     * If the event is particularly suitable for children.
     */
    kid_friendly?: boolean;
    /**
     * A short, meaningful name for the event.
     */
    name: string;
    organization_id?: number;
    organizer_id?: number;
    photo_id?: number;
    place_id?: number;
    /**
     * When the event should have taken place before it was postponed.
     */
    previous_start_date?: Date;
    /**
     * Price information in textual form. E.g., different prices for adults and children.
     */
    price_info?: string;
    /**
     * If the event takes place regularly. Format: RFC 5545.
     */
    recurrence_rule?: string;
    /**
     * If the participants needs to register for the event.
     */
    registration_required?: boolean;
    /**
     * When the event will take place.  If the event takes place regularly, enter when the first date will begin.
     */
    start: Date;
    /**
     * Select the status of the event.
     */
    status?: EventDump.StatusEnum;
    /**
     * Comma separated keywords with which the event should be found. Words do not need to be entered if they are already in the name or description.
     */
    tags?: string;
    /**
     * Whether the event is particularly suitable for tourists or residents.
     */
    target_group_origin?: EventDump.TargetGroupOriginEnum;
    /**
     * A link where tickets can be purchased.
     */
    ticket_link?: string;
    readonly updated_at?: Date;
}
export namespace EventDump {
    export type AttendanceModeEnum = 'offline' | 'online' | 'mixed';
    export const AttendanceModeEnum = {
        Offline: 'offline' as AttendanceModeEnum,
        Online: 'online' as AttendanceModeEnum,
        Mixed: 'mixed' as AttendanceModeEnum
    };
    export type StatusEnum = 'scheduled' | 'cancelled' | 'movedOnline' | 'postponed' | 'rescheduled';
    export const StatusEnum = {
        Scheduled: 'scheduled' as StatusEnum,
        Cancelled: 'cancelled' as StatusEnum,
        MovedOnline: 'movedOnline' as StatusEnum,
        Postponed: 'postponed' as StatusEnum,
        Rescheduled: 'rescheduled' as StatusEnum
    };
    export type TargetGroupOriginEnum = 'both' | 'tourist' | 'resident';
    export const TargetGroupOriginEnum = {
        Both: 'both' as TargetGroupOriginEnum,
        Tourist: 'tourist' as TargetGroupOriginEnum,
        Resident: 'resident' as TargetGroupOriginEnum
    };
}