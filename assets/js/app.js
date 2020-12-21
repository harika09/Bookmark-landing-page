// ==== Menu Toggle ==== //
function toggleMenu(){
    const header = document.querySelector('header');
    const logo  = document.querySelector('.logo');
    const menutoggle = document.querySelector('.menu-toggle');
    const nav = document.querySelector('.nav-menu');
    menutoggle.classList.toggle('active');
    nav.classList.toggle('active');
    header.classList.toggle('active')
    logo.classList.toggle('active')

}

// ===== Change Color of navitation bar when triggered ==== //
window.addEventListener('scroll', function(){
    const header = document.querySelector('header');
    header.classList.toggle("sticky", window.scrollY > 0);
})



// ==== Show / Hide ==== \\
function shows(){
    const show = document.getElementById('answer');
    const answer2 = document.getElementById('answer2');

    if (show.style.display === 'block'){
        show.style.display = "none";
        
    }  else {
        show.style.display = "block";
    }

    if  (answer2.style.display === 'block') {
        answer2.style.display = "none";
    } else {
        answer2.style.display = "block";
    }
   
}



