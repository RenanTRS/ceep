import { BotaoConclui } from "./btn-conclui.js";
import { BotaoDeleta } from "./btn-deletar.js";
import { carregaTarefa } from "./carregaTarefa.js";

export function novoItem(event){
    event.preventDefault();
    const tarefas = JSON.parse(localStorage.getItem('tarefa')) ||[]; //Se não houver dados crie um array
    const input = document.querySelector('.form-input').value;
    const dateValue = document.querySelector('[data-form-date]').value;
    const date = moment(dateValue);
    const dateFormat = date.format('DD/MM/YYYY');
    const horario = date.format('HH:mm');
    
    const concluida = false;

    const dados = {
        input,
        dateFormat,
        horario,
        concluida
    };
    
    const tarefasAtualizadas = [... tarefas, dados];
    
    //ul.appendChild(criarTarefa(dados));
    localStorage.setItem("tarefa", JSON.stringify(tarefasAtualizadas)); //Salva as tarefas no localStorage
    carregaTarefa(); //Mostra na tela as tarefas pendentes no localStorage
}

export function criarTarefa({input, horario, concluida}, id){
    const li = document.createElement('li');
    
    const conteudo = `<p class="content">${horario} * ${input}</p>`;
    
    if(concluida){
        li.classList.add('done');
    }
    li.classList.add('task');

    li.insertAdjacentHTML('beforeend', conteudo);

    li.appendChild(BotaoConclui(carregaTarefa, id));
    li.appendChild(BotaoDeleta(carregaTarefa, id));
    return li;
}
