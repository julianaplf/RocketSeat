import axios from "axios";

// elementos de tela
var formElement = document.querySelector("#repo-form");
var inputElement = formElement.querySelector("input");
var selectElement = formElement.querySelector("select");
var btElement = formElement.querySelector("button");
var repoList = document.querySelector("#repo-list");

async function getRepositories(event) {
  var x = event.which || event.keyCode;
  if (x === 13) {
    event.preventDefault();
    var user = inputElement.value;
    var response;
    var repNames = [];

    if (!sessionStorage.getItem(user)) {
      try {
        response = await axios.get(
          `https://api.github.com/users/${user}/repos`
        );
        sessionStorage.setItem(user, JSON.stringify(response.data));
        repNames = response.data.map(({ name }) => name);
      } catch (err) {
        alert('Usuário não encontrado');
        inputElement.value = "";
        selectElement.innerHTML = "";
      }
    } else {
      var localData = JSON.parse(sessionStorage.getItem(user));
      repNames = localData.map(({ name }) => name);
    }
    selectElement.innerHTML = "";
    for (var n of repNames) {
      var opt = document.createElement("option");
      opt.appendChild(document.createTextNode(n));
      opt.value = n;
      selectElement.appendChild(opt);
    }
  }
}

function addRepository(event) {
  var user = inputElement.value;
  var repo = selectElement.value;
  var currentRepos = repoList;
  var localData;
  var elementsToAdd = [];

  event.preventDefault();
  if (user && repo) {
    if (sessionStorage.getItem(user)) {
      localData = JSON.parse(sessionStorage.getItem(user));
      var filtro = localData.filter(
        ({ name, description, html_url, owner: { avatar_url } }) => name == repo
      )[0];

      var liElement = document.createElement("li");

      var imgEl = document.createElement("img");
      imgEl.setAttribute("src", filtro.owner.avatar_url);

      var titleEl = criaElementos("strong", filtro.name);
      var parEl = criaElementos("p", filtro.description);
      var linkEl = criaElementos("a", "Ir para o repositório", filtro.html_url);

      elementsToAdd.push(imgEl, titleEl, parEl, linkEl);
      for (var e of elementsToAdd) {
        liElement.appendChild(e);
      }
      repoList.append(liElement);
    }
  } else {
    console.log("preencha os campos primeiro para adicionar um repositorio");
  }
}

function criaElementos(el, text, link) {
  var element = document.createElement(el);
  element.appendChild(document.createTextNode(text));

  if (el == "a" && link) {
    element.setAttribute("target", "_blank");
    element.setAttribute("href", link);
  }

  return element;
}

btElement.onclick = addRepository;
inputElement.onkeypress = getRepositories;
