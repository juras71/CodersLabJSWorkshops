document.addEventListener("DOMContentLoaded", function () {
    var counterDiv = document.createElement('div')
    var toDoCounter = 0
    var newTask = document.createElement('li')
    newTask.innerHTML = ''
    var newTaskClone = newTask.cloneNode(true)
    var addTaskButton = document.getElementById('addTaskButton')
    var tickedImage = document.createElement('div')
    tickedImage.classList.add('tickedImage');
    addTaskButton.addEventListener('click', function () {
        var taskInput = document.getElementById('taskInput')
        toDoCounter+=1
        counterDiv.innerText='Liczba zadań do wykonania: '+toDoCounter
        this.parentElement.firstElementChild.appendChild(counterDiv)
        this.nextElementSibling.firstElementChild.appendChild(newTaskClone)
        newTaskClone.innerHTML += ` 
        <ul class="toDoTask">${taskInput.value}<span class="checked"></span>
        <li class="buttons">
        <button class="deleteBtn"></button>
        <button class="completeBtn"></button>
        </li>
       </ul>
`
        var toDoTask = document.querySelectorAll('.toDoTask')

        for (var i = 0; i < toDoTask.length; i++) {
            toDoTask[i].addEventListener('mouseover', function () {
                var deleteBtn = document.querySelectorAll('.deleteBtn')
                var completeBtn = document.querySelectorAll('.completeBtn')
                event.stopImmediatePropagation()
                for (var i = 0; i < toDoTask.length; i++) {
                    deleteBtn[i].addEventListener('click', function () {
                       this.parentElement.parentElement.style.display='none'
                        toDoCounter-=1;
                        counterDiv.innerText='Liczba zadań do wykonania: '+toDoCounter
                        event.stopImmediatePropagation()
                    })
                }
                for (var j = 0; j < toDoTask.length; j++) {
                    completeBtn[j].addEventListener('click', function () {
                        var completedTask = this.parentElement.parentElement
                        var taskList = document.getElementById('taskList')
                        var btnsSink =completedTask.querySelectorAll('button')
                        btnsSink[0].style.display='none'
                        btnsSink[1].style.display='none'
                        var completedTaskClone = completedTask.cloneNode(true)
                        this.parentElement.parentElement.parentElement.removeChild(completedTask)
                        toDoCounter-=1
                        counterDiv.innerText='Liczba zadań do wykonania: '+toDoCounter
                        taskList.lastElementChild.appendChild(completedTaskClone)
                        var tickedImageClone=tickedImage.cloneNode(true)
                        completedTaskClone.appendChild(tickedImageClone)
                        event.stopImmediatePropagation()
                    })
                }
            })
        }
        taskInput.value = ''
    })
})

