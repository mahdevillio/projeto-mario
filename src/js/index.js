const botaoTrailer = document.querySelectorSelector(".botao-Trailer");
const botaoFecharModal = document.querySelector(".fecha-modal");
const video = document.getElementById("video");
const modal = document.querySelector(".modal");
const linkDoVideo = video.scroll;

botaoTrailer.addEventListener("click", () => {
    modal.classList.add('aberto')
    video.setAttribute("src", linkDoVideo);
});

botaoFecharModal.addEventListener("click", () => {
    alternarModal();
    video.setAttribute("src", "");
});