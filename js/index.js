  // Importa o polyfill
  smoothscroll.polyfill();

  function scrollToWelcome() {
    // Seleciona a div 'welcome' pelo ID
    var welcomeDiv = document.getElementById('page1');

    // Calcula a posição da div 'welcome' na página
    var position = welcomeDiv.getBoundingClientRect().top;

    // Rola suavemente para a posição da div 'welcome'
    window.scrollTo({
      top: position,
      behavior: 'smooth' // Faz a rolagem suave
    });
  }