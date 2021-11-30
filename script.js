const transactionsUl = document.querySelector("#transactions");
console.log(transactionsUl);
const dummytransacoes = [
  { id: 0, nome: "bolo de brigadeiro", amount: -20 },
  { id: 1, nome: "Salario", amount: 300 },
  { id: 2, nome: "torta de frango", amount: -15 },
  { id: 3, nome: "violão", amount: -150 },
];

const adctransacoesintodom = (transacao) => {
  const operador = transacao.amount < 0 ? "-" : "+";
  const CSSclass = transacao.amount < 0 ? "menos" : "mais";
  const amoutSemOperador = Math.abs(transacao.amount);
  const li = document.createElement("li");

  li.classList.add(CSSclass);
  li.innerHTML = `${transacao.name} <span>${operator} R$ ${amoutSemOperador}</span><button class="delete-btn">x</button>`;
  console.log(li);

  /*<li class="minus">
    Salário <span>-$400</span>
    <button class="delete-btn">x</button>
  </li>;*/
};

adctransacoesintodom(dummytransacoes[1]);
