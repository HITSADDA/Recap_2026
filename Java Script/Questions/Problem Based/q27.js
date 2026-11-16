// Simple password validator



function validatePassword(pass){
    if(pass.length < 8) return false
    const pattern = /^(?=.*[a-z])(?=.*[A-Z])[A-Za-z]/

    return pattern.test(pass)
}


console.log(validatePassword('dsfadAga3gda'));
