export const validateLogin = (username: string, password: string) => {
    if (username === 'wilmer' && password === '1234') {
        return true
    } else {
        alert("Ingrese los datos correctamente")
        return false;
    }
};