document.addEventListener('DOMContentLoaded',function(){
    let message = document.querySelector('.message');
    let submitForm = document.querySelector('form');
    let email = document.getElementById('email');

    const validateEmail = (email) => {
        return String(email)
            .toLocaleLowerCase()
            .match(
                /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
            );
    }

    const formSubmission = () => {
        if (validateEmail(email.value)) {
            message.innerHTML = `<h3>Thank you! Your email address ${email.value} has been added to our mailing list!</h3>`;
        } else {
            message.innerHTML = `<h3>Please enter a valid email address.</h3>`;
        }
    }
    submitForm.addEventListener('submit', function(event){
        event.preventDefault();
        formSubmission();
    });

})
