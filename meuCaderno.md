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