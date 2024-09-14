var input = document.querySelector('input');
var button = document.querySelector('button');
var form =  document.querySelector('form');
var todos = document.querySelector(".todo");

form.addEventListener('submit', function(event){
    event.preventDefault();
    let val = input.value.trim();
    if(val){
         addTodoElement({
           text: val,
         })
         saveTosoList();
    }
    input.value = '';
})

function addTodoElement(todo){
   var li = document.createElement('li');
   li.innerHTML = ` <span>${todo.text}</span>
        <i class="bx bxs-trash-alt"></i>`;
        if(todo.status === 'completed'){
            li.setAttribute("class", "completed");
        }
        li.addEventListener('click', function(){
            // Ấn 1 lần không thể trở lại như bth
           // this.setAttribute('class', 'completed');

        //    click 2 lần có thể bth
            this.classList.toggle('completed');

            saveTosoList();
        })

        li.querySelector('i').addEventListener('click', function(){
          this.parentElement.remove();
          saveTosoList();
        })
        todos.appendChild(li);
}

function saveTosoList(){
     let todoList = document.querySelectorAll('li');
     let todoStrorage = [];
     todoList.forEach(function(item){
        let text = item.querySelector('span').innerText
        let status = item.getAttribute('class')
        todoStrorage.push({
          text,
          status,
        });
     })
    localStorage.setItem('todoList', JSON.stringify(todoStrorage));
}

function init(){
  let data = JSON.parse(localStorage.getItem("todoList"));
  data.forEach(function(item){
    addTodoElement(item);
  })
}

init();