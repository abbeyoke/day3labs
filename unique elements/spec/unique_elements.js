function findMissing (a1, a2) {
    var a = [], uni = [];
    for (var i = 0; i < a1.length; i++) {
        a[a1[i]] = true;
    }
    for (var i = 0; i < a2.length; i++) {
        if (a[a2[i]]) {
            delete a[a2[i]];
        } else {
            a[a2[i]] = true;
        }
    }
    for (var k in a) {
        uni.push(k);
    }
    if(uni.length === 0){
      return 0;
    }else if(uni.length === 1){
		return parseInt(uni[0]);;
	}else{
      return uni;
    }
}