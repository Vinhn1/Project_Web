const draggable = document.querySelector(".draggable");
const boxes = document.querySelectorAll('.box');

draggable.addEventListener('dragstart', dragstart);
draggable.addEventListener('dragend', dragend);

boxes.forEach((box) =>{
    box.addEventListener('dragover', dragOver);
    box.addEventListener('drop', dragDrop);
})

function dragstart(){
    this.classList.add('dragging');
}

function dragend(){
    this.classList.remove('dragging');
}

function dragOver(e){
  // thêm preventDefault vì theo mặc định thả vào bên trong 1 phần tử sẽ bị vô hiệu hóa => xem con trỏ chuột khi over để rõ hơn
  e.preventDefault();
  this.appendChild(draggable);
}

function dragDrop(){
    this.appendChild(draggable);
}