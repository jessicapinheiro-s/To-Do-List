"use strict";
let taskSelecionada = '';
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
        let listTarefaArray = localStorage.getItem('listaTarefa');
        var person = JSON.parse(listTarefaArray);
        for (let i in person) {
            ciarElementolista(person[i].tarefa);
        }
        addClasses();
    }
}
verificarLocalStorage();
const btAdd = document.getElementById('btAdd');
btAdd.addEventListener('click', function addTarefa() {
    let inTarefa = document.getElementById('inTarefa');
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
});
//função que cria elementos da tarefa
function ciarElementolista(taref) {
    let lista = document.getElementById('lista');
    let li = document.createElement('li');
    let txt = document.createTextNode(taref);
    let i = document.createElement('i');
    lista.appendChild(li);
    li.appendChild(txt);
    li.setAttribute('class', 'li-task');
}
//função para excluir item da lista
/*const btExcluir = document.getElementById('btExcluir') as HTMLButtonElement;
btExcluir.addEventListener('click', function excluir() {
    let li = document.getElementsByClassName('li-task');
    let lista = document.getElementById('lista') as HTMLUListElement;
   
    for (const i in li){
         li[i].addEventListener('click', function (){
            alert(li[i] + 'Select');
         })
    }
   
    let tamc = checkbox.length + 1;
    var aux = -1;

    for (var i = 0; i < tamc; i++) {
        if (checkbox[i].checked) {
            aux = i - 1;
            lista.removeChild(li[aux]);
            break;
        }
    }
})*/
function atribuirEventoTask() {
    let li = document.getElementsByClassName('li-task');
    for (const i in li) {
        li[i].addEventListener('click', function () {
            const textoTask = li[i].innerHTML;
            li[i].classList.toggle('selecionada');
            //alert(textoTask + ' Foi Selecionado');
            taskSelecionada = textoTask;
        });
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
