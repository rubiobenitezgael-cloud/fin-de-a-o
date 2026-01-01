// 1. Lógica de la Lluvia de Fotos
const fotosRecuerdo = [
    'https://github.com/rubiobenitezgael-cloud/fin-de-a-o/blob/main/fccd6610-6c64-4fd8-8602-305153f808ac.jpg?raw=true',
    'https://github.com/rubiobenitezgael-cloud/fin-de-a-o/blob/main/casa%20sueter.png?raw=true',
    'https://github.com/rubiobenitezgael-cloud/fin-de-a-o/blob/main/FDFC0D46-95E9-4B31-A946-39BE99F9F602.jpg?raw=true', // Sustituye por tus archivos
    'https://github.com/rubiobenitezgael-cloud/fin-de-a-o/blob/main/IMG_5669.JPG?raw=true',
    'https://github.com/rubiobenitezgael-cloud/fin-de-a-o/blob/main/sad%20boyz%20jajaja.png?raw=true'
];

function crearLluvia() {
    const contenedor = document.getElementById('contenedor-fotos');
    
    // Crear 20 fotos aleatorias cayendo
    for (let i = 0; i < 20; i++) {
        setTimeout(() => {
            const img = document.createElement('img');
            img.src = fotosRecuerdo[Math.floor(Math.random() * fotosRecuerdo.length)];
            img.className = 'foto-lluvia';
            
            // Posición aleatoria
            img.style.left = Math.random() * 90 + 'vw';
            img.style.animationDuration = (Math.random() * 2 + 2) + 's';
            
            contenedor.appendChild(img);
        }, i * 200); // Salen una tras otra
    }

    // Después de 5 segundos, ocultar intro y mostrar contenido
    setTimeout(() => {
        document.getElementById('intro-lluvia').style.opacity = '0';
        setTimeout(() => {
            document.getElementById('intro-lluvia').classList.add('hidden');
            document.getElementById('contenido-principal').classList.remove('hidden');
        }, 1000);
    }, 5000);
}

function mostrarTexto(elemento) {
    // Buscamos el div con el mensaje dentro de la polaroid que tocamos
    const mensaje = elemento.querySelector('.mensaje-oculto');
    
    // Si está oculto lo muestra, si está a la vista lo oculta
    if (mensaje.style.display === 'block') {
        mensaje.style.display = 'none';
    } else {
        mensaje.style.display = 'block';
        confetti({ particleCount: 30, spread: 50 }); // Un toque de magia
    }
}

// Iniciar lluvia al cargar
window.onload = crearLluvia;

