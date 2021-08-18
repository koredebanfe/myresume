const resume = document.querySelector('.resume');
const intro = document.querySelector('.intro');
const  details = document.querySelector('.container'); 

resume.addEventListener('click', ()=>{
    details.classList.remove('hide');
    intro.classList.add('hide');
});