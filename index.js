// Modal
const openModalButton = document.querySelector(".open-modal");
const closeModalButton = document.querySelector("#close-modal");
const modal = document.querySelector("#modal");
const fade = document.querySelector("#fade");

const toggleModal = () => {
  modal.classList.toggle("hide");
  fade.classList.toggle("hide");
};

[openModalButton, closeModalButton, fade].forEach((el) => {
  el.addEventListener("click", () => toggleModal());
});
console.log("aqui")
$(document).ready(function() {
  console.log("Funcionou!");
  $('.money').maskMoney({
    prefix: 'R$ ',
    allowNegative: false,
    thousands: '.',
    decimal: ','
  });
});

const botao = document.querySelector('.dropdown');
const listas = document.querySelector('.listOrder');

botao.addEventListener('click', function() {
  if (listas.style.display === 'none') {
    listas.style.display = 'block';
  } else {
    listas.style.display = 'none';
  }
});

// Definir as variáveis necessárias
const items = document.querySelectorAll('li');
const button = document.querySelector('.selectList');

// Adicionar o evento de clique para cada item
items.forEach((item, index) => {
  item.addEventListener('click', () => {
    button.textContent = item.textContent;
    currentIndex = index;
  });
});


