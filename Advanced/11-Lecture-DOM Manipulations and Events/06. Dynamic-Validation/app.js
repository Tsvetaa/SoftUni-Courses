function validate() {
    let pattern = /^[a-z]+@[a-z]+.[a-z]+$/gm

    let filed = document.getElementById('email');
    filed.addEventListener('change', verify);

    function verify() {
       pattern.test(filed.value) 
       ? filed.classList.remove('error') 
       : filed.classList.add('error');
    }
    
}