import setAttributes from './utils/setAttributes.js'

const galleryContainer = document.getElementById('gallery-container')
const modalOverlay = document.getElementById('modal-overlay')

fetch('data/photos.json')
    .then(res => {
        if (!res.ok) {
            throw new Error('Network error')
        }
        return res.json()
    })
    .then(photos => {
        // console.log(photos)
        photos.forEach(photo => {
            renderPhoto(photo)
        })
    })
    .catch(err => console.error('Fetching data was unsuccessful: ', err))

function openImageModal(e) {
    const { src, alt, dataset, title } = e.target

    const closeModalBtn = document.createElement('button')
    closeModalBtn.textContent = 'Close'
    closeModalBtn.addEventListener('click', closeImageModal)
    closeModalBtn.setAttribute('id', 'close-modal-btn')

    modalOverlay.append(closeModalBtn)
    modalOverlay.style.display = 'block'

    const modalImage = document.createElement('img')
    const modalImgToRender = setAttributes(modalImage, {
        'src': src,
        'alt': alt,
        'width': dataset.fullWidth,
        'height': dataset.fullHeight,
        'id': 'modal-image'
    })
    modalOverlay.append(modalImgToRender)
    document.body.style.overflow = 'hidden'
}

function closeImageModal() {
    modalOverlay.style.display = 'none'
    modalOverlay.innerHTML = ''
    document.body.style.overflow = 'initial'
}

function renderPhoto(photo) {
    const user = photo.user.name
    const userCredit = `Photo by ${user} on Unsplash`
    const altText = photo.description 
        ? photo.description
        : userCredit
    
    const imageContainer = document.createElement('div')
    imageContainer.setAttribute('class', 'gallery-image-container')
    const image = document.createElement('img')
    const imgToRender = setAttributes(image, {
        'src': photo.urls.regular,
        'alt': altText,
        'title': userCredit,
        'data-full-width': photo.width,
        'data-full-height': photo.height,
        'class': 'gallery-image'
    })
    imgToRender.addEventListener('click', openImageModal)
    imageContainer.append(imgToRender)
    galleryContainer.append(imageContainer)
}