document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();
    alert('Formulario enviado. ¡Gracias por contactarme!');
    // Aquí puedes agregar lógica para enviar el formulario, si es necesario
});

// Funcionalidad para cambiar el tema
document.getElementById('themeToggle').addEventListener('click', () => {
    document.body.classList.toggle('dark-theme');
});

// CSS para el tema oscuro
document.head.insertAdjacentHTML('beforeend', `
<style>
.dark-theme {
    background: #121212;
    color: #e0e0e0;
}
.dark-theme header {
    background: #333;
}
.dark-theme section {
    background: #1e1e1e;
}
.dark-theme .project {
    background: #2c2c2c;
}
.dark-theme footer {
    background: #333;
}
</style>
`);
