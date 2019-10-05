var popapWriteUs = document.querySelector('.write-us');
var linkWriteUs = document.querySelector('.information-contact__link');
var linkClosePopapWriteUs = document.querySelector('.write-us .btn-close');

var popapMap = document.querySelector('.map');
var linkMap = document.querySelector('.information-contact__card');
var linkClosePopapMap = document.querySelector('.map .btn-close');

var popapAddingGoods = document.querySelector('.adding-goods');
var linkBuy = document.querySelectorAll('.goods-list__buy');
var linkContinueAddingGoods = document.querySelector('.btn-continue');
var linkCloseAddingGoods = document.querySelector('.adding-goods .btn-close');

var isStorageSupport = true;
var storage = '';

if (popapWriteUs) {
    var formWriteUs = popapWriteUs.querySelector('.write-us__form');
    var inputNameWriteUs = popapWriteUs.querySelector('[name=name]');
    var inputMailWriteUs = popapWriteUs.querySelector('[name=mail]');
    var textareaMailWriteUs = popapWriteUs.querySelector('textarea');
}



// ==============================================<< Js code for popapWriteUs  >>=============================


// Вот с этими стораджами, я вообще не понимаю работает у меня код или нет?
try {
    stotage = localStorage.getItem('login');
}
catch (err) {
    isStorageSupport = false;
}

if (linkWriteUs) {

    linkWriteUs.addEventListener('click', function(evt) {
        evt.preventDefault();
        popapWriteUs.classList.add('modal-show');

        if (storage) {
            inputNameWriteUs.value = storage;
            inputMailWriteUs.focus();
        } 
        else {
            inputNameWriteUs.focus();
        }
    });

}

if (formWriteUs) {

    formWriteUs.addEventListener('submit', function(evt) {
        if (!inputNameWriteUs.value ||  !inputMailWriteUs.value || !textareaMailWriteUs.value) {
            evt.preventDefault();
            popapWriteUs.classList.remove('modal-error');
            popapWriteUs.offsetWidth = popapWriteUs.offsetWidth;
            popapWriteUs.classList.add('modal-error');
        }
        else {
            if (isStorageSupport) {
                localStorage.setItem('login', inputNameWriteUs.value);
            }
        }
    });

}

if(linkClosePopapWriteUs) {

    linkClosePopapWriteUs.addEventListener('click', function(evt) {
        evt.preventDefault();
        popapWriteUs.classList.remove('modal-show');
        popapWriteUs.classList.remove('modal-error');
    });

    window.addEventListener('keydown',  function(evt) {
        if (evt.keyCode === 27) {
            if (popapWriteUs.classList.contains('modal-show')) {
                evt.preventDefault();
                popapWriteUs.classList.remove('modal-show');
                popapWriteUs.classList.remove('modal-error');
            }
        }
    });

}


    
// ==============================================<< Js code for popapMap >>=============================



if(linkMap) {

    linkMap.addEventListener('click', function(evt) {
        evt.preventDefault();
        popapMap.classList.add('modal-show');
    });

}

if(linkClosePopapMap) {

    linkClosePopapMap.addEventListener('click', function(evt) {
        evt.preventDefault();
        popapMap.classList.remove('modal-show');
    });

    window.addEventListener('keydown',  function(evt) {
        if (evt.keyCode === 27) {
            if (popapMap.classList.contains('modal-show')) {
                evt.preventDefault();
                popapMap.classList.remove('modal-show');
            }
        }
    });

}



// ==============================================<<  Js code for popapAddingGoods  >>=============================



if (linkBuy) {

    for (var i = 0; i < linkBuy.length; i++) {
        linkBuy[i].addEventListener('click', function(evt) {
            evt.preventDefault();
            popapAddingGoods.classList.add('modal-show');
        });
    }

}

if(linkCloseAddingGoods) {

    linkContinueAddingGoods.addEventListener('click', function(evt) {
        evt.preventDefault();
        popapAddingGoods.classList.remove('modal-show');
    });

    linkCloseAddingGoods.addEventListener('click', function(evt) {
        evt.preventDefault();
        popapAddingGoods.classList.remove('modal-show');
    });

    window.addEventListener('keydown',  function(evt) {
        if (evt.keyCode === 27) {
            if (popapAddingGoods.classList.contains('modal-show')) {
                evt.preventDefault();
                popapAddingGoods.classList.remove('modal-show');
            }
        }
    });

}







