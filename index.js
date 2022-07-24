const headingOne = document.querySelector('#h-one')
const btnOne = document.querySelector('#btn-one')
const txtOne = document.querySelector('#txt-one')

btnOne.addEventListener('click', updateBtnOne)

function updateBtnOne() {
    if(btnOne.textContent === 'Start machine') {
    headingOne.textContent = 'Machine: ON'
    btnOne.textContent = 'Stop machine'
    txtOne.innerHTML = 'The machine is running'
    }
    else {
    headingOne.textContent = 'Machine: OFF'
    btnOne.textContent = 'Start machine'
    txtOne.innerHTML = 'The machine is stopped'
    }
}

const favoriteArtist = document.querySelector('#favorite-artists')
const artistText = document.querySelector('#artist-text')

favoriteArtist.addEventListener('change', updateArtist)

function updateArtist() {
    const choice = favoriteArtist.value 

    switch (choice) {
        case 'freddie':
            artistText.textContent = 'Freddie Mercury is a favorite of Jeannie and mine. We had a phase during our marriage where all we would listen to was Freddie Mercury. We even named our first dog "Freddie" after him.'
            break;
        case 'kendrick':
            artistText.textContent = 'Kendrick Lamar is one of my all time favorites. To Pimp A Butterfly is truly a masterpiece. His other albums are also good, he rarely misses.'
            break;
        case 'elton':
            artistText.textContent = 'Elton John has played a lot of songs I liked as a kid but never knew it was him who sang them. This is another artist Jeannie and I share in common.'
            break;
        case 'elvis':
            artistText.textContent = 'Elvis Presley was Jeannie\'s favorite when I met her. After listening to Elvis many times he finally grew on me. He sang our wedding song "Welcome To My World".'        
            break;
        case 'frank':
            artistText.textContent = 'Frank Ocean makes music I could always listen to. His album "blond" got me to be a fan of him again. He shocked the whole music industry when he dropped this album.'
            break;
        default:
            artistText.textContent = ''
    }
}