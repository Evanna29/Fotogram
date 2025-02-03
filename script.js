let imageNames =["ai-generated-9248643_1280.jpg",
    "alps-9266131_1280.jpg",
    "chinese-lion-6976588_1280.png",
    "cyberpunk-5135622_1280.jpg",
    "eurasier-8627090_1280.jpg",
    "little-red-riding-hood-9296256.jpg",
    "milky-way-6337038_1280.jpg",
    "musician-349790_1280.jpg",
    "jellyfish-6653502_1280.jpg",
    "train-8853636_1280.jpg",
    "truck-8497705_1280.jpg",
    "woman-8937604_1280.png"];



const imageContainer = document.getElementById("image-container");
const modal = document.getElementById("modal-window");
let modalImg = document.getElementById("modal-img");
let modalCloseBtn = document.getElementsByClassName("close-modal-btn");
let overlay = document.getElementById("overlay");


function preventBubbling(event){
    event.stopPropagation();
}


function displayImgs() {
    modal.classList.add("modal-closed");
    imageContainer.innerHTML="";

    for (let i= 0; i < imageNames.length;i++) {
        imageContainer.innerHTML += `
        <img onclick="openModal(${i})"
        src="./assets/img/${imageNames[i]}" 
        alt="image"
        class="image">`;
    }
}

function openModal(i){
    modal.classList.remove("modal-closed");
    modal.innerHTML = modalTemplate(i);
    overlay.classList.remove("d_none");
}

function closeModal(){
    modal.classList.add("modal-closed");
    overlay.classList.add("d_none");
}

function nextImg(i){
    if (i === imageNames.length-1) {
        modal.innerHTML = modalTemplate(0);
    }
    else {
        modal.innerHTML = modalTemplate(i+1);
    }
}

function previousImg(i){
    if (i === 0) {
        modal.innerHTML = modalTemplate(imageNames.length-1)
    }
    else {
        modal.innerHTML = modalTemplate(i-1);
    }
}

function modalTemplate(i){

            return  `<div class="modal-header">
             <p>${imageNames[i]}</p>
             <img
             onclick="closeModal()"
             class="close-modal-btn"
             src="./assets/img/square-xmark-solid.svg">
            
             </div>
             <img
             src="./assets/img/${imageNames[i]}"
             alt="Image"
             id="modal-img"
             class="modal-img"
             />
             <div class="modal-footer">
             <img src="./assets/img/arrow-left-long-solid.svg" id="previous-img" onclick="previousImg(${i})">
             <img src="./assets/img/arrow-right-long-solid.svg" id="next-img" onclick="nextImg(${i})">
            
             <div>`
}




