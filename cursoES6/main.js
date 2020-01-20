// criei classe somente para testar o extends

class List {
    // construtor da classe
    constructor() {
        this.data = [];
    }
    // metodo da classe
    add(data) {
        this.data.push(data);
    }
    renderTodos() {
        var listEl = document.querySelector('#list');
        listEl.innerHTML = '';
        var todos = this.data;
        /* for(var i=0; i<todos.length; i++){
            var liEl = document.createElement('li');
            liEl.appendChild(document.createTextNode(todos[i]));
            listEl.appendChild(liEl);
        } */
        /* todos.map(function (item) {
            var liEl = document.createElement('li');
            liEl.appendChild(document.createTextNode(item));
            listEl.appendChild(liEl);
        }) */
        for(var todo of todos){
            var liEl = document.createElement('li');
            liEl.appendChild(document.createTextNode(todo));
            listEl.appendChild(liEl);
        }
    }
}

class TodoList extends List { }
// devo primeiro declarar a classe para somente depois chamar o construtor dela
//pois com JS não tem Hoisting (colocar no topo funcoes e variaveis)

const MinhaLista = new TodoList();

document.getElementById('novotodo').onclick = function () {
    var inputEl = document.querySelector('#inputTodo');
    MinhaLista.add(inputEl.value);
    inputEl.value = '';
    MinhaLista.renderTodos();
}

// testando reduce pra validações, como fazemos em tela com o sf:
/* var allValid = cmp.find('field').reduce(function (validSoFar, inputCmp) {
    inputCmp.showHelpMessageIfInvalid();
    return validSoFar && inputCmp.get('v.validity').valid;
 }, true); */

var arr = ['oi', 2, 0, undefined];

const resultado = arr.reduce(function (validSoFar, next) {
    if (!next) {
        validSoFar = false;
    }
    return validSoFar;
}, true);

//if(!resultado) alert('o array possui valores falsy')

// testando filter pra somente retornar os valores q nao sao "falsy"
const filter = arr.filter(function(item){
return item ? item : ''; 
});

console.log(filter);

//arrow function
const newArr = arr.map(item => item * 2);

console.log(newArr);

//desestruturação
const usuario = {
    nome : 'juliana',
    idade : '33',
    endereco: {
        cidade: "Recife"
    }
}

const { nome, endereco:{cidade} }  = usuario;
console.log(nome + ' ' + cidade);

//testando webpack
import { soma } from './funcoes'
console.log('soma: ' + soma(1,2));
