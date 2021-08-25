export function BotaoConclui(atualiza, id){
    const botaoConclui = document.createElement('button');
    botaoConclui.innerText = 'concluir';
    botaoConclui.classList.add('check-button');
    botaoConclui.addEventListener('click', ()=>{
        concluirTarefa(atualiza, id)
    });

    return botaoConclui;
}

function concluirTarefa(atualiza, id){
    const tarefasCadastradas = JSON.parse(localStorage.getItem("tarefa"));
    tarefasCadastradas[id].concluida = !tarefasCadastradas[id].concluida;

    localStorage.setItem("tarefa", JSON.stringify(tarefasCadastradas));

    atualiza();
}