import mysql from 'serverless-mysql';

const db = mysql({
    config: {
        host: process.env.MYSQL_HOST,
        port: process.env.MYSQL_PORT as number | undefined,
        database: process.env.MYSQL_DATABASE,
        user: process.env.MYSQL_USER,
        password: process.env.MYSQL_PASSWORD
    }
});

export async function executeQuery({ query, values }: { query: string, values: any }) {
    try {
        const results = await db.query(query, values);
        await db.end();
        return JSON.parse(JSON.stringify(results));
    } catch (error) {
        console.log(error)
        return { error };
    }
}

export async function executeQueryParamless({ query }: { query: string }) {
    try {
        const results = await db.query(query);
        await db.end();
        return JSON.parse(JSON.stringify(results));
    } catch (error) {
        console.log(error)
        return { error };
    }
}