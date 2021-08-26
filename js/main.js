/*********** menu bar ****************** */
let navLinks = document.getElementById("navlinks");
function hidemenu() {
    navLinks.style.right = "-200px";
}
function showmenu() {
    navLinks.style.right = "0";
}
/*********** End menu bar ****************** */
// start slide videos 
let changeVideo = document.getElementById("slideVideo");
function slider(vd) {
    changeVideo.src = vd;
}
// start slide videos 