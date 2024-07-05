document.addEventListener('DOMContentLoaded', function() {
    let input = document.querySelector('#tarefa');
    let submeter = document.querySelector('#submeter');
    let dia = document.querySelector('#data');

    submeter.addEventListener('click', function() {
        registrar();
    });

    function registrar() {
        let tarefa = input.value;
        let data = dia.value;

        if (tarefa && data) {
            let listaTarefas = document.querySelector('#lista-tarefas');

            // Cria um novo item de lista (li)
            let novoItem = document.createElement('li');
            novoItem.classList.add('item');

            // Cria a estrutura da grid para o novo item
            let gridDiv = document.createElement('div');
            gridDiv.classList.add('grid');

            // Cria e adiciona os elementos para data e tarefa
            let pData = document.createElement('p');
            pData.textContent = data;
            pData.classList.add('dia');
            gridDiv.appendChild(pData);

            let pTarefa = document.createElement('p');
            pTarefa.textContent = tarefa;
            pTarefa.classList.add('txt');
            gridDiv.appendChild(pTarefa);

            // Adiciona a grid ao item de lista
            novoItem.appendChild(gridDiv);

            // Adiciona o novo item à lista de tarefas
            listaTarefas.appendChild(novoItem);

            // Limpa os campos de entrada
            input.value = '';
            dia.value = '';

        } else {
            alert('Por favor, preencha todos os campos.');
        }
    }
});

