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

# Aula03 - Adicionar item na lista
## Adicionando Tarefa:  
```insertAdjacentHTML``` Melhor substituto para innerHTML:  
```
tarefa.insertAdjacentHTML('posicao', conteudo);
```
## Criando elemento:  
- ```createElement();``` Para criar um elemento.  
```
const tarefa = document.createElement('li');
```
- ```appendChild()``` Serve para posicionar a tag como filho de outra tag determinada.  
```
lista.appendChild(tarefa);
```
- ```classList.add('nomeDaClasse')``` Serve para por uma classe em uma tag:  
```
tarefa.classList.add('task');
```

# Aula04 - Concluir tarefa
## Criando botão concluir:  
- ```butoon.innerText = 'concluir';``` Usado para por o texto do botão.  
## Concluindo tarefa:  
- ```target``` Seu uso é mais para quando uma função dentro de outra função precisa saber qual o elemento html.  
```
function concluido(evento){
	const button = evento.target;
}
```
- ```parentElement``` Serve para pegar o pai do elemento html.  
```
const tarefaConcluida = button.parentElement;
```
- ```classList.toggle()``` O método **toggle** ativa ou desativa uma class, se ela estiver ativa será desativada, e se estiver desativada será ativa.
```
tarefaCompleta.classList.toggle('done');
```