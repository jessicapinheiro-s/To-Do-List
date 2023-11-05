function addClasses() {
    let lis = document.getElementsByTagName("li");
    for (let i = 0; i < lis.length; i++) {
        lis[i].setAttribute('class', 'li');
    }
}
addClasses();

/*função que verifica se há itens da lista gravados no local storage (não excluidos)*/
function verificarLocalStorage() {
    if (localStorage.getItem('listaTarefa')) {
        let listTarefaArray:any = localStorage.getItem('listaTarefa');
        var person = JSON.parse(listTarefaArray);

        for (let i in person) {
            ciarElementolista (person[i].tarefa);
        }

        addClasses();
    }
}
verificarLocalStorage();
const btAdd =document.getElementById('btAdd') as HTMLButtonElement;
btAdd.addEventListener('click', function addTarefa() {
    let inTarefa = document.getElementById('inTarefa') as HTMLInputElement;
    let tarefa = inTarefa.value;

    if (tarefa == '') {
        alert('O campo está vazio, digite algo..');
        inTarefa.focus();
        return;
    }

    ciarElementolista (tarefa);
   
    //salva no localStorage
    //criando a array de obj
    let listaTarefa = JSON.parse(localStorage.getItem('listaTarefa') || '[]');
    

    //dando um push a cada tarefa adicionada
    listaTarefa.push({ tarefa: tarefa });
    //salva no localStorage
    localStorage.setItem("listaTarefa", JSON.stringify(listaTarefa));

    inTarefa.value = '';
    inTarefa.focus();
})

//função que cria elementos da tarefa
function ciarElementolista (taref:string){
    let lista = document.getElementById('lista') as HTMLUListElement;
    let li = document.createElement('li');
    let divCheckbox = document.createElement('div');

    let txt = document.createTextNode(taref);
    let checkbox = document.createElement('input');

    checkbox.type = 'checkbox';

    lista.appendChild(li);
    li.appendChild(divCheckbox);
    li.appendChild(txt);
    divCheckbox.appendChild(checkbox)

    li.setAttribute('class', 'li');
    divCheckbox.setAttribute('class', 'divCheckbox');

}

//função para excluir item da lista
const btExcluir = document.getElementById('btExcluir') as HTMLButtonElement;
btExcluir.addEventListener('click', function excluir() {
    let checkbox = document.getElementsByTagName('input');
    let li = document.getElementsByTagName('li');
    let lista = document.getElementById('lista') as HTMLUListElement;
    let tamc = checkbox.length + 1;
    var aux = -1;

    for (var i = 0; i < tamc; i++) {
        if (checkbox[i].checked) {
            aux = i - 1;
            lista.removeChild(li[aux]);
            break;
        }
    }
})


/*função para acionar dark theme*/
function bgDark() {
    let btnDark = document.querySelector('.dark-theme-border') as HTMLButtonElement; 

    btnDark.classList.toggle('animation');

    document.querySelector('.body').classList.toggle('dark') as ;
    document.querySelector('.bg-theme').classList.toggle('dark');

    let lis = document.getElementsByClassName('li');
    for (let i = 0; i < lis.length; i++) {
        lis[i].classList.toggle('liDark');
    }

}




