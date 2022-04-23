import { executeQuery } from '../../lib/mysqlDb'
import { ErrorFetch } from '../../model/ErrorFetch';

export const fetchEventTypes = async (): Promise<string[] | ErrorFetch> => {
    const locations = await executeQuery("SELECT Type from v_event_types;", [])

    if (!locations)
        return { status: 500, type: "Fetch error", message: "Error has occured while selecting types!" }

    const locs = locations.map((element: any) => {
        return element.Type
    });

    return locs;
}