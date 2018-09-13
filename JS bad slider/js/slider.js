var sliderBlock = document.querySelector(".slider__slide"),
    pauseButton = document.querySelector(".slider__pause"),
    nextButton = document.querySelector(".slider__arrow--next"),
    previousButton = document.querySelector(".slider__arrow--previous"),
    index = 0,
    paused = false,
    pressedDown = false,
    images = [
        '0.jpg',
        '1.jpg',
        '2.jpg',
        '3.jpg',
        '4.jpg',
    ];

sliderBlock.style.backgroundImage = "url('img/" + images[index] + "')";

window.addEventListener("keydown", function(e) {
    if (!pressedDown) {
        if (e.keyCode == 37) {
            slide("previous");
        } else if (e.keyCode == 39) {
            slide("next");
        } else if (e.keyCode == 32) {
            togglePause();
        }
        pressedDown = true;
    }
});

window.addEventListener("keyup", function(e) {
    if (pressedDown) pressedDown = false;
});

var sliderInterval = setInterval(function(e) {
    slide("next");
}, 2000)

function slide(direction) {
    if (direction == "next") {
        index = (index+1) % images.length;
    } else if (direction == "previous") {
        index = index > 0 ? index-1 : images.length-1;
    }
    sliderBlock.style.backgroundImage = "url('img/" + images[index] + "')";
}

function togglePause() {
    if (!paused) {
        clearInterval(sliderInterval);
        paused = true;
        pauseButton.innerText = "►";
    } else {
        sliderInterval = setInterval(function(e) {slide("next")}, 2000);
        paused = false;
        pauseButton.innerText = "||";
    }
}
