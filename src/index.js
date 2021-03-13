
exports.min = function min (array) {
  return array == ''||array == undefined?0:((array[0] ==undefined)?0:array.sort((a, b) => a-b)[0]);
}

exports.max = function max (array) {
  return array == ''||array == undefined?0:((array[0] ==undefined)?0:array.sort((a, b) => a-b).pop());
}

exports.avg = function avg (array) {
  return array == ''||array == undefined?0:array.reduce((sum, e) => 	{return sum + e;}, 0)/(array.length);
}
