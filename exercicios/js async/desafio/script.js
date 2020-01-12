// Exercicio 1
function checaIdade(idade) {
    return new Promise(function (resolve, reject) {
        if (idade >= 18) {
            setTimeout(function () {
                resolve();
            }, 2000);
        } else {
            setTimeout(function () {
                reject();
            }, 2000);
        }
    });
}

checaIdade(16)
    .then(function (response) {
        console.log("Maior que 18");
    })
    .catch(function (error) {
        console.log("Menor que 18");
    });

// Exercicio 2
var inputElement = document.querySelector('#inputUser');
var buttonElement = document.querySelector('#btBuscar');
var listElement = document.querySelector('#listaRepos');
var repos = [];

function buscarUser() {
    listElement.innerHTML = '<li>Carregando...</li>';
    var inputValue = inputElement.value;
    axios.get('https://api.github.com/users/' + inputValue + '/repos')
        .then(function (response) {
            listElement.innerHTML = '';
            repos = response.data;
            for (repo of repos) {
                var liElement = document.createElement('li');
                liElement.appendChild(document.createTextNode(repo.name));
                listElement.appendChild(liElement);
            }
        })
        .catch(function (error) {
            listElement.innerHTML = '';
            var liElement = document.createElement('li');
            liElement.appendChild(document.createTextNode('Usuário Não Existe'));
            listElement.appendChild(liElement);
        });
}

buttonElement.onclick = buscarUser;
