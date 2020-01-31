// Funão delay aciona o .then após 1s
/* const delay = () => new Promise(resolve => setTimeout(resolve, 1000));
function umPorSegundo() {
  delay().then(() => {
    console.log("1s");
    delay().then(() => {
      console.log("2s");
      delay().then(() => {
        console.log("3s");
      });
    });
  });
}
umPorSegundo(); */

const delay = texto => new Promise(resolve => setTimeout(resolve(texto), 1000));

export async function umPorSegundo() {
  console.log(await delay("1s"));
  console.log(await delay("2s"));
  console.log(await delay("3s"));
}

