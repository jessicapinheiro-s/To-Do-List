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

function cores(){
    if(document.querySelector('.circle-theme-dark').classList.contains('ativo')){
        document.querySelector('.circle-theme-anime').classList.remove('ativo');
    }else if(document.querySelector('.circle-theme-anime').classList.contains('ativo')){
        document.querySelector('.circle-theme-dark').classList.remove('ativo')
    }
}
cores();
function bgDark(){
    const btnDarkMode = document.querySelector('.dark-theme-border');
    document.querySelector('.dark-theme-border').classList.toggle('animation');
    document.querySelector('.body').classList.toggle('dark');
    document.querySelector('.container').classList.toggle('dark');
    
}
function bgAnime(){
    document.querySelector('.anime-theme-border').classList.toggle('desativado');
    document.querySelector('.anime-theme-border').classList.toggle('animation');

    document.querySelector('.circle-theme-anime').classList.toggle('ativo');
    document.querySelector('.body').classList.toggle('anime');
    document.querySelector('.container').classList.toggle('anime');
}


