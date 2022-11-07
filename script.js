const toggleButton = document.getElementsByClassName('navbar-toggle')[0];
const navbarLinks = document.getElementsByClassName('navbar-links');
toggleButton.addEventListener('click', function() {
    for(var i=0; i<navbarLinks.length; i++)
    navbarLinks[i].classList.toggle('active')
});

var i = 0;
var images = [];
var time = 3000;

images[0] = 'images/logistics_container.jpg';
images[1] = 'images/ocean_port.jpg';
images[2] = 'images/con_ports.jpg';
images[3] = 'images/sideview_seafreight.jpg';

function changeImg(){
    document.slide.src = images[i];

    if(i < images.length -1){
        i++;
    } else {
        i = 0;
    }
    setTimeout('changeImg()', time);
}

window.onload = changeImg;