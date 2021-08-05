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
# Aula05 - Remover tarefa
## Removendo a tarefa:  
- ```.remove()``` Método que apaga um elemento.  
## Criando módulos:
- Na tag ```<script>``` acrescente o ```type= "module"```
- Dividir o código em partes e exportar/importar apenas o necessário .  
- **Exportar** Basta acrescentar o nome export antes da função:  
```
export function nomeFunction(){
}
```
- **Importar**:  
```
import {nomeFuncao} from 'diretorio.js';
```

---
# Aula01 - Trabalhando com datas
## Campo nova data:
- ```<input type="datetime-local">``` - No chrome tem a funcionalidade de escolher a data em um calendário, e no firefox deve digitar manualmente.  
- **moment.js** - Uma biblioteca js para formatar datas.  
- D para dias, M para mês, Y para ano, h para hora, m para minutos, a para am ou pm.  
```
const data = moment(variavelData);
console.log(data.format("DD/MM/YYYY hh:mm,a"));
```

- **cdnjs.com** - Site que funciona como uma rede de distribuição de bibliotecas para js.  
- Para fazer uso do código, basta copiar o link e adicionar a tag script em cima da tag do meu código.  
```
<script src="https://diretoriosite.js"></script>
<script src="js/main.js" type="module"></script>
```