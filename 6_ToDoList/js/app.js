document.addEventListener("DOMContentLoaded", function () {

    var newTask = document.createElement('li')
    newTask.innerHTML = ''
    var newTaskClone = newTask.cloneNode(true)
    var addTaskButton = document.getElementById('addTaskButton')
    addTaskButton.addEventListener('click', function () {
        var taskInput = document.getElementById('taskInput')

        this.nextElementSibling.firstElementChild.appendChild(newTaskClone)
        newTaskClone.innerHTML += ` 
        <ul class="toDoTask">${taskInput.value}
        <li>
        <button class="deleteBtn">Delete</button>
        <button class="completeBtn">Completed</button>
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

                        this.parentElement.parentElement.style.display = 'none'
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
                        taskList.lastElementChild.appendChild(completedTaskClone)
                        completedTask.style.display = 'none'
                        event.stopImmediatePropagation()
                    })
                }
            })
        }
        taskInput.value = ''
    })


})

