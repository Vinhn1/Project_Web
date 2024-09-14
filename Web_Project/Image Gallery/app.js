var images = document.querySelectorAll('.wapper .image img')
var prev = document.querySelector('.prev')
var next = document.querySelector('.next')
var closeBtn = document.querySelector('.close')
var galleryImg = document.querySelector('.gallery_inner img')
var gallery = document.querySelector('.gallery')

var currentIndex = 0;

function galleryShow(){
    // ===============
    if(currentIndex == 0){
        prev.classList.add('hide')
    }else{
        prev.classList.remove('hide')
    }
    // =====================
     if (currentIndex == images.length - 1) {
       next.classList.add('hide');
     } else {
       next.classList.remove('hide');
     }
    // Display
     galleryImg.src = images[currentIndex].src;
     gallery.classList.add('show');
}
// click vào ảnh sẽ hiển thị lớn hơn
images.forEach((img, index)=>{
    img.addEventListener('click', function(){
        currentIndex = index
       galleryShow()

    })
})

closeBtn.addEventListener('click', function(){
    gallery.classList.remove('show')
})

document.addEventListener('keydown', function(e){
    if(e.keyCode == 27){
        gallery.classList.remove('show')
    }
})

prev.addEventListener('click', function(){
    if(currentIndex > 0){
        currentIndex--
        galleryShow()
    }
})

next.addEventListener("click", function () {
  if (currentIndex < images.length - 1) {
    currentIndex++;
    galleryShow();
  }
});