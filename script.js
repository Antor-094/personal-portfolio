

// header toggle
document.addEventListener('contextmenu', function(event) {
   event.preventDefault();
 });
 let MenuBtn = document.getElementById('MenuBtn')

 MenuBtn.addEventListener('click',function(e){
    document.querySelector('body').classList.toggle('mobile-nav-active')
    this.classList.toggle('fa-xmark')
 })

 // typing effect
 let typed = new Typed('.auto-input',{
    strings:['MERN Stack Developer'],
    typeSpeed:100,
    backSpeed:100,
    backDelay:2000,
    loop:true
 })

//  Active link  state on scroll

// get all links
let navLinks = document.querySelectorAll('nav ul li a')
//get all sections
let sections = document.querySelectorAll('section')
window.addEventListener('scroll',function(){
   const scrollPos = this.window.scrollY + 20
   sections.forEach(section=>{
      if(scrollPos>section.offsetTop && scrollPos < (section.offsetTop + section.offsetHeight)){
         navLinks.forEach(link=>{
            link.classList.remove('active');
            if(section.getAttribute('id')===link.getAttribute('href').substring(1)){
               link.classList.add('active')
            }
         })
      }
   })
})


    document.getElementById('myForm').addEventListener('submit', function(event) {
        event.preventDefault();

        // Check if all fields are filled
        var name = document.getElementById('name').value;
        var email = document.getElementById('email').value;
        var subject = document.getElementById('subject').value;
        var msg = document.getElementById('msg').value;

        if (!name || !email || !subject || !msg) {
            alert('All fields must be filled!');
            return;
        }

        // Send the email
        emailjs.send('service_5rvargm', 'template_dbna3ws', {
            from_name: name,
            from_email: email,
            subject: subject,
            message: msg
        })
        .then(function(response) {
            console.log('SUCCESS!', response.status, response.text);
            alert('Email sent successfully');
        }, function(error) {
            console.log('FAILED...', error);
            alert('Error occurred');
        });
    });
