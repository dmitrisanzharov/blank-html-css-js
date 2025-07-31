function adjustAllFleetFilters(query, offsetMinutes = new Date().getTimezoneOffset()) {
    // Regex to find any fleetReport_filter_* key with two ISO timestamps separated by a comma
    const regex = /(fleetReport_filter_[^=]+)=([\dTZ:.\-]+,[\dTZ:.\-]+)/g;

    // Check if there are any matches at all
    if (!regex.test(query)) {
        return query; // Nothing to adjust, return as-is
    }

    // Reset regex state for the replacement (since test() advances lastIndex on global regex)
    regex.lastIndex = 0;

    return query.replace(regex, (_, key, range) => {
        const [startStr, endStr] = range.split(',');

        const start = new Date(startStr);
        const end = new Date(endStr);

        const offsetMs = offsetMinutes * 60 * 1000;

        // Adjust both dates by offset (keep original hours/minutes)
        const newStart = new Date(start.getTime() - offsetMs);
        const newEnd = new Date(end.getTime() - offsetMs);

        return `${key}=${newStart.toISOString()},${newEnd.toISOString()}`;
    });
}

const query =
    'fleetReport_filter_status={"nrm":true,"other":false,"onRent":false,"available":false,"sold":false}&fleetReport_filter_current_location=DUBT01&fleetReport_filter_epm_due_off=2025-07-28T00:00:00.000Z,2025-07-28T23:59:59.999Z';
const adjustedQuery = adjustAllFleetFilters(query);
console.log(adjustedQuery);
