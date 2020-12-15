let dino = document.getElementById("dino");

// document.addEventListener('keypress', function (event) {
//     if (event.keyCode === 32) {
//         if (dino.classList != "jump") {
//             dino.classList.add('jump');
//         }
//         setTimeout(() => {
//             dino.classList.remove('jump');
//         }, 800)
//     }
// });

function jump() {
    if (dino.classList != "jump") {
        dino.classList.add('jump');
    }
    setTimeout(() => {
        dino.classList.remove('jump');
    }, 800)
}

