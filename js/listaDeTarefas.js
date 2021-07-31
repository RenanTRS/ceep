import { BotaoConclui } from "./btn-conclui.js";
import { BotaoDeleta } from "./btn-deletar.js";

function teste(evento){
    evento.preventDefault();

    const input = document.querySelector('.form-input').value;
    const ul = document.querySelector('[data-list]');

    const li = document.createElement('li');
    li.classList.add('task');

    const conteudo = `<p class="content">${input}</p>`;
    li.insertAdjacentHTML('beforeend', conteudo);

    li.appendChild(BotaoConclui());
    li.appendChild(BotaoDeleta());
    ul.appendChild(li);
}

const novaTarefa = document.querySelector('.form-button');
novaTarefa.addEventListener('click', teste);