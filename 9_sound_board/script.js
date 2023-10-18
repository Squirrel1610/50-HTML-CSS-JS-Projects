const sounds = ["coy", "nt", "nkmm"];
const buttons = document.getElementById("buttons");

sounds.forEach(sound => {
    const button = document.createElement("button");
    button.classList.add("btn");
    button.innerText = sound;

    button.addEventListener("click", () => {
        stopAnotherSongs();
        document.getElementById(sound).play();
    })

    buttons.appendChild(button);
})

function stopAnotherSongs() {
    sounds.forEach(sound => {
       const song = document.getElementById(sound);
       song.pause();
       song.currentTime = 0;
    })
}