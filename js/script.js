// Destacar página ativa
document.querySelectorAll("nav a").forEach(link => {
  if (link.href === window.location.href) {
    link.classList.add("ativo");
  }
});

// Mostrar / esconder sidebar
function toggleSidebar() {
  const sidebar = document.getElementById('sidebar');
  if(sidebar.style.transform === 'translateX(-220px)') {
    sidebar.style.transform = 'translateX(0)';
  } else {
    sidebar.style.transform = 'translateX(-220px)';
  }
}
