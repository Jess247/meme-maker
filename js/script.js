import { catsData } from './data.js'

const selectEmotion = document.querySelector('#select-emotion')
const form = document.querySelector('#form')
const thumbnailsContainer = document.querySelector('#thumbnails') 
const modal = document.querySelector('#modal')
const modalInner = document.querySelector('#modal-inner')

form.addEventListener('submit', renderCat)

thumbnailsContainer.addEventListener('click', openModal)
modal.addEventListener('click', closeModal )

function openModal(e) {
    let imgHtml = ``
    const imgEl = e.target
    imgHtml = `<img class="modal-img" src="${imgEl.src}" alt="${imgEl.alt}">`
    console.log(imgEl)
    modalInner.innerHTML = imgHtml
    modal.classList.remove("hidden")
}

function closeModal() {
    modal.classList.add('hidden')
}

function renderCat(e){
    e.preventDefault()
    let imgHTML = ``
    for (let cat of catsData) {
        if (cat.emotionTags.includes(selectEmotion.value)) {
            imgHTML += `<img class="thumbnail" src="../img/${cat.image}" alt="${cat.alt}"> `
        }
        thumbnailsContainer.innerHTML =  imgHTML
    }
}

function getEmotions() {
    const emotionsArray =  []
    for (let cat of catsData){
        for (let emotion of cat.emotionTags){
            if(!emotionsArray.includes(emotion)) {
                emotionsArray.push(emotion)
            }
        }
    }
    return emotionsArray
}

function renderEmotionsOptions(cats){
    
    let select = ``
    const emotions = getEmotions()
    for (let emotion of emotions){
        select += `
        <option value="${emotion}">${emotion}</option>`
    }
    selectEmotion.innerHTML += select
}

renderEmotionsOptions(catsData)



