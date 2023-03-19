let tarefas = [
    { tarefa: 'jantar'}, 
    {tarefa: 'jogar'}, 
    {tarefa: 'comer'}
  
];
var textPerson = JSON.stringify(tarefas);
var person = JSON.parse(textPerson);

/*let values = Object.values(tarefas[0]);
for (const value of values) {
    console.log(value); 
}*/
let a = '';
for (let i in tarefas) {
    a+= tarefas[i].tarefa + ', ';
}
console.log(a);
