window.onload = function () {
    // Obtener datos de los patrocinadores desde el localStorage
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

    // Función para mostrar las tarjetas visibles (tres o una, dependiendo del tamaño de la pantalla)
    function showCards() {
        const visibleCards = tarjetas.slice(currentIndex, currentIndex + getCardsToShow()); // Obtener las tarjetas según el tamaño
        tarjetasContainer.innerHTML = ''; // Limpiar el contenedor
        visibleCards.forEach(card => tarjetasContainer.appendChild(card)); // Añadir las tarjetas visibles
    }

    // Función que devuelve cuántas tarjetas mostrar según el tamaño de la pantalla
    function getCardsToShow() {
        if (window.innerWidth <= 768) {  // Para pantallas pequeñas (móviles)
            return 1;  // Solo mostrar una tarjeta
        } else {
            return 3;  // Mostrar tres tarjetas en pantallas grandes
        }
    }

    // Mostrar las tarjetas iniciales
    showCards();

    // Función para mover el carrusel hacia la izquierda
    document.getElementById('prev-btn').addEventListener('click', () => {
        if (currentIndex > 0) {
            currentIndex--;
        } else {
            currentIndex = totalCards - getCardsToShow(); // Ir al final si estamos en el primer grupo
        }
        showCards();
    });

    // Función para mover el carrusel hacia la derecha
    document.getElementById('next-btn').addEventListener('click', () => {
        if (currentIndex < totalCards - getCardsToShow()) {
            currentIndex++;
        } else {
            currentIndex = 0; // Volver al inicio si estamos al final
        }
        showCards();
    });

    // Cambiar las tarjetas automáticamente cada 5 segundos
    setInterval(() => {
        if (currentIndex < totalCards - getCardsToShow()) {
            currentIndex++;
        } else {
            currentIndex = 0; // Volver al principio si estamos al final
        }
        showCards();
    }, 5000); // Cambio automático cada 5 segundos

    // Funcionalidad del formulario de login
    const loginFormContainer = document.getElementById('login-form-container');
    const closeLoginFormButton = document.getElementById('close-login-form');
    const intranetButton = document.querySelector('.boton.intranet');
    
    // Mostrar el formulario de login al hacer click en Intranet
    intranetButton.addEventListener('click', function (e) {
        e.preventDefault();
        loginFormContainer.style.display = 'flex';
    });

    // Cerrar el formulario de login
    closeLoginFormButton.addEventListener('click', function () {
        loginFormContainer.style.display = 'none';
    });

    // Cerrar el formulario si se hace clic fuera de él
    window.addEventListener('click', function (e) {
        if (e.target === loginFormContainer) {
            loginFormContainer.style.display = 'none';
        }
    });

    // Funcionalidad del formulario de login
    const loginForm = document.getElementById('login-form');

    loginForm.addEventListener('submit', function (e) {
        e.preventDefault();  // Previene el envío del formulario

        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;

        // Lógica de validación (puedes modificarla según sea necesario)
        if (username === 'Admin' && password === 'Hilares12345') {
            window.location.href = 'Panel_Ad.html';  // Redirige a Panel_Ad.html
        } else {
            alert('Usuario o contraseña incorrectos');
        }
    });
};
