import { executeQuery } from '../../lib/mysqlDb'
import { ErrorFetch } from '../../model/ErrorFetch';

export const fetchMostPopular = async (): Promise<string[] | ErrorFetch> => {
    const mostPopular = await executeQuery("SELECT * from events ORDER BY Popularity DESC LIMIT 16;", [])

    if (!mostPopular)
        return { status: 500, type: "Fetch error", message: "Error has occured while selecting types!" }

    return mostPopular;
}