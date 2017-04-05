/**
 * Copyright 2017 MaddHacker
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *    http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

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
