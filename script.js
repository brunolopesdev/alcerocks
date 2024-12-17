const button = document.getElementById('button')
const modal = document.getElementById('modal')

button.addEventListener('click', function(e) {
    console.log('modal', modal)
    modal.style.display = 'block'
})