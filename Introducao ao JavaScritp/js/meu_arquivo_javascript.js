var p = document.getElementById('id_p');
console.log(p);

window.onload = function() {
    
    // Localiza o elemento com id "id_p" e armazena na variável p
    var p = document.getElementById('id_p');

    // Altera o conteúdo do elemento p
    p.style.backgroundColor = 'red';
    
    // Exibe o conteúdo do elemento p no console
    console.log(p);

    
    // Localiza os elementos a (links) dentro de P, e armazena em links
    var links = document.getElementsByTagName('a');
    alert(links[0].href);

}
