document.getElementById('tema').onclick = function(){
    var txttema = document.getElementById('tema');
    if (txttema.innerHTML == 'Tema Oscuro'){
        document.body.style.backgroundColor =  '#1e32c9'
        txttema.innerHTML = 'Tema Claro'
    }else{
        document.body.style.backgroundColor =  '#a2a8d3'
        txttema.innerHTML = 'Tema Oscuro'
    }
}