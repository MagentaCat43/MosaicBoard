// Destacar página ativa no menu
document.querySelectorAll("nav a").forEach(link => {
  if (link.href === window.location.href) {
    link.classList.add("ativo");
  }
});
