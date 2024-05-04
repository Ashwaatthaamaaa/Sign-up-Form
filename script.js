
document.addEventListener('DOMContentLoaded', function() {
    const passwordInput = document.getElementById("Password");
    const CnfpasswordInput = document.getElementById("Cnf_pass");
    const passwordError = document.getElementById('passwordError');

    CnfpasswordInput.addEventListener('input',function(event) {
        const password = passwordInput.value;
        const Cnfpassword = CnfpasswordInput.value;
        if (password!=Cnfpassword){
            passwordInput.classList.add(".invalid");
            CnfpasswordInput.classList.add(".invalid");
            passwordError.style.display='block';
            event.preventDefault()

        }else {
            // Hide the error message
            passwordError.style.display = 'none';

            // Remove 'invalid' class from the input field
            passwordInput.classList.remove('invalid');
        }
    });

    passwordInput.addEventListener('input', function() {
        passwordError.style.display = 'none';
        
    });
});