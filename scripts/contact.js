(() => {
    emailjs.init("3X1MY3Km5cY_HXqro");
})();

window.onload = () => {
    document.getElementById('contact_form').addEventListener('submit', (e) => {
        e.preventDefault();
        this.contact_number.value = Math.random() * 100000 | 0;
        emailjs.sendForm('personal_contact_service', 'contact_form', '#contact_form')
            .then(() => {
                console.log('Contact Form Submitted');
            })
            .catch((err) => {
                console.log('ERROR: ', err);
            });
    });
}