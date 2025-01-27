// Establece la fecha de fin para el Carnaval Satipeño  
const fechaFin = new Date("2025-03-14T00:00:00").getTime(); // Cambia la fecha según necesites  

// Actualiza la cuenta regresiva cada segundo  
const intervalo = setInterval(function() {  
    const ahora = new Date().getTime();  
    const distancia = fechaFin - ahora;  

    // Verifica si la distancia es negativa, lo que significa que el evento ya comenzó  
    if (distancia < 0) {  
        clearInterval(intervalo);  
        document.querySelector('.contador').innerHTML = "<h1>¡El Carnaval Satipeño ha comenzado!</h1>";  
        return; // Detiene la ejecución si el evento ya comenzó  
    }  

    // Calcula días, horas, minutos y segundos  
    const dias = Math.floor(distancia / (1000 * 60 * 60 * 24));  
    const horas = Math.floor((distancia % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));  
    const minutos = Math.floor((distancia % (1000 * 60 * 60)) / (1000 * 60));  
    const segundos = Math.floor((distancia % (1000 * 60)) / 1000);  

    // Muestra los resultados en el HTML  
    document.getElementById("dias").innerHTML = dias.toString().padStart(2, '0');  
    document.getElementById("horas").innerHTML = horas.toString().padStart(2, '0');  
    document.getElementById("minutos").innerHTML = minutos.toString().padStart(2, '0');  
    document.getElementById("segundos").innerHTML = segundos.toString().padStart(2, '0');  

}, 1000);

let currentIndex = 0;
const images = document.querySelectorAll('.imagen-carrusel');
const totalImages = images.length;

function showNextImage() {
    images[currentIndex].classList.remove('active');
    currentIndex = (currentIndex + 1) % totalImages;
    images[currentIndex].classList.add('active');
}

images[currentIndex].classList.add('active'); // Muestra la primera imagen
setInterval(showNextImage, 3000); // Cambia cada 3 segundos
