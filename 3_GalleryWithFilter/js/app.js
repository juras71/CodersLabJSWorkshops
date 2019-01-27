document.addEventListener('DOMContentLoaded', function () {
    var imgList = document.getElementById('gallery').querySelectorAll('img')
    var showBtn = document.getElementById('showButton'), hideBtn = document.getElementById('hideButton')
    console.log(showBtn, hideBtn)
    var tagInput = document.getElementById('tagInput')
    console.log(tagInput)
    showBtn.addEventListener('click', function () {
        var imgTags = []
        for (var i = 0; i < imgList.length; i++) {
            imgList[i].classList.add('invisible')
            var tmp = []
            imgTags.push(imgList[i].dataset.tag.split(','))
            if (imgTags[i].indexOf(tagInput.value) !== -1) {
                imgList[i].classList.remove('invisible')
            }
            else if (tagInput.value===''){
                imgList[i].classList.remove('invisible')
            }
        }
        tagInput.value = ''
    })
    hideBtn.addEventListener('click', function () {

        var imgTags = []
        for (var i = 0; i < imgList.length; i++) {
            imgList[i].classList.add('invisible')
            var tmp = []
            imgTags.push(imgList[i].dataset.tag.split(','))

            if (imgTags[i].indexOf(tagInput.value) !== -1) {
                imgList[i].classList.add('invisible')
            }
            else if (tagInput.value===''){
                imgList[i].classList.remove('invisible')
            }
        }
        tagInput.value = ''
    })
})