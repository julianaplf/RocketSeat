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
      var listEl = document.querySelector("#list");
      listEl.innerHTML = "";
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
      for (var todo of todos) {
        var liEl = document.createElement("li");
        liEl.appendChild(document.createTextNode(todo));
        listEl.appendChild(liEl);
      }
    }
  }
  
  class TodoList extends List {}
  // devo primeiro declarar a classe para somente depois chamar o construtor dela
  //pois com JS não tem Hoisting (colocar no topo funcoes e variaveis)
  
  const MinhaLista = new TodoList();
  
  document.getElementById("novotodo").onclick = function() {
    var inputEl = document.querySelector("#inputTodo");
    MinhaLista.add(inputEl.value);
    inputEl.value = "";
    MinhaLista.renderTodos();
  };
  
  // testando reduce pra validações, como fazemos em tela com o sf:
  /* var allValid = cmp.find('field').reduce(function (validSoFar, inputCmp) {
      inputCmp.showHelpMessageIfInvalid();
      return validSoFar && inputCmp.get('v.validity').valid;
   }, true); */
  
  var arr = ["oi", 2, 0, undefined];
  
  const resultado = arr.reduce(function(validSoFar, next) {
    if (!next) {
      validSoFar = false;
    }
    return validSoFar;
  }, true);
  
  //if(!resultado) alert('o array possui valores falsy')
  
  // testando filter pra somente retornar os valores q nao sao "falsy"
  const filter = arr.filter(function(item) {
    return item ? item : "";
  });
  
  console.log(filter);
  
  //arrow function
  const newArr = arr.map(item => item * 2);
  
  console.log(newArr);
  
  //desestruturação
  const usuario = {
    nome: "juliana",
    idade: "33",
    endereco: {
      cidade: "Recife"
    }
  };
  
  const {
    nome,
    endereco: { cidade }
  } = usuario;
  console.log(nome + " " + cidade);
  
  //testando webpack
  import UsuarioClasse, { idade as IdadeUsuario } from "../funcoes";
  // import * as funcoes from .... e na hora de chamar: funcoes.soma(1,2);
  //console.log('soma: ' + soma(1,2));
  //console.log('subtracao ' + subtracao(4,2));
  UsuarioClasse.info();
  console.log(IdadeUsuario);
  
  const minhaPromise = () =>
    new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve("OK");
      }, 2000);
    });
  
  // chamando promise normal
  /*
  minhaPromise()
      .then(response => {
      console.log(response);
  })
  .catch(error => {
      console.log(deu ruim);
  })
  */
  // usando async e await
  async function executarPromise() {
    const response = await minhaPromise();
    console.log(response);
  }
  
  executarPromise();
  
  // usando com arrow function:
  const executarPromiseArrow = async () => {
    console.log("com arrow " + (await minhaPromise()));
  };
  
  executarPromiseArrow();
  
  import axios from "axios";
  class Api {
    static async getUserInfo(username) {
      try {
        const response = await axios.get(
          `https://api.github.com/users/${username}`
        );
        console.log(response);
      } catch(err){
          console.log('Deu ruim');
      }
    }
  }
  //ok
  Api.getUserInfo("julianaplf");
  //err
  Api.getUserInfo("julaasaianaplf");
  
  // import
  
  import * as test from '../desafioRS';
  test.umPorSegundo();
  
  // exercicios
  class Github {
      static async getRepositories(user, repo) {
          try{
              const response = await axios.get(`https://api.github.com/repos/${user}/${repo}`);
              console.log(response.data);
          } catch (err){
              console.log('deu ruim');
          }
     }
  }
  Github.getRepositories('julianaplf', 'CursoiOS');
  
  