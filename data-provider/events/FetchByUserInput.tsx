import { arrayBuffer } from 'stream/consumers';
import { executeQuery } from '../../lib/mysqlDb'
import { ErrorFetch } from '../../model/ErrorFetch';

export const fetchByUserInput = async (input: string | string[]): Promise<string[] | ErrorFetch> => {
    if(input.length < 1) {
        return [];
    }
    const normalizedSearchText = input.toString().toLowerCase();
    const wildcard = "'\%" + normalizedSearchText + "\%'";
    let query = "SELECT Description, Type, Title, DisplayLocation, Id FROM events WHERE `Title` LIKE " + wildcard + " OR `DisplayLocation` LIKE " + wildcard + " OR `Type` LIKE " + wildcard + "";
    
    const searchWords = normalizedSearchText.split(' ');
    for(let i = 1; i < searchWords.length; i++) {
        const wordWildcard = "'\%" + searchWords[i] + "\%'";
        query = query.concat(" OR `Title` LIKE " + wordWildcard);
        query = query.concat(" OR `Type` LIKE " + wordWildcard);
        query = query.concat(" OR `DisplayLocation` LIKE " + wordWildcard);
    }
    query = query.concat(";");
    const events = await executeQuery(query, []);

    if (!events)
        return { status: 500, type: "Fetch error", message: "Error has occured while selecting events by userInput!" }

    const rankedIndex = events.map((entry: any) => {
        let points = 0;

        if(entry.Title.toLowerCase().includes(" " + normalizedSearchText + " "))
            points += 100;

        if (entry.Title.toLowerCase().includes(normalizedSearchText))
            points += 50;

        if (entry.Type.toLowerCase().includes(normalizedSearchText))
            points += 24;

        if (entry.DisplayLocation.toLowerCase().includes(normalizedSearchText))
            points += 18;

        searchWords.forEach(element => {
            if(entry.Title.toLowerCase().includes(" " + element + " "))
                points += 50;

            if (entry.Title.toLowerCase().includes(element))
                points += 25;

            if (entry.Type.toLowerCase().includes(element))
                points += 12;

            if (entry.DisplayLocation.toLowerCase().includes(element))
                points += 9;
        });

        return { ...entry, points };
    }).sort((a: any, b : any) => b.points - a.points);

    return rankedIndex;
}