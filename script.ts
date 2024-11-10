const togglebtn = document.getElementById('toggle-skills') as HTMLButtonElement;
const skills = document.getElementById('skills') as HTMLElement;
const togglebutn = document.getElementById('toggle-education') as HTMLButtonElement;
const education = document.getElementById('education') as HTMLElement;
const togglebutton = document.getElementById('toggle-info') as HTMLButtonElement;
const info = document.getElementById('Personal-info') as HTMLElement;

togglebtn.addEventListener('click', ()=> {
    if(skills.style.display === 'none'){
        skills.style.display = 'block';
        togglebtn.innerText = "Hide Skills"
    }
    else{
        skills.style.display ='none';
        togglebtn.innerText = "Show Skills"
         
    }
})
togglebutn.addEventListener('click', ()=> {
    if(education.style.display === 'none'){
        education.style.display = 'block';
        togglebutn.innerText = "Hide Education"
    }
    else{
        education.style.display ='none';
        togglebutn.innerText = "Show Education"
         
    }
})
togglebutton.addEventListener('click', ()=> {
    if(info.style.display === 'none'){
        info.style.display = 'block';
        togglebutton.innerText = "Hide Information"
    }
    else{
        info.style.display ='none';
        togglebutton.innerText = "Show Information"
         
    }
})