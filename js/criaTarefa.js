import { BotaoConclui } from "./btn-conclui.js";
import { BotaoDeleta } from "./btn-deletar.js";

export function novoItem(event){
    event.preventDefault();
    const ul = document.querySelector('[data-list]');
    const tarefas = JSON.parse(localStorage.getItem('tarefa')) ||[]; //Se não houver dados crie um array
    const input = document.querySelector('.form-input').value;
    const dateValue = document.querySelector('[data-form-date]').value;
    const date = moment(dateValue);
    const dateFormat = date.format('DD/MM/YYYY');
    
    const dados = {
        input,
        dateFormat
    };
    
    const tarefasAtualizadas = [... tarefas, dados];
    
    ul.appendChild(criarTarefa(dados));
    localStorage.setItem("tarefa", JSON.stringify(tarefasAtualizadas)); 
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
