import { lidaComNovoItem } from "./componentes/criarTarefa.js"
import { carregarTarefa } from "./componentes/carregarTarefa.js"

const novaTarefa = document.querySelector('[data-form-button]')

novaTarefa.addEventListener('click', (lidaComNovoItem))

carregarTarefa()