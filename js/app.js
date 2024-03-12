const imagenes = document.querySelectorAll(".propiedad__imagen");

window.addEventListener("scroll", () => {
  let scroll = this.scrollY / -20;

  imagenes.forEach((imagen) => {
    if (scroll < -80) {
      scroll += 80;
    }
    imagen.style.backgroundPositionY = `${scroll}px`;
  });
});
