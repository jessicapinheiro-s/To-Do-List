let taskSelecionada: Array<string> = [];


function addClasses() {
    let lis = document.getElementsByClassName("li-task");
    for (let i = 0; i < lis.length; i++) {
        lis[i].classList.add('li-task');
    }
}
addClasses();


/*função que verifica se há itens da lista gravados no local storage (não excluidos)*/
function verificarLocalStorage() {
    if (localStorage.getItem('listaTarefa')) {
        let listTarefaArray: any = localStorage.getItem('listaTarefa');
        var person = JSON.parse(listTarefaArray);

        for (let i in person) {
            ciarElementolista(person[i].tarefa);
        }

        addClasses()
        return person;
    }
}
verificarLocalStorage();
const btAdd = document.getElementById('btAdd') as HTMLButtonElement;
btAdd.addEventListener('click', function addTarefa() {
    let inTarefa = document.getElementById('inTarefa') as HTMLInputElement;
    let tarefa = inTarefa.value;

    if (tarefa == '') {
        alert('O campo está vazio, digite algo..');
        inTarefa.focus();
        return;
    }

    ciarElementolista(tarefa);

    //salva no localStorage
    //criando a array de obj
    let listaTarefa = JSON.parse(localStorage.getItem('listaTarefa') || '[]');


    //dando um push a cada tarefa adicionada
    listaTarefa.push({ tarefa: tarefa, data: new Date().toUTCString() });
    //salva no localStorage
    localStorage.setItem("listaTarefa", JSON.stringify(listaTarefa));

    inTarefa.value = '';
    inTarefa.focus();
})

//função que cria elementos da tarefa
function ciarElementolista(taref: string) {
    let lista = document.getElementById('lista') as HTMLUListElement;
    let li = document.createElement('li') as HTMLLIElement;

    let txt = document.createTextNode(taref);
    let i = document.createElement('i');

    lista.appendChild(li);
    li.appendChild(txt);

    let idTask: number | null = 0;
    let idCompleto = 'li-task' + idTask++;

    li.setAttribute('id', idCompleto);
    li.setAttribute('class', 'li-task');
}

//função para excluir item da lista
const btExcluir = document.getElementById('container-bt-excluir') as HTMLButtonElement;
btExcluir.addEventListener('click', function excluir() {
    
    let newArray = taskSelecionada.map(f => f);
    console.log(newArray);
    let listTarefaArray: any = localStorage.getItem('listaTarefa');
    var person = JSON.parse(listTarefaArray);
    console.log(person);
    let arrayDeTarefasLocalStorage: Array <string> = person.map((item: { tarefa: any; }) => item.tarefa);


    for (let i in newArray) {
        if (arrayDeTarefasLocalStorage.includes(newArray[i])) {
            //lista.removeChild(li[aux]);
            //alert('o item será excluído');
        }
    }
})

function atribuirEventoTask() {
    const li = document.getElementsByClassName('li-task') as HTMLCollectionOf<HTMLElement>;
    console.log(li.length);

    for (let i in li) {
        let idEl = document.getElementById(li[i].id);
        let textoTask = li[i].innerHTML;

        if (idEl !== null) {
            idEl.addEventListener('click', function () {
                li[i].classList.toggle('selecionada');
                //alert(textoTask + ' Foi Selecionado');
                taskSelecionada.push(textoTask);
            })
        }
    }

}
atribuirEventoTask();
/*função para acionar dark theme*/
/*function bgDark() {
    let btnDark = document.querySelector('.dark-theme-border') as HTMLButtonElement; 

    btnDark.classList.toggle('animation');

    let lis = document.getElementsByClassName('li-task');
    for (let i = 0; i < lis.length; i++) {
        lis[i].classList.toggle('li-taskDark');
    }

}*/


