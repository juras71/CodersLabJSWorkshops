/*
 <div class="fullScreen">
   <img src="./images/wrong.png">
   <button class="close">Close</button>
 </div>
 this.firstElementChild.src
 */
document.addEventListener('DOMContentLoaded', function () {

    var galleryList = document.querySelectorAll('li')
    console.log(galleryList)
    var bodyTag = document.querySelector('body')
    console.log(bodyTag)

    var newDiv = document.createElement('div')

    for (let i = 0; i < galleryList.length; i++) {
        galleryList[i].addEventListener('click', function () {

            let currUrl = this.firstElementChild.getAttribute('src')
            let fullScreen = ` <div class="fullScreen">
                <img src="${currUrl}">
                <button class="close">Close</button>
                </div>`;
            bodyTag.appendChild(newDiv)
            newDiv.innerHTML = fullScreen
            let closeBtn = document.querySelector('.close')
            closeBtn.addEventListener('click', function () {
                bodyTag.removeChild(bodyTag.lastElementChild)

            })
        })
    }

})

