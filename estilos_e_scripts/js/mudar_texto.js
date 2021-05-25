secao_1 = document.getElementById('sec1');
paragrafo = document.getElementById('p1');
botao_1 = document.getElementById('b1');
botao_2 = document.getElementById('b2');
botao_1.onclick = function(){
	paragrafo.style.backgroundColor = 'black';
	paragrafo.style.color = 'white';
}

botao_2.onclick = function(){
	paragrafo_novo = document.createElement('p');
	paragrafo_novo.textContent = 'bla bla bla';
	secao_1.appendChild(paragrafo_novo);
}


