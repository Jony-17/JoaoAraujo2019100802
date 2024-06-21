// Função para esconder o loader após o carregamento da página
const loader = document.querySelector(".loader");
function hideLoader() {
  loader.classList.add("loader--hidden");
  loader.addEventListener("transitionend", () => {
    document.body.removeChild(loader);
  });
}

// Esconde o loader após o carregamento da página
window.addEventListener("load", () => {
  hideLoader();
});

// Função gotop para mostrar/esconder o botão de rolar para o topo
window.addEventListener("scroll", () => {
  scrollFunction();
});

function scrollFunction() {
  var scrollToTopBtn = document.getElementById("scrollToTopBtn");
  if (
    document.body.scrollTop > 500 ||
    document.documentElement.scrollTop > 500
  ) {
    scrollToTopBtn.style.display = "block";
  } else {
    scrollToTopBtn.style.display = "none";
  }
}

function scrollTopFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

// FAQ
const textBoxes = document.querySelectorAll(".text-box");

textBoxes.forEach((textBox) => {
  textBox.addEventListener("click", () => {
    const container = textBox.parentElement;
    container.classList.toggle("active");
  });
});


//Função perguntas frequentes
const faqs = document.querySelectorAll(".faq");

faqs.forEach((faq) => {
  faq.addEventListener("click", () => {
    faq.classList.toggle("active");
  });
});