import { criarTarefa } from "./criaTarefa.js";
export function criaData(data){
    const tarefas = JSON.parse(localStorage.getItem('tarefa')) || [];
    const dataMoment = moment(data, 'DD/MM/YYYY');
    const dataTopo = document.createElement("li");
    const conteudo = `<p class="content-data">${dataMoment.format('DD/MM/YYYY')}</p>`;

    dataTopo.innerHTML = conteudo;
    tarefas.forEach((tarefa) => {
        const dia = moment(tarefa.dateFormat, 'DD/MM/YYYY');
        const diff = dataMoment.diff(dia);
        if(diff===0){
            dataTopo.appendChild(criarTarefa(tarefa));
        }
    });
    return dataTopo;
}