function createFor(d,q,cb){ 
	
	var a = d.split('')
	var f=''
	var f1=''
	var ni=''
	var fc=''


	for (var i = 0; i < q; i++) {
		f +=  'for(var i'+i+' = 0; i'+i+' < a.length; i'+i+'++){'
		if(i>0){ ni += '+'}
		ni += 'a[i'+i+']'
		f1 += '}'
	}
	fc = f+cb+'('+ni+')'+f1
	eval(fc)
}

function testar(s){
	console.log(s)
}


function testar2(s){
	document.querySelector('#lib').innerHTML += s+' '
}



function botao(){
	let dic = document.querySelector('#dicionario').value
  	let qc = document.querySelector('#quantidade').value

  	let start = new Date();
  	
  	createFor(dic,qc,'testar2')
  	
  	let time = new Date() - start;
	document.querySelector('#speed').innerHTML = 'Выполненно за: '+time+' ms'
}