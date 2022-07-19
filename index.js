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