var xhr = new XMLHttpRequest();
var container = document.querySelector('#dados');
var container2 = document.querySelector('#dados2');

xhr.open('GET', 'https://api.github.com/users/julianaplf');
xhr.send(null);

xhr.onreadystatechange = function () {
    if (xhr.readyState === 4) {
        var response = JSON.parse(xhr.response);
        container.innerHTML = `Você solicitou dados do GitHub de ${response.login} <br><img height="200px" src=${response.avatar_url}/>`
    }
}

var myPromise = function () {
    return new Promise(function (resolve, reject) {
        var xhr2 = new XMLHttpRequest();
        xhr2.open('GET', 'https://api.github.com/users/diego3g');
        xhr2.send(null);
        xhr2.onreadystatechange = function () {
            if (xhr2.readyState === 4) {
                if (xhr2.status === 200) {
                    resolve(JSON.parse(xhr2.responseText));
                } else {
                    reject('Deu ruim');
                }
            }
        }
    });
}

myPromise()
    .then(function (response) {
        container2.innerHTML = `Você solicitou dados do GitHub de ${response.login} <br><img height="200px" src=${response.avatar_url}/>`
    })
    .catch(function (error) {
        console.log('Deu ruim');
    });

axios.get('https://api.github.com/users/guiky')
    .then(function (response) {
       console.log(response);
    })
    .catch(function (error) {
        console.log('Deu ruim');
    });