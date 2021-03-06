var Profilerz = require('../../index.js').Profiler(),
	utils = require('../../lib/utils');

var list = utils.numbers.uniqueList(1, 10000, 10000);
var args = [
	list
];

/**
 * Simple bubble sort implementation...
 *
 * @param  {Array} _list An unsorted array of numbers (hopefully)
 *
 * @return {Array}       a sorted array of number
 */
var bubble = function (_list) {
	'use strict';
	var temp;
	for (var i = 0, l = _list.length; i < l; i++) {
		for (var j = 0; j < (l - i - 1); j++) {
			if (_list[j] > _list[j + 1]) {
				temp = _list[j];
				_list[j] = _list[j + 1];
				_list[j + 1] = temp;
			}
		}
	}
	return _list;
};

Profilerz.speed(bubble, args, 20);
