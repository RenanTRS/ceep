# Aula01 - Conhecendo o Dom
## Manipulando o DOM:
- ```document``` Aponta para a página atual, através dele acessamos outros objetos da aplicação.  
- ```document.querySelector('selector')``` Serve para varrer a aplicação em busca do seletor informado retornando o seu conteúdo.  
- Formas de usar o querySelector para id e class.  
```
document.querySelector('#id');
document.querySelector('.class');
```
- Para pegar o texto dentro da tag:  
```
document.querySelector('.selector').textContent;
```
- Para alterar o conteúdo dentro da tag:  
```
document.querySelector('.content').textContent = 'Comprar maçã';
```

# Aula02 - Comportamento do formulário
## Escutando Eventos:  
- Colocar tag script no final para chamar o js:  
```
<script src="arquivo.js"></script>
```
- ```addEventListener('evento', 'funcao');``` Método que escuta uma tag determinada.  
```
const tarefa = document.querySelector('.content');
tarefa.addEventListener('click', ()=>{console.log('fui clicado')});
```
## Capturando valor do input:  
```
function teste(){
	const input = document.querySelector('.form__input').value;
	console.log(input);
}
novaTarefa.addEventListener('click', teste);
```
## Comportamento do formulário:  
- ```preventDefault();``` Serve para não ocorrer o refresh.  
```
function teste(evento){
	evento.preventDefault();
}
```