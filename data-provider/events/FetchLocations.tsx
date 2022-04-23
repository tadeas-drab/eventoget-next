import { executeQuery } from '../../lib/mysqlDb'
import { ErrorFetch } from '../../model/ErrorFetch';

export const fetchLocations = async (): Promise<string[] | ErrorFetch> => {
    const locations = await executeQuery("SELECT DisplayLocation as DP from v_event_locations_names;", [])

    if (!locations)
        return { status: 500, type: "Fetch error", message: "Error has occured while selecting locations!" }

    const locs = locations.map((element: any) => {
        return element.DP
    });

    return locs;
}