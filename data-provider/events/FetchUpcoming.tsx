import { executeQuery } from '../../lib/mysqlDb'
import { ErrorFetch } from '../../model/ErrorFetch';

export const fetchUpcoming = async (): Promise<string[] | ErrorFetch> => {
    const upcoming = await executeQuery("SELECT * from events WHERE StartDate > CURRENT_TIMESTAMP ORDER BY StartDate ASC LIMIT 16;", [])

    if (!upcoming)
        return { status: 500, type: "Fetch error", message: "Error has occured while selecting types!" }

    return upcoming;
}