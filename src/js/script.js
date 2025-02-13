document.addEventListener('DOMContentLoaded', function() {
    var parallax = document.querySelector('.about-background');
    var speed = 0.5; // Adjust this value to control the speed of the parallax effect

    window.addEventListener('scroll', function() {
        var offset = window.pageY0ffset;
        parallax.style.backgroundPositionY = -offset * speed + 'px';
    });
});