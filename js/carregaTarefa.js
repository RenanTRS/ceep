import { ordenaData, removeDatasRepetidas } from "../service/data.js";
import { criaData } from "./criaData.js";

export function carregaTarefa(){
    const ul = document.querySelector('[data-list]');
    const tarefasCadastradas = JSON.parse(localStorage.getItem("tarefa")) || [];

    ul.innerHTML = "";
    const dataUnicas = removeDatasRepetidas(tarefasCadastradas);
    ordenaData(dataUnicas);
    dataUnicas.forEach((dia)=>{
        //forEach, para cada item deste array execute esta callback
        ul.appendChild(criaData(dia));
    });
}