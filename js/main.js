let last_knownY = 0;
let ticking = false; //zero events added to queue
let nav = document.querySelector('.nav-section');
let navHeader = document.querySelector('.nav-header');
let avatar = document.getElementById('avatar');

function doesAnimate(posY) {
    console.log(posY);
    if (posY <= 91) {
        avatar.classList.add('slideUp');     //add slide up animation
        avatar.classList.remove('slideDown');   //remove slideDown class if present

        // navHeader.classList.replace('hidden', 'flex');
        navHeader.classList.add('nav-header-slideUp');
        navHeader.classList.remove('nav-header-slideDown');
    } else if (posY >= 80) {
        avatar.classList.add('slideDown');   //add slide down animation
        avatar.classList.remove('slideUp');     //remove slideUp class if present

        navHeader.classList.add('nav-header-slideDown');
        navHeader.classList.remove('nav-header-slideUp');
        // navHeader.classList.replace('flex', 'hidden');
    }
}

window.addEventListener('scroll', function (e) {
    last_knowY = nav.getBoundingClientRect().y;

    if (!ticking) {
        window.requestAnimationFrame(function () {
            doesAnimate(last_knowY);
            ticking = false;    //reset event queue
        });

        ticking = true; //event added to queue
    }
});