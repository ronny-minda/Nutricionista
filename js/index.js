const nav = document.querySelectorAll('.nav');
const mainpage1 = document.querySelector('.mainpage1');
const mainpage2 = document.querySelector('.mainpage2');
const mainpage3 = document.querySelector('.mainpage3');
const mainpage4 = document.querySelector('.mainpage4');
const btna1 = document.querySelectorAll('.btn-a1');
const mainpage3__productos = document.querySelectorAll('.mainpage3__productos');


/* CONTROLAR BOTONES DE LA PAGINA #3 */
btna1[0].addEventListener('click', () => {
    console.log('BTN1111');
    btna1[2].classList.add('left');
    btna1[2].classList.remove('right');

    mainpage3__productos[0].classList.add('encendido1');
    mainpage3__productos[1].classList.remove('encendido1');
    mainpage3__productos[1].classList.remove('opacidad');

    setTimeout(function(){
        mainpage3__productos[0].classList.add('opacidad');
    }, 1);

});

btna1[1].addEventListener('click', () => {
    console.log('BTN22222');
    btna1[2].classList.remove('left');
    btna1[2].classList.add('right');

    mainpage3__productos[1].classList.add('encendido1');
    mainpage3__productos[0].classList.remove('encendido1');
    mainpage3__productos[0].classList.remove('opacidad');

    setTimeout(function(){
        mainpage3__productos[1].classList.add('opacidad');
    }, 1);
});



/* CONTROLAR PAGINAS */
nav[0].addEventListener('click', () => {
    /* console.log('0'); */
    navBar(0,1,2,3,4);
    mainpage1.classList.add('encendido');
    mainpage2.classList.remove('encendido');
    mainpage2.classList.remove('opacidad');
    mainpage3.classList.remove('encendido');
    mainpage3.classList.remove('opacidad');

    setTimeout(function(){
        mainpage1.classList.add('opacidad');
    }, 1);
});
nav[1].addEventListener('click', () => {
    /* console.log('1'); */
    navBar(1,0,2,3,4);
    
    mainpage2.classList.add('encendido');
    mainpage1.classList.remove('encendido');
    mainpage1.classList.remove('opacidad');
    mainpage3.classList.remove('encendido');
    mainpage3.classList.remove('opacidad');
    mainpage4.classList.remove('encendido');
    mainpage4.classList.remove('opacidad');

    setTimeout(function(){
        mainpage2.classList.add('opacidad');
    }, 1);
});
nav[2].addEventListener('click', () => {
    /* console.log('2'); */
    navBar(2,1,0,3,4);

    mainpage3.classList.add('encendido');
    mainpage2.classList.remove('encendido');
    mainpage2.classList.remove('opacidad');
    mainpage1.classList.remove('encendido');
    mainpage1.classList.remove('opacidad');
    mainpage4.classList.remove('encendido');
    mainpage4.classList.remove('opacidad');

    setTimeout(function(){
        mainpage3.classList.add('opacidad');
    }, 1);
});
nav[3].addEventListener('click', () => {
    /* console.log('3'); */
    navBar(3,1,2,0,4);

    mainpage4.classList.add('encendido');
    mainpage3.classList.remove('encendido');
    mainpage3.classList.remove('opacidad');
    mainpage2.classList.remove('encendido');
    mainpage2.classList.remove('opacidad');
    mainpage1.classList.remove('encendido');
    mainpage1.classList.remove('opacidad');

    setTimeout(function(){
        mainpage4.classList.add('opacidad');
    }, 1);
});
nav[4].addEventListener('click', () => {
    /* console.log('4'); */
    navBar(4,1,2,3,0);
});

/* FUNCION PARA CONTROLAR EL NAVBAR */
function navBar(a1,a2,a3,a4,a5) {
    nav[`${a1}`].classList.add('apagarnavbar');
    nav[`${a2}`].classList.remove('apagarnavbar');
    nav[`${a3}`].classList.remove('apagarnavbar');
    nav[`${a4}`].classList.remove('apagarnavbar');
    nav[`${a5}`].classList.remove('apagarnavbar');
}

/* function paginas(params) {
    mainpage1.classList.add('');
    mainpage2.classList.add('');
    mainpage1.classList.remove('');
    mainpage2.classList.remove('');
} */