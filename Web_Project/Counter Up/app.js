let face = document.querySelector('.box.face h2');
let youtube = document.querySelector('.box.youtube h2');
let tiktok = document.querySelector('.box.tiktok h2');

function counterUp(el, to){
    let speed = 200;
    let from = 0;
    let step = to / speed;
    const counter = setInterval(function(){
        from += step;
        if(from > to){
            clearInterval(counter);
            el.innerText - to;
        }else{
            el.innerText = Math.ceil(from);
        }
    }, 1)
}

counterUp(face, 3300);
counterUp(youtube, 1000);
counterUp(tiktok, 9900);