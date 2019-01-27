document.addEventListener("DOMContentLoaded", function () {

var mainMenu = document.querySelectorAll('.nav>ul>li')

    for (var i=0; i<mainMenu.length; i++){
        mainMenu[i].addEventListener('mouseover',function () {
            if (this.firstElementChild!==null){
                var subMenu =this.firstElementChild
                subMenu.style.display='inline-block'
            }
            })
        mainMenu[i].addEventListener('mouseout',function () {
            if (this.firstElementChild!==null){
                var subMenu =this.firstElementChild
                subMenu.style.display='none'
            }
        })
    }

})