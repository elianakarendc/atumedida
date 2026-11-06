document.addEventListener('DOMContentLoaded', () => {
  // Selección de elementos interactivos
  const btnNosotros = document.getElementById('btn-nosotros');
  const btnProductos = document.getElementById('btn-productos');
  const btnVerColeccion = document.getElementById('btn-ver-coleccion');
  const btnLogin = document.getElementById('btn-login');
  
  const modalLogin = document.getElementById('modal-login');
  const closeModal = document.getElementById('close-modal');
  const formLogin = document.getElementById('form-login');

  // 1. Desplazamiento suave para "Nosotros"
  btnNosotros.addEventListener('click', (e) => {
    e.preventDefault();
    document.getElementById('nosotros').scrollIntoView({ behavior: 'smooth' });
  });

  // 2. Desplazamiento suave para "Productos" y "VER COLECCIÓN"
  const scrollToProductos = (e) => {
    e.preventDefault();
    document.getElementById('productos').scrollIntoView({ behavior: 'smooth' });
  };

  btnProductos.addEventListener('click', scrollToProductos);
  btnVerColeccion.addEventListener('click', scrollToProductos);

  // 3. Abrir y cerrar ventana de Inicio de Sesión
  btnLogin.addEventListener('click', () => {
    modalLogin.style.display = 'flex';
  });

  closeModal.addEventListener('click', () => {
    modalLogin.style.display = 'none';
  });

  // Cerrar modal al hacer clic fuera del contenido
  window.addEventListener('click', (e) => {
    if (e.target === modalLogin) {
      modalLogin.style.display = 'none';
    }
  });

  // Manejo básico del envío del formulario
  formLogin.addEventListener('submit', (e) => {
    e.preventDefault();
    alert('¡Sesión iniciada con éxito!');
    modalLogin.style.display = 'none';
  });
});