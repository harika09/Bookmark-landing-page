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



let btnIMG = document.getElementById('arrow');
let btnIMG1 = document.getElementById('arrow1');
let btnIMG2= document.getElementById('arrow2');
let btnIMG3 = document.getElementById('arrow3');
let div1 = document.getElementById('answer');
let div2 = document.getElementById('answer2');
let div3= document.getElementById('answer3');
let div4 = document.getElementById('answer4');

btnIMG.addEventListener('click', ()=> {
    if(div1.style.display == 'block'){
        div1.style.display = "none"
        btnIMG.style.transform ="rotate(360deg)";
    } else {
        div1.style.display = "block"
        btnIMG.style.transform="rotate(180deg)";
    }
}); 

btnIMG1.addEventListener('click', ()=> {
    if(div2.style.display == 'block'){
        div2.style.display = "none"
        btnIMG1.style.transform ="rotate(360deg)";
    } else {
        div2.style.display = "block"
        btnIMG1.style.transform="rotate(180deg)";
    }
}); 

btnIMG2.addEventListener('click', ()=> {
    if(div3.style.display == 'block'){
        div3.style.display = "none"
        btnIMG2.style.transform ="rotate(360deg)";
    } else {
        div3.style.display = "block"
        btnIMG2.style.transform="rotate(180deg)";
    }
}); 

btnIMG3.addEventListener('click', ()=> {
    if(div4.style.display == 'block'){
        div4.style.display = "none"
        btnIMG3.style.transform ="rotate(360deg)";
    } else {
        div4.style.display = "block"
        btnIMG3.style.transform="rotate(180deg)";
    }
}); 


// ==== Validate Email ==== \\


function validation(){

    const email = document.getElementById("email").value;   
    var pattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;

    if(email == ''){
        console.log("empty");
        errorMessage();
    }
    else if(email.match(pattern)){
        console.log("valid");
        successMessage();
        
    }
    else{
        console.log("invalid");
        errorMessage();
    }

}

function errorMessage(){
    const validateError = document.getElementById('invalid');
    const errorText = document.getElementById('error-text');
    const erroricon = document.querySelector('.error');
   
    validateError.style.backgroundColor = "red";
    validateError.style.padding = "3px";
    validateError.style.borderRadius = "5px";
    errorText.innerHTML = ("Whoops, make sure it's an email");
    errorText.style.fontSize = "13px";
    errorText.style.marginLeft = "8px";
    errorText.style.marginTop = "20px";
    errorText.style.color = "white";
    erroricon.style.display = "block";
}

function successMessage(){
    const errorText = document.getElementById('error-text');
    const validateError = document.getElementById('invalid');
    const erroricon = document.querySelector('.error');


    validateError.style.backgroundColor = "";
    errorText.innerHTML = ("");
    erroricon.style.display = "none";
    email = document.getElementById('email').value= " " ;
    Swal.fire(
        'Thank you',
        'Subscription Confirm!',
        'success'
      )
}
