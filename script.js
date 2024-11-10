var togglebtn = document.getElementById('toggle-skills');
var skills = document.getElementById('skills');
var togglebutn = document.getElementById('toggle-education');
var education = document.getElementById('education');
var togglebutton = document.getElementById('toggle-info');
var info = document.getElementById('Personal-info');
togglebtn.addEventListener('click', function () {
    if (skills.style.display === 'none') {
        skills.style.display = 'block';
        togglebtn.innerText = "Hide Skills";
    }
    else {
        skills.style.display = 'none';
        togglebtn.innerText = "Show Skills";
    }
});
togglebutn.addEventListener('click', function () {
    if (education.style.display === 'none') {
        education.style.display = 'block';
        togglebutn.innerText = "Hide Education";
    }
    else {
        education.style.display = 'none';
        togglebutn.innerText = "Show Education";
    }
});
togglebutton.addEventListener('click', function () {
    if (info.style.display === 'none') {
        info.style.display = 'block';
        togglebutton.innerText = "Hide Information";
    }
    else {
        info.style.display = 'none';
        togglebutton.innerText = "Show Information";
    }
});
