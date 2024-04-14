// N A V B A R
window.onscroll = function() {stickyBar()};

var nav = document.getElementById("nav");

var sticky = nav.offsetTop;

function stickyBar(){
    if (window.scrollY >= sticky){
        nav.classList.add("sticky")
    } else {
        nav.classList.remove("sticky")
    }
}

// M Y  I N F O R M A T I O N S

function toggle(){
    var blur = document.getElementById('blur');
    blur.classList.toggle('active');
    var popup_hobby = document.getElementById('popup_hobby');
    popup_hobby.classList.toggle('active');
}

function toggle_skills(){
    var blur = document.getElementById('blur');
    blur.classList.toggle('active');
    var popup_hobby = document.getElementById('skills_popup');
    popup_hobby.classList.toggle('active');
}

function toggle_educ(){
    var blur = document.getElementById('blur');
    blur.classList.toggle('active');
    var popup_hobby = document.getElementById('educ_popup');
    popup_hobby.classList.toggle('active');
}

// S E R V I C E S

function toggle_video(){
    var blur = document.getElementById('blur');
    blur.classList.toggle('active');
    var popup_hobby = document.getElementById('video_popup');
    popup_hobby.classList.toggle('active');
}

function toggle_graphics(){
    var blur = document.getElementById('blur');
    blur.classList.toggle('active');
    var popup_hobby = document.getElementById('graphics_popup');
    popup_hobby.classList.toggle('active');
}

function toggle_programmer(){
    var blur = document.getElementById('blur');
    blur.classList.toggle('active');
    var popup_hobby = document.getElementById('programmer_popup');
    popup_hobby.classList.toggle('active');
}

function toggle_webdev(){
    var blur = document.getElementById('blur');
    blur.classList.toggle('active');
    var popup_hobby = document.getElementById('webdev_popup');
    popup_hobby.classList.toggle('active');
}

function toggle_email(){
    var blur = document.getElementById('blur');
    blur.classList.toggle('active');
    var popup_hobby = document.getElementById('email_popup');
    popup_hobby.classList.toggle('active');
}

function toggle_copywriting(){
    var blur = document.getElementById('blur');
    blur.classList.toggle('active');
    var popup_hobby = document.getElementById('copywriting_popup');
    popup_hobby.classList.toggle('active');
}
