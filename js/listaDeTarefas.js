import { BotaoConclui } from "./btn-conclui.js";
import { BotaoDeleta } from "./btn-deletar.js";

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
    //criaTarefa(dados);
    ul.appendChild(criaTarefa(dados));
}

function criaTarefa({input, dateFormat}){
    const li = document.createElement('li');
    li.classList.add('task');

    const conteudo = `<p class="content">${dateFormat} * ${input}</p>`;
    li.insertAdjacentHTML('beforeend', conteudo);

    li.appendChild(BotaoConclui());
    li.appendChild(BotaoDeleta());
    return li;
}

//const novaTarefa = document.querySelector('.form-button').addEventListener('click', teste);
const novaTarefa = document.querySelector('.form-button');
novaTarefa.addEventListener('click', novoItem);