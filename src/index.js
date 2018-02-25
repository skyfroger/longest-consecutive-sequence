module.exports = function longestConsecutiveLength(array) {
  
  if(array.length < 2)
    return array.length;

  array.sort((x, y) => (x - y));

  var max = 0;
  var count = 0;

  for(var i = 1; i < array.length; i++){
    if(array[i] - array[i - 1] == 1){
      count++
    } else {
      count++;
      if(count > max && count != 1)
        max = count;
      count = 0;
    }
  }

  return max;
}
