function sendMail(event) {
    event.preventDefault();

    var params = {
        name: document.getElementById('name').value,
        email: document.getElementById('email').value,
        phone: document.getElementById('phone').value,
        message: document.getElementById('message').value,
    };
    
    const serviceId = 'service_rat7k6c';
    const templateId = 'template_ami2o05';
   
    emailjs.send(serviceId, templateId, params)
    .then(res => {
   
        document.getElementById('name').value = ''; 
        document.getElementById('email').value = '';
        document.getElementById('phone').value = '';
        document.getElementById('message').value = ''; 
        console.log(res);
        alert('Your message was sent successfully');
    }) 
    .catch(err => {
        console.log(err);
        alert('There was an error sending your message. Please try again later.');
    });
};

function toggleMenu() {
    const menu = document.getElementById('menu');
    menu.classList.toggle('hidden');
  }

AOS.init({
    duration: 2000, 
    once: true, 
});
