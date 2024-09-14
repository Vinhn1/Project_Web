var range = document.querySelector('.range');
var rangeBar = document.querySelector(".range-bar");
var value = document.querySelector(".range-bar span");


function updateProcess(percent){
    rangeBar.style.width = `${percent}%`;
    value.innerHTML = `${percent}%`;

}


range.addEventListener('mousemove', function(e){
    var processWidth = e.pageX - this.offsetLeft;
    var percent = processWidth / this.offsetWidth * 100;
    percent = Math.round(percent);
    updateProcess(percent);
})

updateProcess(30);