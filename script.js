window.onload = function() {
    const sponsors = JSON.parse(localStorage.getItem('sponsors')) || [];
    const tarjetasContainer = document.getElementById('tarjetas-container');
    const tarjetas = [];

    // Crear tarjetas dinámicamente
    sponsors.forEach(sponsor => {
        if (sponsor.publicado) {
            const tarjeta = document.createElement('div');
            tarjeta.classList.add('card');
            tarjeta.innerHTML = `
                <div class="cover__card">
                    ${sponsor.logo ? `<img src="${sponsor.logo}" alt="Logo">` : '<p>No logo</p>'}
                </div>
                <div class="card-info">
                    <h3>${sponsor.nombre}</h3>
                    <p><strong>Correo:</strong> ${sponsor.email}</p>
                    <p><strong>Teléfono:</strong> ${sponsor.telefono}</p>
                </div>
                <div class="footer__card">
                    <h4>Publicado</h4>
                    <i>${sponsor.publicado ? 'Sí' : 'No'}</i>
                </div>
            `;
            tarjetas.push(tarjeta); // Guardamos las tarjetas en un array
        }
    });

    let currentIndex = 0;
    const totalCards = tarjetas.length;

    // Función para mostrar las tarjetas visibles
    function showCards() {
        const visibleCards = tarjetas.slice(currentIndex, currentIndex + 3); // Obtener solo 3 tarjetas
        tarjetasContainer.innerHTML = ''; // Limpiar el contenedor
        visibleCards.forEach(card => tarjetasContainer.appendChild(card)); // Añadir las tarjetas visibles
    }

    // Mostrar las tarjetas iniciales
    showCards();

    // Función para mover el carrusel hacia la izquierda
    document.getElementById('prev-btn').addEventListener('click', () => {
        if (currentIndex > 0) {
            currentIndex--;
        } else {
            currentIndex = totalCards - 3; // Ir al final si estamos en el primer grupo
        }
        showCards();
    });

    // Función para mover el carrusel hacia la derecha
    document.getElementById('next-btn').addEventListener('click', () => {
        if (currentIndex < totalCards - 3) {
            currentIndex++;
        } else {
            currentIndex = 0; // Volver al inicio si estamos al final
        }
        showCards();
    });

    // Función para cambiar las tarjetas automáticamente cada 5 segundos
    setInterval(() => {
        if (currentIndex < totalCards - 3) {
            currentIndex++;
        } else {
            currentIndex = 0; // Volver al principio si estamos al final
        }
        showCards();
    }, 5000); // Cambio automático cada 5 segundos
};
