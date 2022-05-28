function createFor(Symbol,long,cb){ 
	
	var a = Symbol.split('')
	var f=''
	var f1=''
	var ni=''
	var fc=''


	for (var i = 0; i < long; i++) {
		f +=  'for(var i'+i+' = 0; i'+i+' < a.length; i'+i+'++){'
		if(i>0){ ni += '+'}
		ni += 'a[i'+i+']'
		f1 += '}'
	}
	fc = f+cb+'('+ni+')'+f1
	eval(fc)
}


function go(s){
	document.querySelector('#lib').innerHTML += s+' '
}



function start(){
	let Symbol = document.querySelector('#symbol').value
  	let long = document.querySelector('#long').value
  	let start = new Date();
	createFor(Symbol,long,'go') 
  	let time = new Date() - start;
	document.querySelector('#speed').innerHTML = 'Выполненно за: '+time+' ms'
}