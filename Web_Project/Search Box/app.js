var btnSearch = document.querySelector(".search_icon");

btnSearch.addEventListener("click", function(){
    this.parentElement.classList.toggle('open')
})