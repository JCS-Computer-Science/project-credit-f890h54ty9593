const navSlide = () => {
    const seperate = document.querySelector('.seperate');
    const nav = document.querySelector('.nav-links');
    const navLinks = document.querySelectorAll('.nav-links li')
    
    seperate.addEventListener('click',()=> {
        //toggle nav
        nav.classList.toggle('nav-active');

          // animate links
        navLinks.forEach((link, index) => {
            if (link.style.animation){
                link.style.animation = ''
            }
            else{
                link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.6 }s`;
            }  
        });
        //seperate animation
        seperate.classList.toggle('toggle');
  
    });

 
}


navSlide();