import pg from 'pg';

const client = new pg.Client({
    user: 'root',
    database: 'postgres',
    password: 'root',
    host: 'localhost',
    port: 5432,
});

client.connect(function (err) {
    if (err) throw err;
    console.log('Database: PostgreSQL has connected');
});

export default client;