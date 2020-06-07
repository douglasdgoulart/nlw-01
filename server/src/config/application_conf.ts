const yargs = require('yargs');

const argv = yargs
    .option('a', {
        alias: 'address',
        demandOption: true,
        description: 'Application local IP',
        type: 'string',
    })
    .help()
    .alias('help', 'h')
    .argv;

const host_ip = argv.address;

export default host_ip;
