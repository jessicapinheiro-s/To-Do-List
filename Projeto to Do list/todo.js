let tarefas = [];

function verificarLocalStorage() {
    if (localStorage.getItem('listaTarefa')) {
        let listTarefaArray = localStorage.getItem('listaTarefa');
        let partes = listTarefaArray.split(",");

        let list = document.getElementById('lista');

        for (let i = 0; i < partes.length; i++) {
            let li = document.createElement('li')
            let txtx = document.createTextNode(partes[i]);
            list.appendChild(li);
            li.appendChild(txtx);
        }
    }
}
verificarLocalStorage();

function addTarefa() {
    let inTarefa = document.getElementById('inTarefa');
    let tarefa = inTarefa.value;
    let resp = document.querySelector('div.resposta');
    let respost = document.getElementById("resposta");


    if (tarefa == '') {
        resp.innerHTML = `O campo está vazio, digite algo..`;
        respost.style.backgroundColor = '#d12929';
        respost.style.width = '300px';
        respost.style.margin = '0 auto';
        respost.style.color = '#fff';
        respost.style.padding = '15px';
        respost.style.borderRadius = '8px';
        inTarefa.focus();
        return;
    }
    respost.style.backgroundColor = '#ffffff';
    resp.innerHTML = '';

    let lista = document.getElementById('lista');
    let li = document.createElement('li');
    let txt = document.createTextNode(tarefa);

    let checkbox = document.createElement('input');
    checkbox.classList.add('checkbox');
    checkbox.type = 'checkbox';
    checkbox.id = 'checkbox';

    li.appendChild(checkbox);
    li.appendChild(txt);
    lista.appendChild(li);



    //salva no localStorage
    //criando a array de obj
    let listaTarefa = JSON.parse(localStorage.getItem('listaTarefa') || '[]')

    //dando um push a cada tarefa adicionada
    listaTarefa.push({ tarefa: tarefa });

    //salva no localStorage
    localStorage.setItem("listaTarefa", JSON.stringify(listaTarefa));

    //alert(listaTarefa[0].tarefa);

    inTarefa.value = '';
    inTarefa.focus();
}


let btAdd = document.getElementById('btAdd');
btAdd.addEventListener('click', addTarefa);

function excluir() {
    let checkbox = document.getElementsByTagName('input');
    let li = document.getElementsByTagName('li');
    let lista = document.getElementById('lista');
    let tamc = checkbox.length + 1;
    var aux = -1;

    for (var i = 0; i < tamc; i++) {
        if (checkbox[i].checked) {
            aux = i - 1;
            lista.removeChild(li[aux]);
            break;
        }
    }
}
let btExcluir = document.getElementById('btExcluir');
btExcluir.addEventListener('click', excluir);

/*
function bgDark() {
    document.querySelector('.dark-theme-border').classList.toggle('animation');

    document.querySelector('.body').classList.toggle('dark');
    document.querySelector('.container').classList.toggle('dark');
    if (document.querySelector('.dark-theme-border').classList.contains('animation')) {

        let litsLi = document.getElementsByTagName('li');

        while (litsLi.length >= 0) {
            //problema aqui
        }
    }
}
function li() {
    if (document.querySelector('.dark-theme-border').classList.contains('animation')) {
        alert('oi');
    }
}
li();

*/



