const menu_open = document.querySelector('.ham');

function open_func() {
    let main = document.querySelector('.menu');
    let menu = document.querySelector('.ham');
    // let bg = document.querySelector('.container');
    main.classList.toggle('active');
    menu.classList.toggle('active');
    // bg.classList.toggle('active');

}

menu_open.addEventListener('click', open_func);

const menu_close = document.querySelector('.ham-close');

function close_func() {
    let main = document.querySelector('.menu');
    let menu = document.querySelector('.ham');
    main.classList.toggle('active');
    menu.classList.toggle('active');
}

menu_close.addEventListener('click', close_func);

const scroll_bannner = document.querySelector('.banner');

function scroll_func(){
    
}

scroll_bannner.addEventListener('scroll',scroll_func);

