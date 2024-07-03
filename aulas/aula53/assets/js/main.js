const elementos = [
    {tag: 'p', texto: 'Texto da tag P'},
    {tag: 'div', texto: 'Texto da div'},
    {tag: 'section', texto: 'Texto da section'},
    {tag: 'footer', texto: 'Texto do footer'}
];

const container = document.querySelector('.container');
const div = document.createElement('div');

for( let i=0; i<elementos.length; i++){
    let {tag, texto} = elementos[i];

    let tagCriada = document.createElement(tag);
    let textoCriado = document.createTextNode(texto);

    tagCriada.appendChild(textoCriado);
    div.appendChild(tagCriada);
};

container.appendChild(div);