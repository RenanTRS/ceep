export function BotaoDeleta(){
    const botaoDeleta = document.createElement('button');
    botaoDeleta.innerText = 'deletar';
    botaoDeleta.addEventListener('click', deletarTarefa);

    return botaoDeleta;
}
function deletarTarefa(evento){
    const apagarTarefa = evento.target;
    const tarefaCompleta = apagarTarefa.parentElement;
    tarefaCompleta.remove();
    return tarefaCompleta;
}