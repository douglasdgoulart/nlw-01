import path from 'path';

module.exports = {
    client: 'pg',
    connection: { 
        host:'127.0.0.1', 
        user:'localhost', 
        password:'localhost', 
        database:'localhost_test', 
        port: 5432
    },
    migrations: {
        directory: path.resolve(__dirname, 'src', 'database', 'migrations')
    },
    seeds: {
        directory: path.resolve(__dirname, 'src', 'database', 'seeds')
    },
    useNullAsDefault: true,
};
