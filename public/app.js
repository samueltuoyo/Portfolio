const menuBar = document.querySelector('.fa-bars');
const mobNav = document.querySelector('.toggle');
const toggleTheme = document.querySelector('.fa-sun');
const header = document.querySelector('header');
const footer = document.querySelector('footer');
const icons = document.querySelectorAll('.icons i');
const mobNavLinks = document.querySelectorAll('.toggle a');
const ProjectsBox = document.querySelectorAll('.box');
const ProjectsPreviewBtn = document.querySelectorAll('.bg');
const ProjectsGithubBtn = document.querySelectorAll('.gb');
const btn = document.querySelector('button[type="submit"]');
const message = document.querySelector('.message');
let isMenuOpen = 'false';    
menuBar.addEventListener('click', () => {
    isMenuOpen = !isMenuOpen;
   if (isMenuOpen) {
    mobNav.style.width = '200px';
    mobNav.style.zIndex = '1000';
    mobNav.style.left = '0';
    menuBar.classList.add('fa-times');
   } 
   
   else{
    mobNav.style.width = '0';
    mobNav.style.left = '-100px';
    menuBar.classList.remove('fa-times');
   }
});
toggleTheme.addEventListener('click', () => {
    document.body.classList.toggle('light-theme');
    if (document.body.classList.contains('light-theme')) {
        header.style.backgroundColor = footer.style.backgroundColor = 'white';
        toggleTheme.classList = 'fas fa-moon'
        mobNav.style.backgroundColor = 'white';
        mobNav.style.color = btn.style.color = 'black';
        btn.style.backgroundColor = 'purple';
        btn.style.color = 'white';
        message.style.backgroundColor = 'black';
        message.style.color = 'white';
        icons.forEach(icon => {
        icon.style.backgroundColor = 'black';
        icon.style.color = 'white';
        });
        ProjectsBox.forEach(article => {
        article.style.backgroundColor = 'whitesmoke';
        article.style.color = 'black';
       });
       ProjectsGithubBtn.forEach(btn => {
           btn.style.color = 'black';
       });
    }
    else{
        header.style.backgroundColor = footer.style.backgroundColor = 'black';
        toggleTheme.classList = 'fas fa-sun'
        mobNav.style.backgroundColor = btn.style.color = 'black';
        mobNav.style.color = btn.style.backgroundColor = 'white';
        icons.forEach(icon => {
        icon.style.backgroundColor = 'black';
        icon.style.color = 'white';
        });
        ProjectsBox.forEach(article => {
        article.style.backgroundColor = 'black';
        article.style.color = 'white';
        });
        ProjectsGithubBtn.forEach(btn => {
           btn.style.color = 'white';
       });

    }
});
mobNavLinks.forEach((link) => {
   link.addEventListener('click', () => {
   mobNavLinks.forEach((others) => {
       others.classList.remove('active');
   })
       link.classList.toggle('active');
   })
});

document.getElementById('contactForm').addEventListener('submit', function(event) {
  event.preventDefault(); // Prevent the default form submission
  
  // Assuming the email is sent successfully, you can reset the form here
  this.reset();
  
  alert('Your message has been sent successfully!');
});
window.onload = () => {
  message.style.right = '0px';

  setTimeout(() => {
    message.style.right = '-100%';
  }, 3000)
}

