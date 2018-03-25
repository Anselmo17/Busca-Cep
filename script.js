

let botao = document.querySelector('#busca');

botao.addEventListener( 'click', function(){

    let cep = document.querySelector('#cep').value;

    let api = `https://viacep.com.br/ws/${cep}/json/`;

    //estacia o objeto do tipo request
    let request = new XMLHttpRequest();
    request.open('GET' , api);

    //envia a requisição
    request.send();
   

    console.log(cep);


} )