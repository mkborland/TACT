import { DateTime } from 'luxon';
function toDate(date, formatTemplate = 'dd LLL yyyy') {
    return DateTime.fromJSDate(date).toLocal().toUTC().toFormat(formatTemplate);
}
function toString(date, formatTemplate = 'yyyy LLL dd') {
    return DateTime.fromISO(date).toFormat(formatTemplate);
}
/**
 * A wrapper around date functions such that it can be used similarly to luxon's DateTime (although
 * with a custom API) -- allows us to replace luxon DateTime eventually with anything
 * (moment/Temporal/etc).
 */
export const DateTimeAdapter = {
    toDate,
    toString,
};
export { DateTime };