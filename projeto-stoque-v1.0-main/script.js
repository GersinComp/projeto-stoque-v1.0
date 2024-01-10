// Accordion List

function initAccordion() {
    // Seleciona todos os elementos <h3> dentro de elementos com a classe "js-accordion"
    const accordionList = document.querySelectorAll(".js-accordion h3");
  
    // Nome da classe que será usada para indicar um item ativo
    const activeClass = "active";
  
    // Verifica se há elementos na lista de acordeão
    if (accordionList.length) {
      // Adiciona um ouvinte de evento de clique a cada item da lista de acordeão
      accordionList.forEach((item) => {
        item.addEventListener("click", function () {
          this.classList.toggle(activeClass);
          const section = this.parentElement;
          section.classList.toggle(activeClass);
        });
      });
    }
  }
  
  // Chama a função para iniciar o acordeão quando o script é carregado
  initAccordion();
  