// 2. Lógica del Mensaje con Efecto de Escritura
let j = 0;
function revelarMensaje() {
    const nombre = document.getElementById("nombreInput").value.toLowerCase().trim();
    const contenedor = document.getElementById("mensajeTexto");
    contenedor.innerHTML = "";
    j = 0;
    
    let texto = "";
    if (nombre === "keilita") {
        texto = "Hola mi amor, te dejo este mensaje como agradecimiento y pues bueno, tomalo como una carta.\n Primero que nada feliz año nuevo, feliz 2026, deseo que este sea un año más junto a ti, que lo nuestro siga tan bien como ahora,\n eres la mejor personita en mi vida, fuiste la mejor personita de este año y tengo seguro de que lo serás durante toda mi vida.\n Te amo con todo mi corazón y mi alma por ser la gran persona que eres y por ser quien eres estando conmigo,\n se que habrá demasiados momentos difíciles pero de algo estoy seguro y es de que juntos podremos superarlos tal como ya lo hemos hecho tantas veces.\n Tengo tantas cosas que podría decirte que no me es capaz el decirtelas todas, pero estoy muy agradecido de que me permitas estar a tu lado y ser yo quien te acompañe en tu día a día.\n Te amo con todo mi cocoro.🤍";
    } else if (nombre === "cielito nublado") {
        texto = "Hola mi amor, te dejo este mensaje como agradecimiento y pues bueno, tomalo como una carta.\n Primero que nada feliz año nuevo, feliz 2026, deseo que este sea un año más junto a ti, que lo nuestro siga tan bien como ahora,\n eres la mejor personita en mi vida, fuiste la mejor personita de este año y tengo seguro de que lo serás durante toda mi vida.\n Te amo con todo mi corazón y mi alma por ser la gran persona que eres y por ser quien eres estando conmigo,\n se que habrá demasiados momentos difíciles pero de algo estoy seguro y es de que juntos podremos superarlos tal como ya lo hemos hecho tantas veces.\n Tengo tantas cosas que podría decirte que no me es capaz el decirtelas todas, pero estoy muy agradecido de que me permitas estar a tu lado y ser yo quien te acompañe en tu día a día.\n Te amo con todo mi cocoro.🤍";
    } else if (nombre === "gordita") {
        texto = "Hola mi amor, te dejo este mensaje como agradecimiento y pues bueno, tomalo como una carta.\n Primero que nada feliz año nuevo, feliz 2026, deseo que este sea un año más junto a ti, que lo nuestro siga tan bien como ahora,\n eres la mejor personita en mi vida, fuiste la mejor personita de este año y tengo seguro de que lo serás durante toda mi vida.\n Te amo con todo mi corazón y mi alma por ser la gran persona que eres y por ser quien eres estando conmigo,\n se que habrá demasiados momentos difíciles pero de algo estoy seguro y es de que juntos podremos superarlos tal como ya lo hemos hecho tantas veces.\n Tengo tantas cosas que podría decirte que no me es capaz el decirtelas todas, pero estoy muy agradecido de que me permitas estar a tu lado y ser yo quien te acompañe en tu día a día.\n Te amo con todo mi cocoro.🤍"
    } else if (nombre === "mi niña") {
        texto = "Hola mi amor, te dejo este mensaje como agradecimiento y pues bueno, tomalo como una carta.\n Primero que nada feliz año nuevo, feliz 2026, deseo que este sea un año más junto a ti, que lo nuestro siga tan bien como ahora,\n eres la mejor personita en mi vida, fuiste la mejor personita de este año y tengo seguro de que lo serás durante toda mi vida.\n Te amo con todo mi corazón y mi alma por ser la gran persona que eres y por ser quien eres estando conmigo,\n se que habrá demasiados momentos difíciles pero de algo estoy seguro y es de que juntos podremos superarlos tal como ya lo hemos hecho tantas veces.\n Tengo tantas cosas que podría decirte que no me es capaz el decirtelas todas, pero estoy muy agradecido de que me permitas estar a tu lado y ser yo quien te acompañe en tu día a día.\n Te amo con todo mi cocoro.🤍"
    } else if (nombre === "mi reina") {
        texto = "Hola mi amor, te dejo este mensaje como agradecimiento y pues bueno, tomalo como una carta.\n Primero que nada feliz año nuevo, feliz 2026, deseo que este sea un año más junto a ti, que lo nuestro siga tan bien como ahora,\n eres la mejor personita en mi vida, fuiste la mejor personita de este año y tengo seguro de que lo serás durante toda mi vida.\n Te amo con todo mi corazón y mi alma por ser la gran persona que eres y por ser quien eres estando conmigo,\n se que habrá demasiados momentos difíciles pero de algo estoy seguro y es de que juntos podremos superarlos tal como ya lo hemos hecho tantas veces.\n Tengo tantas cosas que podría decirte que no me es capaz el decirtelas todas, pero estoy muy agradecido de que me permitas estar a tu lado y ser yo quien te acompañe en tu día a día.\n Te amo con todo mi cocoro.🤍"
    } else if (nombre === "mi princesa") {
        texto = "Hola mi amor, te dejo este mensaje como agradecimiento y pues bueno, tomalo como una carta.\n Primero que nada feliz año nuevo, feliz 2026, deseo que este sea un año más junto a ti, que lo nuestro siga tan bien como ahora,\n eres la mejor personita en mi vida, fuiste la mejor personita de este año y tengo seguro de que lo serás durante toda mi vida.\n Te amo con todo mi corazón y mi alma por ser la gran persona que eres y por ser quien eres estando conmigo,\n se que habrá demasiados momentos difíciles pero de algo estoy seguro y es de que juntos podremos superarlos tal como ya lo hemos hecho tantas veces.\n Tengo tantas cosas que podría decirte que no me es capaz el decirtelas todas, pero estoy muy agradecido de que me permitas estar a tu lado y ser yo quien te acompañe en tu día a día.\n Te amo con todo mi cocoro.🤍"
    } else if (nombre === "corazón de melon") {
        texto = "Hola mi amor, te dejo este mensaje como agradecimiento y pues bueno, tomalo como una carta.\n Primero que nada feliz año nuevo, feliz 2026, deseo que este sea un año más junto a ti, que lo nuestro siga tan bien como ahora,\n eres la mejor personita en mi vida, fuiste la mejor personita de este año y tengo seguro de que lo serás durante toda mi vida.\n Te amo con todo mi corazón y mi alma por ser la gran persona que eres y por ser quien eres estando conmigo,\n se que habrá demasiados momentos difíciles pero de algo estoy seguro y es de que juntos podremos superarlos tal como ya lo hemos hecho tantas veces.\n Tengo tantas cosas que podría decirte que no me es capaz el decirtelas todas, pero estoy muy agradecido de que me permitas estar a tu lado y ser yo quien te acompañe en tu día a día.\n Te amo con todo mi cocoro.🤍"
    } else if (nombre === "keilangas") {
        texto = "Hola mi amor, te dejo este mensaje como agradecimiento y pues bueno, tomalo como una carta.\n Primero que nada feliz año nuevo, feliz 2026, deseo que este sea un año más junto a ti, que lo nuestro siga tan bien como ahora,\n eres la mejor personita en mi vida, fuiste la mejor personita de este año y tengo seguro de que lo serás durante toda mi vida.\n Te amo con todo mi corazón y mi alma por ser la gran persona que eres y por ser quien eres estando conmigo,\n se que habrá demasiados momentos difíciles pero de algo estoy seguro y es de que juntos podremos superarlos tal como ya lo hemos hecho tantas veces.\n Tengo tantas cosas que podría decirte que no me es capaz el decirtelas todas, pero estoy muy agradecido de que me permitas estar a tu lado y ser yo quien te acompañe en tu día a día.\n Te amo con todo mi cocoro.🤍"
    } else if (nombre === "prietita") {
        texto = "Hola mi amor, te dejo este mensaje como agradecimiento y pues bueno, tomalo como una carta.\n Primero que nada feliz año nuevo, feliz 2026, deseo que este sea un año más junto a ti, que lo nuestro siga tan bien como ahora,\n eres la mejor personita en mi vida, fuiste la mejor personita de este año y tengo seguro de que lo serás durante toda mi vida.\n Te amo con todo mi corazón y mi alma por ser la gran persona que eres y por ser quien eres estando conmigo,\n se que habrá demasiados momentos difíciles pero de algo estoy seguro y es de que juntos podremos superarlos tal como ya lo hemos hecho tantas veces.\n Tengo tantas cosas que podría decirte que no me es capaz el decirtelas todas, pero estoy muy agradecido de que me permitas estar a tu lado y ser yo quien te acompañe en tu día a día.\n Te amo con todo mi cocoro.🤍"
    } else if (nombre === "negra") {
        texto = "Hola mi amor, te dejo este mensaje como agradecimiento y pues bueno, tomalo como una carta.\n Primero que nada feliz año nuevo, feliz 2026, deseo que este sea un año más junto a ti, que lo nuestro siga tan bien como ahora,\n eres la mejor personita en mi vida, fuiste la mejor personita de este año y tengo seguro de que lo serás durante toda mi vida.\n Te amo con todo mi corazón y mi alma por ser la gran persona que eres y por ser quien eres estando conmigo,\n se que habrá demasiados momentos difíciles pero de algo estoy seguro y es de que juntos podremos superarlos tal como ya lo hemos hecho tantas veces.\n Tengo tantas cosas que podría decirte que no me es capaz el decirtelas todas, pero estoy muy agradecido de que me permitas estar a tu lado y ser yo quien te acompañe en tu día a día.\n Te amo con todo mi cocoro.🤍"
    } else if (nombre === "pata mocha") {
        texto = "Hola mi amor, te dejo este mensaje como agradecimiento y pues bueno, tomalo como una carta.\n Primero que nada feliz año nuevo, feliz 2026, deseo que este sea un año más junto a ti, que lo nuestro siga tan bien como ahora,\n eres la mejor personita en mi vida, fuiste la mejor personita de este año y tengo seguro de que lo serás durante toda mi vida.\n Te amo con todo mi corazón y mi alma por ser la gran persona que eres y por ser quien eres estando conmigo,\n se que habrá demasiados momentos difíciles pero de algo estoy seguro y es de que juntos podremos superarlos tal como ya lo hemos hecho tantas veces.\n Tengo tantas cosas que podría decirte que no me es capaz el decirtelas todas, pero estoy muy agradecido de que me permitas estar a tu lado y ser yo quien te acompañe en tu día a día.\n Te amo con todo mi cocoro.🤍"
    } else {
        texto = "Así yo no te digo eh 🙄";
    }

    confetti({ particleCount: 150, spread: 70, origin: { y: 0.6 } });
    typeWriter(texto, contenedor);
}

function typeWriter(texto, elemento) {
    if (j < texto.length) {
        elemento.innerHTML += texto.charAt(j);
        j++;
        setTimeout(() => typeWriter(texto, elemento), 50);
    }
}
