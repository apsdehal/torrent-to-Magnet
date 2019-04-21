#!/usr/bin/env node
var readTorrent = require('./index.js');
var path = require('path');

if (!process.argv[2]) {
	console.error('Usage: ' + path.basename(process.argv[1]) + ' url');
	process.exit(1);
}

readTorrent(process.argv[2], function(err, uri) {
	if (!!err) {
		console.error(err);
		process.exit(1);
	}
	console.log(uri);
});