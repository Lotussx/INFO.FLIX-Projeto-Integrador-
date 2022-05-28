indexAtual = 0,
images = document.querySelectorAll("#slide div")
max = images.length;

function nextImage() {

    images[indexAtual]
        .classList.remove("selected")

    indexAtual++

    if (indexAtual >= max)
        indexAtual = 0

    images[indexAtual]
        .classList.add("selected")
}

function start() {
    let time = 10000;
    setInterval(() => { nextImage() }, time)

}

window.addEventListener("load", start)