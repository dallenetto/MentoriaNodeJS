const elementos = [
    {tag: 'p', texto: 'Texto da tag P 2'},
    {tag: 'div', texto: 'Texto da div 2'},
    {tag: 'section', texto: 'Texto da section 2'},
    {tag: 'footer', texto: 'Texto do footer 2'}
];

const container = document.querySelector('.container');
const div = document.createElement('div');

elementos.forEach((elem)=> {
    console.log(elem);
    let {tag, texto} = elem;

    let tagCriada = document.createElement(tag);
    let textoCriado = document.createTextNode(texto);

    tagCriada.appendChild(textoCriado);
    div.appendChild(tagCriada);
});

container.appendChild(div);