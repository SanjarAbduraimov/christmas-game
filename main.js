let dino = document.getElementById("dino");

document.addEventListener('keypress', function (event) {
    if (event.keyCode === 32) {
        dino.classList.add('jump')
    }
    setTimeout(() => {
        dino.classList.remove('jump');
    }, 800)
});







