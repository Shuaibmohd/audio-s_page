const audios = ['little-birds', 'light-rain', 'keyboard-typing', 'epic-orchestra', 'water-flowing']

audios.forEach(audio => {
    const btn = document.createElement('button');
    btn.classList.add('btn');

    btn.innerText = audio;

    btn.addEventListener('click', () => {

        stopMusic();

        document.getElementById(audio).play();
    })

    document.getElementById('buttons').appendChild(btn);

})

function stopMusic() {
    audios.forEach(audio => {
        const song = document.getElementById(audio)

        song.pause()
        song.currentTime = 0
    })
}