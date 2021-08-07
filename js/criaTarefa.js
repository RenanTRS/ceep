import { BotaoConclui } from "./btn-conclui.js";
import { BotaoDeleta } from "./btn-deletar.js";

let tarefas = [];

function novoItem(event){
    event.preventDefault();
    const ul = document.querySelector('[data-list]');
    const input = document.querySelector('.form-input').value;
    const dateValue = document.querySelector('[data-form-date]').value;
    const date = moment(dateValue);
    const dateFormat = date.format('DD/MM/YYYY');

    const dados = {
        input,
        dateFormat
    };

    tarefas.push(dados);
    localStorage.setItem("tarefa", JSON.stringify(tarefas)); 
    ul.appendChild(criarTarefa(dados));
}

function criarTarefa({input, dateFormat}){
    const li = document.createElement('li');
    li.classList.add('task');

    const conteudo = `<p class="content">${dateFormat} * ${input}</p>`;
    li.insertAdjacentHTML('beforeend', conteudo);

    li.appendChild(BotaoConclui());
    li.appendChild(BotaoDeleta());
    return li;
}
