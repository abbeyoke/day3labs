Array.prototype.toTwenty = function(){
  a = 1;
  b = [];
  for(i=1; i<=20; i++){
    b.push(i);
  }
  return b
}

Array.prototype.toForty = function(){
  b = [];
  for(i=2; i<=40; i+=2){
    b.push(i);
  }
  return b
}

Array.prototype.toOneThousand = function(){
  b = [];
  for(i=10; i<=1000; i+=10){
    b.push(i);
  }
  return b
}


function binarySearch(value){
 // var this = [];
  //this = this.toTwenty();
  var startIndex  = 0,
  stopIndex = this.length - 1,
  middle = Math.floor((stopIndex + startIndex)/2);
  var count = 0;
  while(this[middle] != value && startIndex < stopIndex){
    count+=1;
    if (value < this[middle]){
      stopIndex = middle - 1;
    }else if (value > this[middle]){
      startIndex = middle + 1;
    }
    middle = Math.floor((stopIndex + startIndex)/2);
  } 
  var l = 0;
  l = this.length;
  var index = (this[middle] != value) ? -1 : middle;
  return ['index : ' + index, "count : " + count, "Length : "+ l]
}

module.exports = Array.prototype;


