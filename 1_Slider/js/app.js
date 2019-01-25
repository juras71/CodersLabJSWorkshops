document.addEventListener("DOMContentLoaded", function () {
    var nextBtn = document.getElementById('nextPicture')
    var prevBtn = document.getElementById('prevPicture')
    var liList = document.querySelector('.slider').querySelectorAll('li')
    var liArray = []

    for (var i = 0; i < liList.length; i++) {
        liArray.push(liList[i])
    }
    var imgIndex = 0
    liList[0].classList.add('visible')
    nextBtn.addEventListener('click', function () {
        if (imgIndex < liList.length - 1) {
            imgIndex += 1
        }

        if (imgIndex < liList.length) {
            liList[imgIndex].classList.add('visible')
            liList[imgIndex - 1].classList.remove('visible')
        }
    })
    prevBtn.addEventListener('click', function () {
        if (imgIndex > 0) {
            imgIndex -= 1
        }
        if (imgIndex >= 0) {
            liList[imgIndex].classList.add('visible')
            liList[imgIndex + 1].classList.remove('visible')
        }
    })

})