let authentication = () =>{
    let username = document.getElementById('username').value;
    let password = document.getElementById('password').value;

    if (username === 'supriiyatnaaa@gmail.com' && password === 'beat6517'){
        window.location.href = 'success.html';
        alert('Login Berhasil');
    } else {
        alert('Username atau Password salah')
    }
}