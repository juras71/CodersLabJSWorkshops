var toolTipText = document.createElement('div')


document.addEventListener("DOMContentLoaded", function () {

    var tTips = document.querySelectorAll('.tooltip')
    console.log(tTips)
    for (var i = 0; i < tTips.length; i++) {
        tTips[i].addEventListener('mouseover', function () {
            toolTipText.innerHTML = `<span class="tooltipText">${this.dataset.text}</span>`

            this.appendChild(toolTipText)

        })
        tTips[i].addEventListener('mouseout', function () {
 //I've noticed that line below is not necessary on Chrome and Firefox.Just in case.
            this.removeChild(toolTipText)

        })
    }
})