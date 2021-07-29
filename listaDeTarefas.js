function teste(evento){
    evento.preventDefault();

    const input = document.querySelector('.form-input').value;
    const ul = document.querySelector('[data-list]');

    const li = document.createElement('li');
    li.classList.add('task');

    const conteudo = `<p class="content">${input}</p>`;
    li.insertAdjacentHTML('beforeend', conteudo);

    ul.appendChild(li);
}

const novaTarefa = document.querySelector('.form-button');
novaTarefa.addEventListener('click', teste);
