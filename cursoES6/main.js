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
    renderTodos(){
        var listEl = document.querySelector('#list');
        listEl.innerHTML = '';
        var todos = this.data;
        for(var i=0; i<todos.length; i++){
            var liEl = document.createElement('li');
            liEl.appendChild(document.createTextNode(todos[i]));
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
