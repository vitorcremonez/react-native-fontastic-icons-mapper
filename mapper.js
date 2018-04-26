var inputFile = null;
var outputFolder = null;
var outputFileName = 'mapped_font_names';
process.argv.forEach((arg, index) => {
	if (arg === '--input-file' || arg === '-i') {
		inputFile = process.argv[index+1];
	}
	if (arg === '--output-folder' || arg === '-o') {
		outputFolder = process.argv[index+1];
	}
});


var parser = require('xml2json');
var fs = require('fs');

function readFile(input, callback = null, callbackError = null) {
	fs.readFile(input, {encoding: 'utf-8'}, (error, data) => {
		if (error) {
			if (callbackError) callbackError(error);
		} else {
			if (callback) callback(data);
		}
	});
}

function writeFile(output, data, callback = null, callbackError = null) {
	fs.writeFile(
		output,
		data,
		(error) => {
			if (error) {
				if (callbackError) callbackError(error);
			} else {
				if (callback) callback();
			}
		}
	);
}

readFile(
	inputFile,
	(data) => {
		var svg = data;
		var json = JSON.parse(parser.toJson(svg));
		var jsonIcons = {};
		json.svg.defs.font.glyph.map((glyph) => {
			jsonIcons[glyph['glyph-name']]= glyph['unicode'];
		});
		writeFile(
			outputFolder + outputFileName + ".json",
			JSON.stringify(jsonIcons),
			() => {
				console.log("The mapped file was generated and saved into " + outputFolder + outputFileName + ".json file!");
			},
			(error) => {
				console.log('Error writing file!', error);
			}
		);
	},
	(error) => {
		console.log('Error reading file!', error);
	}
);

