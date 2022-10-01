const no = document.getElementById('no');
let moving = false;

no.addEventListener('mouseover', () => {
    if (moving) {return;}
    void no.offsetWidth;
    if (no.style.animation.includes('transF')) {
        no.style.animation = 'transB 0.5s linear forwards';
    } else {
        no.style.animation = 'transF 0.5s linear forwards';
    }
    moving = true;
    setTimeout(()=> {moving = false;}, 500);
});
