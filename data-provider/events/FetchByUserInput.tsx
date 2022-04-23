import { executeQuery } from '../../lib/mysqlDb'
import { ErrorFetch } from '../../model/ErrorFetch';

export const fetchByUserInput = async (input: string | string[]): Promise<string[] | ErrorFetch> => {
    const normalizedSearchText = input.toString().toLowerCase();
    const wildcard = "\%" + normalizedSearchText + "\%";
    const events = await executeQuery("SELECT Type, Title, DisplayLocation, Id FROM v_events_light WHERE Type LIKE ? OR Title LIKE ? OR DisplayLocation LIKE ?;", [ wildcard, wildcard, wildcard ])

    if (!events)
        return { status: 500, type: "Fetch error", message: "Error has occured while selecting events by userInput!" }

    const rankedIndex = events.map((entry: any) => {
        let points = 0;

        if(entry.Title.toLowerCase().includes(" " + normalizedSearchText + " "))
            points += 20;

        if (entry.Title.toLowerCase().includes(normalizedSearchText))
            points += 10;

        if (entry.Type.toLowerCase().includes(normalizedSearchText))
            points += 5;

        if (entry.DisplayLocation.toLowerCase().includes(normalizedSearchText))
            points += 3;

        return { ...entry, points };
    }).sort((a: any, b : any) => b.points - a.points);

    return rankedIndex;
}