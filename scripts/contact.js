(() => {
    emailjs.init("3X1MY3Km5cY_HXqro");
})();

window.onload = () => {
    document.getElementById('contact_form').addEventListener('submit', (e) => {
        e.preventDefault();

        if(this.user_name.value.length < 1
            || this.user_email.value.length < 1
            || this.user_phone.value.length < 1
            || this.message.value.length < 1){
            window.alert('Please fill out all fields.');
            return;
        }

        this.contact_number.value = Math.random() * 100000 | 0;
        emailjs.sendForm('personal_contact_service', 'contact_form', '#contact_form')
            .then(() => {
                this.user_name.value = '';
                this.user_email.value = '';
                this.user_phone.value = '';
                this.message.value = '';
                console.log('Contact Form Submitted');
                window.alert('Contact Form Submitted');
            })
            .catch((err) => {
                console.log('ERROR: ', err);
            });
    });
}