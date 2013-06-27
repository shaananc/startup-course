var fs = require('fs');
var outfile = "prime.txt"

var n=2;

var cur =0;
var arr = [];

while(cur<100){
	var i;
	var notp = 0;
	for(i=n-2;i>1;i--){
		if(n%i == 0){
			notp=1;	
			break;
		}
	}
	if(notp==0){
		arr.push(n);
		cur++;
	}
	n++;
}

fs.writeFileSync(outfile,arr.join(","));
