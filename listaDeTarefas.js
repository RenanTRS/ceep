function teste(evento){
    evento.preventDefault();

    const input = document.querySelector('.form-input').value;
    const ul = document.querySelector('[data-list]');

    const li = document.createElement('li');
    li.classList.add('task');

    const conteudo = `<p class="content">${input}</p>`;
    li.insertAdjacentHTML('beforeend', conteudo);

    li.appendChild(BotaoConclui());
    ul.appendChild(li);
}

const novaTarefa = document.querySelector('.form-button');
novaTarefa.addEventListener('click', teste);


function BotaoConclui(){
    const botaoConclui = document.createElement('button');
    botaoConclui.innerText = 'concluir';
    botaoConclui.classList.add('check-button');
    botaoConclui.addEventListener('click', concluirTarefa);

    return botaoConclui;
}

function concluirTarefa(evento){
    const botaoConclui = evento.target;

    const tarefaCompleta = botaoConclui.parentElement;
    tarefaCompleta.classList.toggle('done');
}