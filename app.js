const links = document.querySelectorAll("a");
const titulo = document.querySelector("#titulo");
console.log(`Testando o titulo pegando pelo id: ${titulo.innerText}`);
console.log(`Esses são os links da página, todos eles: ${links}`);
for (let link of links) {
  console.log(`Esses são cada um dos links da página: ${link.innerHTML}`);
  link.innerHTML = "Isso é um link.";
}
