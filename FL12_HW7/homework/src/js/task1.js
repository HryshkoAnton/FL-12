let database = {
    'user@gmail.com': 'UserPass',
    'admin@gmail.com': 'AdminPass'
}
let password;
let changePassword;
let newPassword;
let newPassword2;
let EmailValidLen = 5;
let newPasswordValidLen = 6;
let userEmail = prompt('Enter your email');

if (!userEmail) {
    //If the userEmail is an empty line or Esc 
    alert('Canceled')
} else if (userEmail.length < EmailValidLen) {
    //If the userEmail length less than 5 symbols 
    alert('I don\'t know any emails having name length less than 5 symbols');
} else if (Object.keys(database).includes(userEmail)) {
    //If the visitor entered "user@gmail.com" or "admin@gmail.com" 
    password = prompt('Enter your password');
    if (!password) {
        //If the password is an empty line or Esc 
        alert('Canceled');
    } else if (password !== database[userEmail]) {
        //if visitor entered wrong password
        alert('Wrong password');
    } else {
        //if password is correct
        //Suggest user/admin to change his password 
        changePassword = confirm('Do you want to change your password?');
        if (changePassword) {
            // If user clicked ‘Ok’(change password)
            password = prompt('Enter the old password');
            if (!password) {
                //If old password is an empty line or ‘Cancel’ 
                alert('Canceled');
            } else if (password !== database[userEmail]) {
                // if visitor entered wrong old password
                alert('Wrong password');
            } else {
                //If the visitor entered correct old password 
                newPassword = prompt('Enter the new password');
                if (!newPassword) {
                    //If newPassword is an empty line or ‘Cancel’ 
                    alert('Canceled');
                } else if (newPassword.length < newPasswordValidLen) {
                    //If newPassword length less than 6 
                    alert('It’s too short password. Sorry')
                } else {
                    //if new password is valid
                    newPassword2 = prompt('Enter the new password again');
                    if (newPassword === newPassword2) {
                        //If user write the same new password
                        alert('You have successfully changed your password.');
                        database[userEmail] = newPassword;
                    } else {
                        //If the inputted value doesn’t match the new password
                        alert('You wrote the wrong password.');
                    }
                }
            }
        } else {
            //if change password has canceled
            alert('You have failed the change.');
        }
    }
} else {
    //If the visitor has entered an email address that is not in the database
    alert('I don’t know you');
}