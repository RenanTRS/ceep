function teste(evento){
    evento.preventDefault();
    const input = document.querySelector('.form-input').value;
    console.log(input);
}

const novaTarefa = document.querySelector('.form-button');
novaTarefa.addEventListener('click', teste);
