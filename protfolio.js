const cards = document.querySelectorAll(".card");

window.addEventListener("scroll", () => {
  cards.forEach(card => {
    const position = card.getBoundingClientRect().top;
    const screenPosition = window.innerHeight / 1.2;

    if(position < screenPosition){
      card.style.opacity = 1;
      card.style.transform = "translateY(0)";
    }
  });
});

// Initial hidden state
cards.forEach(card => {
  card.style.opacity = 0;
  card.style.transform = "translateY(50px)";
  card.style.transition = "all 0.6s ease";
});