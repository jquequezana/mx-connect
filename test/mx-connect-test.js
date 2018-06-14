/* eslint no-console: 0*/

'use strict';

const mxConnect = require('../lib/mx-connect');

module.exports.basic = test => {
    mxConnect('kreata.ee', (err, connection) => {
        test.ifError(err);
        test.ok(connection.socket);
        connection.socket.once('end', () => test.done());
        connection.socket.once('data', () => connection.socket.end());
    });
};

module.exports.address = test => {
    mxConnect('andris@kreata.ee', (err, connection) => {
        test.ifError(err);
        test.ok(connection.socket);
        connection.socket.once('end', () => test.done());
        connection.socket.once('data', () => connection.socket.end());
    });
};

/*
module.exports.freebind = test => {
    mxConnect({
        target: 'kreata.ee',
        localAddress: 'ip:v6:addr',
        dnsOptions: {
            ignoreIPv6: false,
            preferIPv6: true,
            blockLocalAddresses: false
        }
    }, (err, connection) => {
        test.ifError(err);
        test.ok(connection.socket);
        connection.socket.once('end', () => test.done());
        connection.socket.once('data', () => connection.socket.end());
    });
};
*/
