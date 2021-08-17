import { criarTarefa } from "./criaTarefa.js";

export function carregaTarefa(){
    const ul = document.querySelector('[data-list]');
    const tarefasCadastradas = JSON.parse(localStorage.getItem("tarefa")) || [];

    ul.innerHTML = "";
    tarefasCadastradas.forEach((tarefa)=>{
        ul.appendChild(criarTarefa(tarefa));
    });
}