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
    inputElement.value = "";
    const response = await axios.get( `https://api.github.com/users/${user}/repos`);
    const {name} = response.data;
    for(var n of name){
        var opt = document.createElement('option');
        opt.appendChild( document.createTextNode(n) );
        opt.value = n; 
        selectElement.appendChild(opt);
    }
  }
};

inputElement.onkeypress = getRepositories;