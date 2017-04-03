'use strict';

const datez = require('date-utilz');
const om = require('output-manager'); // console logging
const O = new om.Out();
const fOut = new om.Out();
const fs = require('fs');
const os = require('os');

O.i('Starting...');

const start = () => {
    O.i('Setting up log to file');
    fOut.level = om.LogLevel.TRACE;
    fOut.output = (msg) => { /* do log to file */ ws.write(msg + os.EOL); };
    setTimeout(logSomeData, 1500);
}

const logSomeData = () => {
    O.i('Logging to file...');
    fOut.t('tracing');
    fOut.d('debugging');
    fOut.i('info-ing');
    fOut.w('warning');
    fOut.e('erroring');
    fOut.f('fatal-ing');
    O.i('Sleeping...');
    setTimeout(logSomeData, 500);
}

const ws = fs.createWriteStream('./' + datez.date().split('T')[0] + '.log');

O.i('Everything started...');

start();
