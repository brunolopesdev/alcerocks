const button = document.getElementById('button')
const modal = document.getElementById('modal')
const closeButton = document.getElementById('closeButton')
const updateButton = document.getElementById('updateButton')
const randomImage = document.getElementById('randomImage')

// buscar imagem aleatória
async function fetchRandomImage() {
    try {
        const response = await fetch(
          "https://api.unsplash.com/photos/random?client_id=KSO_WdyCrAIxubeWYgYXOvnuygn20Uw2bp7aqn32MKk"
        );
        const data = await response.json()
        randomImage.src = data.urls.regular
    } catch (error) {
        console.error('Erro ao buscar imagem:', error)
    }
}

// abrir modal
button.addEventListener('click', function() {
    modal.style.display = 'block'
    fetchRandomImage()
})

// fechar modal
closeButton.addEventListener('click', function() {
    modal.style.display = 'none'
})

// fechar modal clicando fora
modal.addEventListener('click', function(e) {
    if (e.target === modal) {
        modal.style.display = 'none'
    }
})

// atualizar a imagem
updateButton.addEventListener('click', fetchRandomImage)