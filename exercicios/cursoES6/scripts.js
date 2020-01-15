//exercicio 1

class Usuario {
    constructor(email, senha) {
        this.email = email;
        this.senha = senha;
        this.admin = false;
    }
    isAdmin() {
        var retorno = false;
        if (this.admin) {
            retorno = true;
        }
        return retorno;
    }
}

class Admin extends Usuario {
    constructor(email, senha) {
        super(email, senha);
        this.admin = true;
    }
}

const User1 = new Usuario('email@teste.com', 'senha123');
const Adm1 = new Admin('email@teste.com', 'senha123');

console.log(User1.isAdmin()) // false
console.log(Adm1.isAdmin()) // true

//exercicio 2
const usuarios = [
    { nome: 'Diego', idade: 23, empresa: 'Rocketseat' },
    { nome: 'Gabriel', idade: 15, empresa: 'Rocketseat' },
    { nome: 'Lucas', idade: 30, empresa: 'Facebook' },
];

const idades = usuarios.map((item) => item.idade);
console.log(idades);

const userRs18plus = usuarios.filter((item) => item.idade > 18 && item.empresa === 'Rocketseat');
console.log(userRs18plus);

// a diferença do filter pro find é que o filter traz todos que atenderem a regra
// o filter traz o primeiro que achar só;
const userGoogle = usuarios.find((item) => item.empresa === 'Google');
console.log(userGoogle);

// gambi:
const unindoOps = usuarios.map(function (item) {
    var newItem = {
        nome: item.nome,
        idade: item.idade * 2,
        empresa: item.empresa
    }
    return newItem;
}).filter((item) => item.idade <= 50);
console.log(unindoOps);
// jeito "certo"
const multiplicaPor2 = ({ nome, idade, empresa }) => ({
    nome,
    idade: idade * 2,
    empresa
});
const unindoOps2 = usuarios.map(multiplicaPor2).filter((item) => item.idade <= 50);
console.log(unindoOps2);

// Exercicio 3

// 3.1
const arr = [1, 2, 3, 4, 5];
var retorno = arr.map((item) => item + 10);
console.log(retorno);

// 3.2
// Dica: Utilize uma constante pra function
const usuario = { nome: 'Diego', idade: 23 };
const mostraIdade = (usuario) => usuario.idade;
console.log(mostraIdade(usuario));

// 3.3
// Dica: Utilize uma constante pra function
const mostraUsuario = (nome = 'Diego', idade = 18) => `${nome}, ${idade}`;
//com valores padrao:
console.log(mostraUsuario());
console.log(mostraUsuario('Juliana', 33));

// 3.4
const promise = () => new Promise((resolve, reject) => resolve());
console.log(promise());

// Exercicio 4
const empresa = {
    nome: 'Rocketseat',
    endereco: {
        cidade: 'Rio do Sul',
        estado: 'SC',
    }
};
const { nome, endereco: {cidade, estado} } = empresa;
console.log(nome);
console.log(cidade);
console.log(estado);

const mostraInfo = ({ nome , idade}) => `${nome} tem ${idade} anos.`
console.log(mostraInfo(usuario));

//Exercício 5
const arr2 = [1, 2, 3, 4, 5, 6];
const [x, ...y] = arr2;
console.log(x);
console.log(y);

const soma = (...params) => params.reduce((total , next) => total + next);
console.log(soma(1,2,3,4,5));

const usuarioNovo = {
    nome: 'Diego',
    idade: 23,
    endereco: {
    cidade: 'Rio do Sul',
    uf: 'SC',
    pais: 'Brasil',
    }
   };

   const usuarioSpread = { ...usuarioNovo, nome: 'Gabriel'}
   const usuarioSpread2 = { ...usuarioNovo, endereco: { ...usuarioNovo.endereco, cidade: 'Lontras'}};
   console.log(usuarioSpread);
   console.log(usuarioSpread2);