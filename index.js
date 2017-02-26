'use strict';

const O = require('output-manager'); // console logging
const fs = require('fs');
const os = require('os');

O.i('Starting...');

const start = () => {
    O.i('Setting up log to file');
    O.level(O.LogLevel.TRACE);
    O.setLogger(function (msg) {
        // do log to file
        ws.write(msg + os.EOL);
    });
    setTimeout(logSomeData, 1500);
}

const logSomeData = () => {
    O.t('tracing');
    O.d('debugging');
    O.i('info-ing');
    O.w('warning');
    O.e('erroring');
    O.f('fatal-ing');
    setTimeout(logSomeData, 500);
}

const ws = fs.createWriteStream('./' + (new Date).toISOString().split('T')[0] + '.log');

O.i('Everything started...');

start();
