import knex from 'knex';

const connection =  knex({
    client: 'pg',
    connection: { 
        host:'127.0.0.1', 
        user:'localhost', 
        password:'localhost', 
        database:'localhost_test', 
        port: 5432},
  });

export default connection;
