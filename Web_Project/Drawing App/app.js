let color = document.querySelector("#color");
let eraser = document.querySelector("#eraser");
let decrease = document.querySelector("#decrease");
let increase = document.querySelector("#increase");
let sizeElement = document.querySelector("#size");
let save = document.querySelector("#save");
let clear = document.querySelector("#clear");
let canvas = document.querySelector("canvas");
let ctx = canvas.getContext("2d");

// Chức năng vẽ
let pos1 = { x: 0, y: 0 };
let pos2 = { x: 0, y: 0 };
let isDrawing = false;
let size = 10;
let colorPaint = "#000"; // Corrected variable name

// Bắt sự kiện mousedown trên canvas
canvas.addEventListener("mousedown", function (e) {
  pos1 = { x: e.offsetX, y: e.offsetY };
  isDrawing = true;
});

// Bắt sự kiện mousemove trên canvas
canvas.addEventListener("mousemove", function (e) {
  if (isDrawing) {
    pos2 = { x: e.offsetX, y: e.offsetY };

    // Vẽ hình tròn
    ctx.beginPath();
    ctx.arc(pos1.x, pos1.y, size / 2, 0, 2 * Math.PI); // Corrected radius to size/2 for accuracy
    ctx.fillStyle = colorPaint;
    ctx.fill();

    // Vẽ outline
    ctx.beginPath();
    ctx.moveTo(pos1.x, pos1.y);
    ctx.lineTo(pos2.x, pos2.y);
    ctx.strokeStyle = colorPaint;
    ctx.lineWidth = size;
    ctx.stroke();

    pos1.x = pos2.x;
    pos1.y = pos2.y;
  }
});

// Bắt sự kiện mouseup trên canvas
canvas.addEventListener("mouseup", function () {
  isDrawing = false;
});

// Chức năng đổi màu
color.addEventListener("change", function (e) {
  colorPaint = e.target.value;
});

// Chức năng tẩy
eraser.addEventListener("click", function () {
  colorPaint = "#ffffff"; // Corrected to a valid white color
});

// Giảm kích thước
decrease.addEventListener("click", function () {
  size -= 5;
  size = size > 5 ? size : 5; // Limit the size to a minimum of 5
  sizeElement.innerText = size;
});

// Tăng kích thước
increase.addEventListener("click", function () {
  size += 5;
  size = size < 30 ? size : 30; // Limit the size to a maximum of 30
  sizeElement.innerText = size;
});

// Khởi tạo
sizeElement.innerText = size;

clear.addEventListener('click', function(){
    let canvasStarts = canvas.getClientRects()[0];
    ctx.clearRect(0, 0, canvasStarts.width, canvasStarts.height);
})

save.addEventListener('click', function(){
    let output = canvas.toDataURL('image/png');
    save.setAttribute('href', output);
    save.click();
})