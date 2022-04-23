import { executeQuery } from '../../lib/mysqlDb'

export const fetchLocations = async () => {
    return executeQuery("SELECT * from v_event_locations_names;", []);
}