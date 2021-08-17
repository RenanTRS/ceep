import { novoItem } from "./criaTarefa.js";
import { carregaTarefa } from "./carregaTarefa.js";

const novaTarefa = document.querySelector('.form-button');
novaTarefa.addEventListener('click', novoItem);
carregaTarefa();