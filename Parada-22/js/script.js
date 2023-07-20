function validateForm() {
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirmPassword').value;
  
    if (name.trim() === '' || email.trim() === '' || password.trim() === '' || confirmPassword.trim() === '') {
      alert('Por favor, preencha todos os campos!');
      return false;
    }
  
    if (password !== confirmPassword) {
      alert('As senhas não coincidem!');
      return false;
    }
  
    return true;
  }
  