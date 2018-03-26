

let botao = document.querySelector('#busca');


//botao que aciona um evento
botao.addEventListener( 'click', function(){

    //capturando valor do cep
    let cep = document.querySelector('#cep').value;

    //pesquisando o cep digitado
    let api = `https://viacep.com.br/ws/${cep}/json/`;

    //estacia o objeto do tipo request
    let request = new XMLHttpRequest();
    request.open('GET' , api);

    request.onload = function(){

        //pegando a resposta e transformando em objeto
        let resposta = JSON.parse(request.responseText);

        //devolvendo no html
        let cep = document.querySelector('#cep');
        cep.innerHTML = resposta.cep;

        let local = document.querySelector('#logradouro');
        local.innerHTML = resposta.logradouro;

        let bairro = document.querySelector('#bairro');
        bairro.innerHTML = resposta.bairro;

        let uf = document.querySelector('#uf');
      uf.innerHTML = resposta.uf;

    };



    //envia a requisição
    request.send();
   

    console.log(cep);


} )