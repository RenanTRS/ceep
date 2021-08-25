export function BotaoDeleta(atualiza, id){
    const botaoDeleta = document.createElement('button');
    botaoDeleta.innerText = 'deletar';
    botaoDeleta.addEventListener('click', ()=>{
        deletarTarefa(atualiza, id);
    });

    return botaoDeleta;
}
function deletarTarefa(atualiza, id){
    /*
    const apagarTarefa = evento.target;
    const tarefaCompleta = apagarTarefa.parentElement;
    tarefaCompleta.remove();
    
    return tarefaCompleta;
    */
    const index = id
    const tarefasCadastradas = JSON.parse(localStorage.getItem("tarefa"));
    tarefasCadastradas.splice(index, 1);
    localStorage.setItem("tarefa", JSON.stringify(tarefasCadastradas));

    atualiza();
}