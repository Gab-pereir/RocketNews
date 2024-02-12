function validarFormulario() {
    var email = document.getElementById('email').value;

    if (email === '') {
        alert('Por favor, preencha o campo de e-mail.');
        return false;
    }
}