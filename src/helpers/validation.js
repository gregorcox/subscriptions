/*
    Start@Middle.End
    - Start can include any alphanumeric characters (including capital letters), underscore and fullstop.
    - Middle can only include alphanumeric characters (including capital letters) and underscore.
    - End can only include alphabetic characters (including capital letters) and has to have atleast 2 chars.
*/
export const validateEmail = (email) => {
    let error;
    if (!email) {
        error = 'Please enter your email'
    } else if (!/^[\w.+-]+@[\w.]+\.[a-z]{2,}$/i.test(email)) {
        error = 'This email address is not valid';
    }
    return error;
}

// User must enter a password
export const validatePassword = (password) => {
    let error;
    if (!password) {
        error = 'Please enter your password'
    }
    return error;
}
