import { executeQuery } from '../../lib/mysqlDb'
import { ErrorFetch } from '../../model/ErrorFetch';

export const fetchEvent = async (eventId: string | undefined | string[]): Promise<string | ErrorFetch> => {
    const result = await executeQuery("SELECT * from events where Id = ?", [eventId])

    if (!result)
        return { status: 500, type: "Fetch error", message: "Error has occured while selecting types!" }

    return result;
}