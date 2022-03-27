const img = document.querySelector('img');
const grito = document.querySelector('.gemido');

function url() {
    img.src = 'wazowski1.png';
}

function pause(){
    grito.pause();
    grito.currentTime = 0;
}

img.addEventListener('click',()=>{
    pause();
    grito.play();
    img.src = 'wazowski2.png';
    setTimeout(url, 400);
});

document.addEventListener('keydown',(e)=>{
    console.log(e.code);
    switch (e.code){
        case 'ArrowDown':
            pause();
            grito.play();
            img.src = 'wazowski2.png';
            setTimeout(url, 100);
        break;
        case 'Enter':
            pause();
            grito.play();
            img.src = 'wazowski2.png';
            setTimeout(url, 100);
        break;
        case 'Space':
            pause();
            grito.play();
            img.src = 'wazowski2.png';
            setTimeout(url, 100);
        break;
    }
});