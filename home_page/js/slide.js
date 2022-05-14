let time = 2000,
    indexAtual = 0,
    images = document
        .querySelectorAll("#slide img")
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

    setInterval(() => {
        // troca de image
        nextImage()
    }, time)
}

window.addEventListener("load", start)